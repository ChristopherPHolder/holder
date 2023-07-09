import { existsSync, readdirSync, readFileSync } from 'fs';
import { join, posix } from 'path';
import { ExecutorContext } from '@nx/devkit';

import { S3UploadExecutorSchema } from './schema';
import { ERROR_NO_BUCKET, ERROR_NO_BUILD_DIR, ERROR_NO_FILES_IN_BUILD_DIR } from './contants';
import { PutObjectCommand, PutObjectCommandOutput, S3Client } from '@aws-sdk/client-s3';


export default async function runExecutor(
  options: S3UploadExecutorSchema,
  context: ExecutorContext
): Promise<{ success: boolean, message: string }> {
  console.info(`Running S3Upload executor for ${context.projectName}`);

  context.isVerbose && console.info('Executor Options: ', options);
  context.isVerbose && console.info('Executor Context: ', context);

  if (!options.bucket) {
    console.error(ERROR_NO_BUCKET);
    return { success: false, message: ERROR_NO_BUCKET };
  }

  if (!options.buildDir) {
    console.error(ERROR_NO_BUILD_DIR);
    return { success: false, message: ERROR_NO_BUILD_DIR };
  }

  const files = getFileNames(options.buildDir);
  if (!files.length) {
    console.error(ERROR_NO_FILES_IN_BUILD_DIR);
    return { success: false, message: ERROR_NO_FILES_IN_BUILD_DIR };
  }

  const client = new S3Client({
    region: 'us-east-1'
  });

  const commandOutputs: Promise<PutObjectCommandOutput>[] = files.map((file) => {
    context.isVerbose && console.info(`Uploading: ${file.replace(options.buildDir, '')}`);
    const command = new PutObjectCommand( {
      Key: file.replace(options.buildDir, ''),
      Bucket: options.bucket,
      Body: readFileSync(file),
      ContentType: contentTypeMap[fileExt(file)],
      CacheControl: cachecontrolMap[fileExt(file)]
    });
    return client.send(command);
  })

  await Promise.all(commandOutputs);

  client.destroy();

  context.isVerbose && console.info(`Successfully uploaded ${files.length} to ${options.bucket}`);

	return {
		success: true,
    message: 'Assets uploaded successfully!'
	};
}

function getFileNames(distDir: string): string[] {
  if (!existsSync(distDir)) return [];
  return readdirSync(distDir, {encoding: 'utf-8', withFileTypes: true}).flatMap(entry => {
    return entry.isFile() ? posix.join(distDir, entry.name) : getFileNames( posix.join(distDir, entry.name))
  })
}

const fileExt = (fileName: string) => fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length) || fileName;

type FileType = 'html' | 'js';

const contentTypeMap: Record<FileType, string> = {
  'html': 'text/html',
  'js': 'application/javascript'
}

const cachecontrolMap: Record<FileType, string> = {
  'html': 'text/html',
  'js': 'public, max-age=31536000, immutable'
}
