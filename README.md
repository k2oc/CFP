# Code Format Plugin

## Install
---
```Console
$ npm install ksr-cfp
```

## Usage
---
```js
script:{
    "format": "ksr-cfp -d ./src"
}
```
or 
```Console
$ ksr-cfp -d ./src
```

or use CLI

```Console

$ ksr-cfp -d ./src -c true
```

## Options
---
| Param | Required |  Default | Alias| Introduce
| :---: | :---: | :---:| :---:| :---:|
| -d | false | . | --directory | File Path|
| -p | false || -path| --find-config-path and --config  |
| -c | false | false | --cli | excute CLI |                     

<br/>

## Support 

---
| File Suffix or Valid options| Plugin |
| :---: | :---| 
| `*`.pug| @prettier/plugin-pug| 
| `*`.ts|  @typescript-eslint/typescript-estree |
| `*`.css、`*`.scss、`*`.less| postcss-scss and postcss-less |
| `*`.json 、`*`.json5|  @babel/parser parseExpression |
|`*`.md |  remark-parse |
|`*`.html、`*`.vue 、`*`.ag(angular) |angular-html-parser|
|`*`.yaml| yaml and yaml-unist-parser |
|graphql| graphql/language |
| babel , babel-flow |  @babel/parser|
| babel-ts| typescript|
| flow | flow-parse |

<br/>

## Flow
