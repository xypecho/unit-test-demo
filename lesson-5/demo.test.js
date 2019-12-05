import { runCallback, fetchData } from './demo';
import axios from 'axios';

// test('测试是否调用了回调函数', () => {
//     const func = jest.fn(); // mock函数，捕获函数的调用
//     runCallback(func);
//     expect(func).toBeCalled(); // toBeCalled匹配器代表是否被调用过
// })

// test('测试回调函数有没有被调用两次', () => {
//     const func = jest.fn();
//     func.mockReturnValueOnce('hello'); // 手动给mock的函数增加返回值
//     runCallback(func);
//     runCallback(func);
//     runCallback(func);
//     console.log(func.mock)
//     expect(func.mock.calls.length).toBe(3);
// }) 

// test.only('测试only', () => {
//     const func = jest.fn();
//     func.mockReturnValueOnce('hello'); // 手动给mock的函数增加返回值
//     runCallback(func);
//     runCallback(func);
//     runCallback(func);
//     console.log(func.mock)
//     expect(func.mock.calls.length).toBe(3);
// }) 

jest.mock('axios');

test.only('测试ajax请求', async () => {
    axios.get.mockResolvedValue({ data: 'hello' });
    await fetchData().then(res => {
        expect(res).toBe('hello')
    })
})