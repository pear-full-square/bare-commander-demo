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

function increaseVerbosity(dummyValue, previous) {
  return previous + 1;
}

function collect(value, previous) {
  return previous.concat([value]);
}

function commaSeparatedList(value) {
  return value.split(',');
}

// This is used as an example in the README for:
//    Custom option processing
//    You may specify a function to do custom processing of option values.
function optionsCustomProcessing(inputArgs) {

    console.log(`Try the following:
    pear dev . optionsCustomProcessing --HELP
    pear dev . optionsCustomProcessing -f 1e2
    pear dev . optionsCustomProcessing --integer 2
    pear dev . optionsCustomProcessing -V -V -V
    pear dev . optionsCustomProcessing -c a -c b -c c
    pear dev . optionsCustomProcessing --list x,y,z`)

    program
    .helpOption('-H, --HELP', 'read more information')
      .option('-f, --float <number>', 'float argument', parseFloat)
      .option('-i, --integer <number>', 'integer argument', myParseInt)
      .option(
        '-V, --verbose',
        'verbosity that can be increased',
        increaseVerbosity,
        0,
      )
      .option('-c, --collect <value>', 'repeatable value', collect, [])
      .option('-l, --list <items>', 'comma separated list', commaSeparatedList);
    
    program.parse(inputArgs, { from: "user" })
    
    const options = program.opts();
    if (options.float !== undefined) console.log(`float: ${options.float}`);
    if (options.integer !== undefined) console.log(`integer: ${options.integer}`);
    if (options.verbose > 0) console.log(`verbosity: ${options.verbose}`);
    if (options.collect.length > 0) console.log(options.collect);
    if (options.list !== undefined) console.log(options.list);
    
}

const _optionsCustomProcessing = optionsCustomProcessing
export { _optionsCustomProcessing as optionsCustomProcessing };
