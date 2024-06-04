import { Command } from '../bare-commander.js'
const program = new Command();

function customHelp(inputArgs) {

    console.log(`Try the following:
    pear dev . customHelp --HELP`)

    program.helpOption('-H, --HELP', 'read more information')
    program.option('-f, --foo', 'enable some foo');
    program.addHelpText(
      'after',
      `
    
    Example call:
      $ custom-help --help`,
    );
    
    program.parse(inputArgs, { from: "user" })
  }

const _customHelp = customHelp
export { _customHelp as customHelp };

