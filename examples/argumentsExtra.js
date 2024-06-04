import { Argument, Command } from '../bare-commander.js'
const program = new Command();

function argumentsExtra(inputArgs) {

    console.log(`Try the following:
    pear dev . argumentsExtra --HELP
    pear dev . argumentsExtra huge
    pear dev . argumentsExtra small
    pear dev . argumentsExtra medium 30`)

    program
    .helpOption('-H, --HELP', 'read more information')
    .addArgument(
        new Argument('<drink-size>', 'drink cup size').choices([
          'small',
          'medium',
          'large',
        ]),
      )
      .addArgument(
        new Argument('[timeout]', 'timeout in seconds').default(
          60,
          'one minute',
        ),
      )
      .action((drinkSize, timeout) => {
        console.log(`Drink size: ${drinkSize}`);
        console.log(`Timeout (s): ${timeout}`);
      });
  
    program.parse(inputArgs, { from: "user" })
  }

const _argumentsExtra = argumentsExtra
export { _argumentsExtra as argumentsExtra };
