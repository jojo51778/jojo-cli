// 命令行的命令，主流程控制
import { betterRequire } from './utils/common'
import { resolve } from 'path'
let apply = (action, ...args) => {
  betterRequire(resolve(__dirname, `./${action}`))(...args)
}

export default apply