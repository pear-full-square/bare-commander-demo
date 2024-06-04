import { Command } from '../bare-commander.js'
const program = new Command();

// This is used as an example in the README for:
//    Required option
//    You may specify a required (mandatory) option using `.requiredOption`.
//    The option must be specified on the command line, or by having a default value.
function optionsRequired(inputArgs) {

    console.log(`Try the following:
    pear dev . optionsRequired --HELP
    pear dev . optionsRequired --cheese blue`)

    program.helpOption('-H, --HELP', 'read more information')
    program.requiredOption('-c, --cheese <type>', 'pizza must have cheese');

    program.parse(inputArgs, { from: "user" })
    console.log(`Cheese type: ${program.opts().cheese}`);
}

const _optionsRequired = optionsRequired
export { _optionsRequired as optionsRequired };
