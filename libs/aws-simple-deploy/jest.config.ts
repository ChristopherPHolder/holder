/* eslint-disable */
export default {
	displayName: 'aws-simple-deploy',
	preset: '../../jest.preset.js',
	transform: {
		'^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
	},
	moduleFileExtensions: ['ts', 'js', 'html'],
	coverageDirectory: '../../coverage/libs/aws-simple-deploy',
};
