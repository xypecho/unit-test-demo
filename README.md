### lesson-1 实现一个最简单的单元测试

最基础的单元测试，将`math.js`里面的方法导出，然后执行`npm run jest`即可看到测试结果。

### lesson-2 自定义jest的配置项

```
npx jest --init // 暴露jest配置项

npm jest --coverage // 代码覆盖率，执行此命令后会在当前目录下生成一个coverage文件夹，打开里面的lcov-report里面index.html即可看到覆盖率
```

### lesson-3 匹配器

每次改动代码都需要手动执行`npm run test`,如果希望可以热更新的话可以在`package.json`文件做如下改动：
```
  "scripts": {
    "test": "jest --watchAll"
  },
```

```
toBe // 使用 Object.is 来实现精确匹配，例如expect(10).toBe(10)，相当于Object.is(10,10)

toEqual // 可以用来匹配对象内容是否相等,例如 const a = { name: 'test' }; expect(a).toBe({ name: 'test' }); 返回true

toBeNull // 看返回值是否===null, expect(undefined).toBeNull() 返回false
```
[更多匹配器查看这里](https://www.jianshu.com/p/ef520f3aba00)