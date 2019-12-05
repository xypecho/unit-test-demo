import { generateConfig } from "./demo.js";

// 如果是传统方法，demo.js里面的generateConfig方法每增加一个参数，我们这边就要跟着增加
// test('测试对象返回的参数是否正确', () => {
//     expect(generateConfig()).toEqual({
//         serve: 'http://localhost',
//         port: 8080,
//         domain: 'localhost'
//     })
// })

// 优化版,利用屏幕快照，toMatchSnapshot()
// 会在当前文件夹下创建一个名字叫‘__snapshots__’的文件夹，里面存放这参数的快照
// 屏幕快照的主要使用场景为：测试配置文件
// test("测试屏幕快照", () => {
//     expect(generateConfig()).toMatchSnapshot();
// })

// 如果配置项里面有动态的参数，例如new Date(),如何保证快照实时更新
// test.only('测试new Date()', () => {
//     expect(generateConfig()).toMatchSnapshot({
//         time: expect.any(Date) // 期望time是date类型，不验证具体数值
//     });
// })

// 不创建快照文件夹，直接在行在创建快照
// 首先需要npm install prettier
test("测试行内快照", () => {
  expect(generateConfig()).toMatchInlineSnapshot(
    {
      time: expect.any(Date)
    },
    `
    Object {
      "domain": "localhost",
      "port": 8080,
      "serve": "http://localhost",
      "time": Any<Date>,
    }
  `
  );
});
