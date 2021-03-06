import program from "commander";
import { VERSION } from "./utils/constants";
import main from './index';

let actionMap = {
  install: {
    alias: "i",
    description: "install template",
    examples: ["jojo-cli i", "jojo-cli install"],
  },
  config: {
    alias: "c",
    description: "config .zfclirc",
    examples: [
      "jojo-cli config set <k> <v>",
      "jojo-cli config get <k>",
      "jojo-cli config remove <k>",
    ],
  },
  "*": {
    alias: "",
    description: "not found",
    examples: [],
  },
};

Object.keys(actionMap).forEach((action) => {
  program
    .command(action)
    .description(actionMap[action].description)
    .alias(actionMap[action].alias)
    .action(() => {
      if(action === 'config') {
        main(action, ...process.argv.slice(3))
      }
      if(action === 'install') {
        main(action)
      }
    });
});

function help() {
  console.log('\r\n' + 'how to use command')
  Object.keys(actionMap).forEach(action => {
    actionMap[action].examples.forEach(example => {
      console.log('   - ' + example)
    })
  })
}

program.on('-h', help)
program.on('--help', help)
program.version(VERSION, "-v --version").parse(process.argv);
