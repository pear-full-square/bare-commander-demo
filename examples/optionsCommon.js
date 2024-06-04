import { Command } from '../bare-commander.js'
const program = new Command();

// This is used as an example in the README for:
//    Common option types, boolean and value
function optionsCommon(inputArgs) {

    console.log(`Try the following:
    pear dev . optionsCommon --HELP
    pear dev . optionsCommon -p
    pear dev . optionsCommon -d -s -p vegetarian
    pear dev . optionsCommon --pizza-type=cheese`)

    program
    .helpOption('-H, --HELP', 'read more information')
    .option('-d, --debug', 'output extra debugging')
    .option('-s, --small', 'small pizza size')
    .option('-p, --pizza-type <type>', 'flavour of pizza');
  
    program.parse(inputArgs, { from: "user" })
  
    const options = program.opts();
    if (options.debug) console.log(options);
    console.log('pizza details:');
    if (options.small) console.log('- small pizza size');
    if (options.pizzaType) console.log(`- ${options.pizzaType}`);
  }

const _optionsCommon = optionsCommon
export { _optionsCommon as optionsCommon };
