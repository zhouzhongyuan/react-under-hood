


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
```
188Mb->5Mb

```bash
cd src/react
npm install //(node@6, node@8不行)
npm run build 
```

eslint
```bash
(
  export PKG=eslint-config-airbnb;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)
```