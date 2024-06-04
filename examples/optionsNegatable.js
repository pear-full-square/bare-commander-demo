import { Command } from '../bare-commander.js'
const program = new Command();

// This is used as an example in the README for:
//    Other option types, negatable boolean
//    You can specify a boolean option long name with a leading `no-` to make it true by default and able to be negated.
function optionsNegatable(inputArgs) {

    console.log(`Try the following:
    pear dev . optionsNegatable --HELP
    pear dev . optionsNegatable
    pear dev . optionsNegatable --sauce
    pear dev . optionsNegatable --cheese=blue
    pear dev . optionsNegatable --no-sauce --no-cheese`)

    program
    .helpOption('-H, --HELP', 'read more information')
    .option('--no-sauce', 'Remove sauce')
    .option('--cheese <flavour>', 'cheese flavour', 'mozzarella')
    .option('--no-cheese', 'plain with no cheese');
  
    program.parse(inputArgs, { from: "user" })

    const options = program.opts();
    const sauceStr = options.sauce ? 'sauce' : 'no sauce';
    const cheeseStr =
      options.cheese === false ? 'no cheese' : `${options.cheese} cheese`;
    console.log(`You ordered a pizza with ${sauceStr} and ${cheeseStr}`);
}

const _optionsNegatable = optionsNegatable
export { _optionsNegatable as optionsNegatable };
