module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  // 测试覆盖率：测试的代码占业务代码比例
  collectCoverageFrom: ['**/*.{vue}', '!**/node_modules/**']
}
