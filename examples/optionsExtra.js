import { Command, Option } from '../bare-commander.js'
const program = new Command();

function optionsExtra(inputArgs) {

    console.log(`Try the following:
    pear dev . optionsExtra --HELP
    pear dev . optionsExtra --drink huge
    pear dev . optionsExtra --free-drink
    PORT=80 npear dev . optionsExtra
    pear dev . optionsExtra -donate
    pear dev . optionsExtra --donate 30.50
    pear dev . optionsExtra --disable-server --port 8000`)

    // This is used as an example in the README for extra option features.
    // See also options-env.js for more extensive env examples,
    // and options-conflicts.js for more details about .conflicts().

    program
    .helpOption('-H, --HELP', 'read more information')

    program
    .addOption(new Option('-s, --secret').hideHelp())
    .addOption(new Option('-t, --timeout <delay>', 'timeout in seconds').default(60, 'one minute'),)
    .addOption(new Option('-d, --drink <size>', 'drink cup size').choices(['small', 'medium', 'large']))
    .addOption(new Option('-p, --port <number>', 'port number').env('PORT'))
    .addOption(new Option('--donate [amount]', 'optional donation in dollars').preset('20').argParser(parseFloat))
    .addOption(new Option('--disable-server', 'disables the server').conflicts('port'))
    .addOption(new Option('--free-drink', 'small drink included free ').implies({ drink: 'small' }));
  
    program.parse(inputArgs, { from: "user" })
    console.log('Options: ', program.opts());
  }

const _optionsExtra = optionsExtra
export { _optionsExtra as optionsExtra };
