import { fetchData, fetchPromise } from './fetchData';

test('测试ajax数据', (done) => {
    fetchData((data) => {
        expect(data).toEqual({
            status: "3.0.12"
        })
        done();
    })
})

test('测试promise返回', () => {
    return fetchPromise().then((res) => {
        expect(res.data).toEqual({
            status: "3.0.12"
        })
    })
})

test('测试返回404', () => {
    // 这边如果接口正常调用则不会跑下面的代码，单元测试也会返回true
    // 加上下面这行则强制走下面的代码
    expect.assertions(1);
    return fetchPromise().catch(e => {
        expect(e.toString().indexOf('404') > -1).toBe(true);
    })
})

test('测试promise的resolves', () => {
   return expect(fetchPromise()).resolves.toMatchObject(({
        data: {
            status: "3.0.12"
        }
    }))
})

test('测试promise的reject', () => {
    // 只要接口报错就会运行下面的代码
    return expect(fetchPromise()).rejects.toThrow();
})

test('测试使用await', async () => {
    await expect(fetchPromise()).resolves.toMatchObject(({
        data: {
            status: "3.0.12"
        }
    }))
})