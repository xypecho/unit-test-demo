import { timer1 } from './timer';

jest.useFakeTimers();

test('测试mock timer', () => {
    const callback = jest.fn();
    timer1(callback);
    jest.runAllTimers(); // 在这里，把定时器里面回调立即执行完
    // jest.runOnlyPendingTimers(); // 只执行最外层的定时器，里面嵌套的定时器不会被执行
    // jest.advanceTimersByTime(3000); // 快进3秒
    expect(callback).toHaveBeenCalledTimes(1); // 期望回调被调用一次
})