import { Command } from '../bare-commander.js'
const program = new Command();

function optionsVariadic(inputArgs) {

    console.log(`Try the following:
    pear dev . optionsVariadic --HELP
    pear dev . optionsVariadic -n 1 2 3 --letter a b c
    pear dev . optionsVariadic --letter=A -n80 operand
    pear dev . optionsVariadic --letter -n 1 -n 2 3 -- operand`)

    program
    .helpOption('-H, --HELP', 'read more information')
    .option('-n, --number <value...>', 'specify numbers')
    .option('-l, --letter [value...]', 'specify letters');
  
    program.parse(inputArgs, { from: "user" })
    console.log('Options: ', program.opts());
    console.log('Remaining arguments: ', program.args);
      }

const _optionsVariadic = optionsVariadic
export { _optionsVariadic as optionsVariadic };
