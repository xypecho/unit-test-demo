### lesson-1 实现一个最简单的单元测试

最基础的单元测试，将`math.js`里面的方法导出，然后执行`npm run jest`即可看到测试结果。

### lesson-2 自定义jest的配置项

```
npx jest --init // 暴露jest配置项

npm jest --coverage // 代码覆盖率，执行此命令后会在当前目录下生成一个coverage文件夹，打开里面的lcov-report里面index.html即可看到覆盖率
```

每次改动代码都需要手动执行`npm run test`,如果希望可以热更新的话可以在`package.json`文件做如下改动：
```
  "scripts": {
    "test": "jest --watchAll"
  },
```

匹配器

```
toBe // 使用 Object.is 来实现精确匹配，例如expect(10).toBe(10)，相当于Object.is(10,10)

toEqual // 可以用来匹配对象内容是否相等,例如 const a = { name: 'test' }; expect(a).toBe({ name: 'test' }); 返回true

toBeNull // 看返回值是否===null, expect(undefined).toBeNull() 返回false
```
[更多匹配器查看这里](https://www.jianshu.com/p/ef520f3aba00) 

[官方文档](https://jestjs.io/docs/en/expect)

### lesson-3 测试异步函数

更多案例看`lesson-3`文件夹下的`fetchData.test.js`
```
test('测试ajax数据', (done) => {
    fetchData((data) => {
        expect(data).toEqual({
            status: "3.0.12"
        })
        done(); // 在ajax完成后调用done函数，不调用的话不管什么情况都会返回成功
    })
})
```

### lesson-4 jest的钩子函数

```
// 钩子函数，jest在运行时的某一时刻自动运行的函数

beforeAll(() => {
    // 在所有测试用例运行前，执行的函数
})

beforeEach(() => {
    // 每个测试用例执行前都会执行的函数
})

beforeAll(() => {
    // 在所有测试用例运行结束，执行的函数
})
```

```
// describe可以将测试用例进行分组
describe('测试增加相关的方法', () => {
    test('测试addOne', () => {
        _counter.addOne();
        expect(_counter.number).toBe(1);
    })
    test('测试addTwo', () => {
        _counter.addTwo();
        expect(_counter.number).toBe(2);
    })
})

describe('测试减少相关的方法', () => {
    test('测试minusOne', () => {
        _counter.minusOne();
        expect(_counter.number).toBe(-1);
    })
    test('测试minusTwo', () => {
        _counter.minusTwo();
        expect(_counter.number).toBe(-2);
    })
})
```

### lesson-5 在jest中mock

为了不改动项目源代码，我们可以利用jest来mock一些数据或者函数。
```
test('测试是否调用了回调函数', () => {
    const func = jest.fn(); // mock函数，捕获函数的调用
    runCallback(func);
    expect(func).toBeCalled(); // toBeCalled匹配器代表是否被调用过
}) 

test('测试回调函数有没有被调用两次', () => {
    const func = jest.fn();
    runCallback(func);
    runCallback(func);
    console.log(func.mock)
    expect(func.mock.calls.length).toBe(2);
}) 

// test.only表示如果当前有多个测试用例的话，只测这一个
test.only('测试only', () => {
    const func = jest.fn();
    func.mockReturnValueOnce('hello'); // 手动给mock的函数增加返回值
    runCallback(func);
    runCallback(func);
    runCallback(func);
    console.log(func.mock)
    expect(func.mock.calls.length).toBe(3);
}) 
```

