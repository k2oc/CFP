# Code Format Plugin

[prettier](https://prettier.bootcss.com)

> Ready
```shell
npm i CFP -D 
```
> Excute
```
CFP -s ./src -p ./prettier.json
```


> Polyfill

https://www.admin5.com/article/20201116/975806.shtml
https://vuejs.github.io/vetur/guide/formatting.html#formatters

> 转换插件

- prettyhtml -> html
- prettier -> css\less\scss\postcss\ts
- stylus-supermacy -> stylus
- vscode
- vetur -> .vue
- ESlint -> 校验 vue
- Pug -> @prettier/plugin-pug
- Jade

> 执行命令

1.Format all

`npx prettier --write .`

2.Format

> 解决冲突

1.解决 Prettier 和 tslint 冲突

[tslint-config-alloy](https://github.com/AlloyTeam/tslint-config-alloy)

```shell
npm install --save-dev tslint typescript tslint-config-alloy
npm install --save-dev prettier tslint-config-prettier
```

tslint.config

```JavaScript
// tslint.config 的 extends 添加 tslint-config-prettier
{
    "extends": ["tslint-config-alloy", "tslint-config-prettier"],
    "linterOptions": {
        "exclude": ["**/node_modules/**"]
    },
    "rules": {
        // 这里填入你的项目需要的个性化配置，比如：
        //
        // // 一个缩进必须用两个空格替代
        // // @has-fixer 可自动修复
        // // @prettier 可交由 prettier 控制
        // "indent": [true, "spaces", 2]
    }
}
```

prettier.config.js or .prettierrc.js

```JavaScript
module.exports = {
    // 一行最多 100 字符
    printWidth: 100,
    // 使用 4 个空格缩进
    tabWidth: 4,
    // 不使用缩进符，而使用空格
    useTabs: false,
    // 行尾需要有分号
    semi: true,
    // 使用单引号
    singleQuote: true,
    // jsx 不使用单引号，而使用双引号
    jsxSingleQuote: false,
    // 末尾不需要逗号
    trailingComma: 'none',
    // 大括号内的首尾需要空格
    bracketSpacing: true,
    // jsx 标签的反尖括号需要换行
    jsxBracketSameLine: false,
    // 箭头函数，只有一个参数的时候，也需要括号
    arrowParens: 'always',
    // 每个文件格式化的范围是文件的全部内容
    rangeStart: 0,
    rangeEnd: Infinity,
    // 不需要写文件开头的 @prettier
    requirePragma: false,
    // 不需要自动在文件开头插入 @prettier
    insertPragma: false,
    // 使用默认的折行标准
    proseWrap: 'preserve',
    // 根据显示样式决定 html 要不要折行
    htmlWhitespaceSensitivity: 'css',
    // 换行符使用 lf
    endOfLine: 'lf'
};
```
