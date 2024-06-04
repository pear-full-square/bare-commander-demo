import { Command } from '../bare-commander.js'
const program = new Command();

function customVersion(inputArgs) {

    console.log(`Try the following:
    pear dev . customVersion --HELP
    pear dev . customVersion -V
    pear dev . customVersion --VERSION`)

    program
    .helpOption('-H, --HELP', 'read more information')
    .version('0.0.1', '-V, --VERSION', 'new version message')
    .option('-s, --sessions', 'add session support')
    .option('-t, --template <engine>', 'specify template engine', 'jade');
  
    program.parse(inputArgs, { from: "user" })
  }

const _customVersion = customVersion
export { _customVersion as customVersion };
