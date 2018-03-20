


[react(v15.4.2)](https://github.com/facebook/react/tree/v15.4.2)
```bash
git clone git@github.com:facebook/react.git
```
react项目真心大(130Mb)

reset到15.4.2
```bash
git reset --hard 03464f0

```
删除react的git
```bash
rm -rf src/react/.git src/react/docs src/react/examples
du -h --max-depth=1 src/react/
find . -name __tests__ -type d -print0|xargs -0 rm -r --
```
188Mb->5Mb

```bash
cd src/react
npm install //(node@6, node@8不行)
npm run build 
```
build
```bash
    'delete-build-modules', // 清理build文件夹
    'build-modules',
    'npm-react:release',
    'npm-react-dom:release',
    'delete-zzydev-unused',// 清理与调试无关的文件
```

```bash
gulp react:modules
```



> 打开 gulpfile.js 文件搜索react:modules这个Task，在这个任务中FB解决了全局系统依赖的问题。src 目录下的源文件会被编译成扁平化的结构，这也意味着所有的文件都在同一级，所以你可以在 build 之后的文件中看到路径被转化成了相对路径。

eslint
```bash
(
  export PKG=eslint-config-airbnb;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)
```

http://127.0.0.1:8080/