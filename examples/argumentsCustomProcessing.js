import { Command } from '../bare-commander.js'
const program = new Command();


function myParseInt(value) {
  // parseInt takes a string and a radix
  const parsedValue = parseInt(value, 10);
  if (isNaN(parsedValue)) {
    throw new commander.InvalidArgumentError('Not a number.');
  }
  return parsedValue;
}

// The previous value passed to the custom processing is used when processing variadic values.
function mySum(value, total) {
  return total + myParseInt(value);
}

function argumentsCustomProcessing(inputArgs) {

    console.log(`Try the following:
    pear dev . argumentsCustomProcessing add --HELP
    pear dev . argumentsCustomProcessing add 2
    pear dev . argumentsCustomProcessing add 12 56
    pear dev . argumentsCustomProcessing sum 1 2 3
    pear dev . argumentsCustomProcessing add silly`)

    program
    .helpOption('-H, --HELP', 'read more information')

    program
    .command('add')
    .argument('<first>', 'integer argument', myParseInt)
    .argument('[second]', 'integer argument', myParseInt, 1000)
    .action((first, second) => {
      console.log(`${first} + ${second} = ${first + second}`);
    });
  
    program
      .command('sum')
      .argument('<value...>', 'values to be summed', mySum, 0)
      .action((total) => {
        console.log(`sum is ${total}`);
      });
  
    program.parse(inputArgs, { from: "user" })
  }

const _argumentsCustomProcessing = argumentsCustomProcessing
export { _argumentsCustomProcessing as argumentsCustomProcessing };
