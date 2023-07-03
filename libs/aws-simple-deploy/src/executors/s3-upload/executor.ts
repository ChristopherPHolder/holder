import { readdirSync } from 'fs';
import { join } from 'path';
import { ExecutorContext } from '@nx/devkit';

import { S3UploadExecutorSchema } from './schema';
import { ERROR_NO_BUCKET, ERROR_NO_BUILD_DIR } from './contants';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';


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

  try {
    const files = getFileNames(options.buildDir);
    console.log(files)
  } catch (e) {
    console.error(e)
  }

  const client = new S3Client({
    region: 'us-east-1'
  });

  const command = new PutObjectCommand({
    Bucket: options.bucket,
    Key: undefined,
    Body: 'Hello world!'
  });

  try {
    const response = await client.send(command);
    console.log(response);
  } catch (err) {
    console.error(err);
  }

  client.destroy();

	return {
		success: true,
    message: 'Assets uploaded successfully!'
	};
}

function getFileNames(distDir: string): string[] {
  return readdirSync(distDir, {encoding: 'utf-8', withFileTypes: true}).flatMap(entry => {
    return entry.isFile() ? join(distDir, entry.name) : getFileNames(join(distDir, entry.name))
  })
}
