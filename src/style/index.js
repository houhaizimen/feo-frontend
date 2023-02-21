const fs = require('fs')
const path = require('path')

/**
 * 读取指定路径下的所有文件路径
 */
function getAllPath(paths, files) {
  const dirs = fs.readdirSync(paths)
  dirs.map((item) => {
    const newPath = paths + '/' + item
    const d = fs.statSync(newPath)
    if (d.isDirectory()) {
      getAllPath(newPath, files)
    } else {
      const ethname = path.extname(newPath)
      if (ethname === '.scss') files.push(newPath)
    }
  })
  return files
}

// 写入文件
function writePath() {
  const configScss = fs.readFileSync(path.resolve(__dirname, './config.scss'))
  const stylePath = path.resolve(__dirname, './style.scss')
  fs.writeFileSync(stylePath, `${configScss}\n`, (e) => console.error(e))
  const components_style_list =  getAllPath('./src/components', [])
  const page_style_list =  getAllPath('./src/page', [])
  const list = [...components_style_list, ...page_style_list]
  list.forEach((i) => {
    const filePath = i.replace('./src', '@')
    fs.appendFileSync(stylePath, `@import "${filePath}";\n`)
  })
}

writePath()