import { Command } from '../bare-commander.js'
const program = new Command();

// This is used as an example in the README for the Quick Start.
function split(inputArgs) {

    console.log(`Try the following:
    pear dev . split --HELP
    pear dev . split -s / --fits a/b/c
    pear dev . split -s / --first a/b/c
    pear dev . split --separator=, a,b,c`)

    program
    .helpOption('-H, --HELP', 'read more information')
    .option('--first').option('-s, --separator <char>');

    program.parse(inputArgs, { from: "user" })
    const options = program.opts();
    const limit = options.first ? 1 : undefined;
    if(program.args.length > 0) console.log(program.args[0].split(options.separator, limit));
 }

const _split = split
export { _split as split };
