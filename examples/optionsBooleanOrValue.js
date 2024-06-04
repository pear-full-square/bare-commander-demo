import { Command } from '../bare-commander.js'
const program = new Command();

// This is used as an example in the README for:
//    Other option types, flag|value
//    You can specify an option which functions as a flag but may also take a value (declared using square brackets).
function optionsBooleanOrValue(inputArgs) {

    console.log(`Try the following:
    pear dev . optionsBooleanOrValue
    pear dev . optionsBooleanOrValue --HELP
    pear dev . optionsBooleanOrValue --cheese
    pear dev . optionsBooleanOrValue --cheese mozzarella`)

    program
    .helpOption('-H, --HELP', 'read more information')
    .option('-c, --cheese [type]', 'Add cheese with optional type');

    program.parse(inputArgs, { from: "user" })

    const options = program.opts();
    if (options.cheese === undefined) console.log('no cheese');
    else if (options.cheese === true) console.log('add cheese');
    else console.log(`add cheese type ${options.cheese}`);

    program.parse(inputArgs, { from: "user" })
  }

const _optionsBooleanOrValue = optionsBooleanOrValue
export { _optionsBooleanOrValue as optionsBooleanOrValue };
