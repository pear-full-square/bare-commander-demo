import { Command, Option } from '../bare-commander.js'
const program = new Command();

function optionsEnv(inputArgs) {

    console.log(`Try the following:
    pear dev . optionsEnv --HELP
    PORT=9001 pear dev . optionsEnv
    PORT=9001 pear dev . optionsEnv --port 123
    COLOUR= pear dev . optionsEnv 
    COLOUR= pear dev . optionsEnv --no-colour
    NO_COLOUR= pear dev . optionsEnv 
    NO_COLOUR= pear dev . optionsEnv --colour
    SIZE=small pear dev . optionsEnv
    SIZE=enormous pear dev . optionsEnv
    SIZE=enormous pear dev . optionsEnv --size=large`)

    program
    .helpOption('-H, --HELP', 'read more information')

    program.addOption(
      new Option('-p, --port <number>', 'specify port number')
        .default(80)
        .env('PORT'),
    );
    program.addOption(
      new Option('-c, --colour', 'turn on colour output').env('COLOUR'),
    );
    program.addOption(
      new Option('-C, --no-colour', 'turn off colour output').env('NO_COLOUR'),
    );
    program.addOption(
      new Option('-s, --size <type>', 'specify size of drink')
        .choices(['small', 'medium', 'large'])
        .env('SIZE'),
    );
    
    program.parse(inputArgs, { from: "user" })
    console.log(program.opts());
  }

const _optionsEnv = optionsEnv
export { _optionsEnv as optionsEnv };
