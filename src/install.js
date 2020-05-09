import ora from 'ora'
import { repoList, tagList, downloadLocal } from './utils/git'
import inquirer from 'inquirer'

let install = async() => {
  // 下载模板 选择模板
  // 通过配置文件 获取模板信息（有哪些模板）
  let loading = ora( 'fetching template ...');
  loading.start()
  let list = await repoList()
  loading.succeed()
  console.log(list)
  list = list.map(({ name }) => name)
  console.log(list)

  let answer = await inquirer.prompt([
    {
      type: 'list',
      name: 'project',
      choices: list,
      questions: 'please choice template'
    }
  ])
  //项目名字
  let project = answer.project;

  // 获取当前项目的版本号
  loading = ora('fetching tag ....');
    loading.start();
    list = await tagList(project);
    loading.succeed();
    list = list.map(({ name }) => name);
    answer = await inquirer.prompt([
        {
            type: 'list',
            name: 'tag',
            choices: list,
            questions: 'pleace choice tag'
        }
    ]);
    let tag = answer.tag;
    console.log(project, tag);

    //下载文件
    loading = ora('download project ...')
    loading.start()
    await downloadLocal(project, tag)
    loading.succeed()
}

export default install