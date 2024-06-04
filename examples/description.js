import { Command } from '../bare-commander.js'
const program = new Command();

function description(inputArgs) {

    console.log(`Try the following:
    pear dev . description
    pear dev . description --HELP`)

    program
    .helpOption('-H, --HELP', 'read more information')
    .version('0.0.1')
    .description('Application simple description')
    .option('-f, --foo', 'enable some foo')
    .option('-b, --bar', 'enable some bar')
    .option('-B, --baz', 'enable some baz');
  
    program.parse(inputArgs, { from: "user" })
    if (!program.args.length) program.help();
  }

const _description = description
export { _description as description };
