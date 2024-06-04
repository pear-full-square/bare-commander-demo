import { Command } from '../bare-commander.js'
const program = new Command();

function pizza(inputArgs) {

    console.log(`Try the following:
    pear dev . pizza --HELP
    pear dev . pizza --peppers --cheese=blue
    pear dev . pizza --no-cheese`)

    program
    .helpOption('-H, --HELP', 'read more information')
    .description('An application for pizza ordering')
    .option('-p, --peppers', 'Add peppers')
    .option('-c, --cheese <type>', 'Add the specified type of cheese', 'marble')
    .option('-C, --no-cheese', 'You do not want any cheese');
  
    program.parse(inputArgs, { from: "user" })
    const options = program.opts();
    console.log('you ordered a pizza with:');
    if (options.peppers) console.log('  - peppers');
    const cheese = !options.cheese ? 'no' : options.cheese;
    console.log('  - %s cheese', cheese);
}

const _pizza = pizza
export { _pizza as pizza };
