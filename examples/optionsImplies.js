import { Command, Option } from '../bare-commander.js'
const program = new Command();

function optionsImplies(inputArgs) {

    console.log(`Try the following:
    pear dev . optionsImplies --HELP
    pear dev . optionsImplies --quiet
    pear dev . optionsImplies --log-level=warning --quiet
    pear dev . optionsImplies --cheese=cheddar
    pear dev . optionsImplies --no-cheese`)

    program
    .helpOption('-H, --HELP', 'read more information')
    .addOption(new Option('--quiet').implies({ logLevel: 'off' }))
    .addOption(new Option('--log-level <level>').choices(['info', 'warning', 'error', 'off']).default('info'))
    .addOption(new Option('-c, --cheese <type>','Add the specified type of cheese').implies({ dairy: true }))
    .addOption(new Option('--no-cheese', 'You do not want any cheese').implies({ dairy: false }))
    .addOption(new Option('--dairy', 'May contain dairy'));
  
    program.parse(inputArgs, { from: "user" })
    console.log(program.opts());
  }

const _optionsImplies = optionsImplies
export { _optionsImplies as optionsImplies };
