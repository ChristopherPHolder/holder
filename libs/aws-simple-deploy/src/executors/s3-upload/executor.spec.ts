import { S3UploadExecutorSchema } from './schema';
import executor from './executor';
import { ExecutorContext } from '@nx/devkit';
import { ERROR_NO_BUCKET, ERROR_NO_BUILD_DIR } from './contants';

const options: S3UploadExecutorSchema = {
  bucket: 'Example string',
  buildDir: 'Example buildDir',
};

const context: ExecutorContext = {
  configurationName: '',
  cwd: '',
  isVerbose: false,
  nxJsonConfiguration: undefined,
  projectGraph: undefined,
  projectName: '',
  projectsConfigurations: undefined,
  root: '',
  target: undefined,
  targetName: '',
  taskGraph: undefined,
  workspace: undefined
}

describe('S3Upload Executor', () => {
	it('can run', async () => {
		const output = await executor(options, context);
		expect(output.success).toBe(true);
	});

  it('throws if no bucket option is passed', async () => {
    const output = await executor({ ...options, bucket: undefined }, context);
    expect(output.success).toBe(false);
    expect(output.message).toBe(ERROR_NO_BUCKET);
  });

  it('Throws if no bucket option is passed', async () => {
    const output = await executor({ ...options, buildDir: undefined}, context);
    expect(output.success).toBe(false);
    expect(output.message).toBe(ERROR_NO_BUILD_DIR);
  })
});
