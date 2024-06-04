import { Command } from '../bare-commander.js'
const program = new Command();

function customHelpDescription(inputArgs) {

    console.log(`Try the following:
    pear dev . customHelpDescription --HELP
    pear dev . customHelpDescription child --HELP`)

    program
    .helpOption('-H, --HELP', 'read more information')
    .option('-s, --sessions', 'add session support')
    .option('-t, --template <engine>', 'specify template engine', 'jade');
  
  program
    .command('child')
    .option('--gender', 'specific gender of child')
    .action((options) => {
      console.log('Childsubcommand...');
    });
  
    program.parse(inputArgs, { from: "user" })
  }

const _customHelpDescription = customHelpDescription
export { _customHelpDescription as customHelpDescription };
