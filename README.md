### 0、 名词解释

TDD(Test Driven Development)：即测试驱动开发 ，先写测试用例，再写代码

BDD(Behavior Driven Development)：即行为驱动开发，先写代码，然后去写测试

测试覆盖率：测试的代码占业务代码比例

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

### lesson-5 在jest中mock数据

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
```

### lesson-6 屏幕快照

屏幕快照的主要使用场景为：测试配置文件

```
// 如果是传统方法，demo.js里面的generateConfig方法每增加一个参数，我们这边就要跟着增加
test('测试对象返回的参数是否正确', () => {
    expect(generateConfig()).toEqual({
        serve: 'http://localhost',
        port: 8080,
        domain: 'localhost'
    })
})

// 优化版,利用屏幕快照，toMatchSnapshot()
// 会在当前文件夹下创建一个名字叫‘__snapshots__’的文件夹，里面存放这参数的快照
test.only("测试屏幕快照", () => {
    expect(generateConfig()).toMatchSnapshot();
})
```

### lesson-7 在jest中mock接口请求

利用jest的mock来测试接口，从而避免请求真实的线上接口。

在`.test.js`文件所在的同级文件夹下创建一个`__mocks__`文件夹，在这个里面编写mock的接口。

```
jest.mock('./demo'); // 这段代表让jest来mockdemo文件夹里面export的函数
// jest.unmock('./demo'); // 取消模拟

// 如果不想使用mock来模拟某个函数，可以使用jest.requireActual()
```

### lesson-8 在jest中测试定时器

jest 提供了mock timer 的功能，不要再使用真实的时间在这里等了，一个假的时间模拟一下就可以了。

```
import { timer1 } from './timer';

jest.useFakeTimers();

test('测试mock timer', () => {
    const callback = jest.fn();
    timer1(callback);
    jest.runAllTimers(); // 在这里，把定时器里面回调立即执行完
    expect(callback).toHaveBeenCalledTimes(1); // 期望回调被调用一次
})
```

### lesson-9 对dom操作进行测试

node是没有dom的，jest在node环境下模拟了一套dom的api

### vue-todolist

```
// shallowMount是浅渲染,只会渲染HelloWorld组件，而不会渲染HelloWorld组件中的子组件(shallowMount更适合单元测试，反之mount更适合集成测试)
const wrapper = shallowMount(HelloWorld, {
    propsData: { msg }
})
```
