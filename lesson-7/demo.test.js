import { fetchData } from './demo';

jest.mock('./demo'); // 这段代表让jest来mockdemo文件夹里面export的函数
// jest.unmock('./demo'); // 取消模拟

// 如果不想使用mock来模拟某个函数，可以使用jest.requireActual()

const { getNumber } = jest.requireActual('./demo');

test('mock数据', () => {
  return fetchData().then(data => {
    expect(data).toEqual({
      mock_status: "3.0.12"
    })
  })
})

test('测试同步函数getNumber', () => {
  expect(getNumber()).toBe(123);
})