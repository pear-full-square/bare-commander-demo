import { Command } from '../bare-commander.js'
const program = new Command();

function optionsDefaults(inputArgs) {

    console.log(`Try the following:
    pear dev . optionsDefaults --HELP
    pear dev . optionsDefaults --cheese stilton`)

    program
    .helpOption('-H, --HELP', 'read more information')

    program.option( '-c, --cheese <type>', 'Add the specified type of cheese', 'blue' );
    
    program.parse(inputArgs, { from: "user" })
    console.log(`cheese: ${program.opts().cheese}`);
  }

const _optionsDefaults = optionsDefaults
export { _optionsDefaults as optionsDefaults };
