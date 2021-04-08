const pre = require("prettier")
const { exec, spawn } = require('child_process');

// pre.format()
// exec(`npx prettier --write .`)


const fs = require('fs')

const content = '一些内容'

fs.writeFile('/Users/chenli/kingsoft/chenli7/CFP/1.json', content, err => {
  if (err) {
    console.error(err)
    return
  }
  //文件写入成功。
})