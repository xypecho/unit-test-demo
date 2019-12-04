import Counter from './counter';

let _counter = null;

// 钩子函数，jest在运行时的某一时刻自动运行的函数

beforeAll(() => {
    // 在所有测试用例运行前，执行的函数
})

beforeEach(() => {
    _counter = new Counter();
    // 每个测试用例执行前都会执行的函数
})

beforeAll(() => {
    // 在所有测试用例运行结束，执行的函数
})

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
