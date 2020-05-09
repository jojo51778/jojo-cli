import { version } from '../../package.json'

//当前package.json的版本号
const VERSION = version

// 用户根目录
const HOME = process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME']
const RC = `${HOME}/.jojoclirc`

const DEFAULTS = {
  registry: 'zhufeng-cli',
  type: 'orgs'
}

// 下载目录
const DOWNLOAD = `${HOME}/.template`

export {
  VERSION,
  RC,
  DEFAULTS,
  DOWNLOAD
}