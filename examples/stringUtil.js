import { Command } from '../bare-commander.js'
const program = new Command();

function stringUtil(inputArgs) {

    console.log(`Try the following:
    pear dev . stringUtil --HELP
    pear dev . stringUtil help split
    pear dev . stringUtil split --separator=/ a/b/c
    pear dev . stringUtil split --first a,b,c
    pear dev . stringUtil join a b c d`)

    program
    .helpOption('-H, --HELP', 'read more information')
    .name('string-util')
    .description('CLI to some JavaScript string utilities')
    .version('0.8.0');
  
  program
    .command('split')
    .description('Split a string into substrings and display as an array.')
    .argument('<string>', 'string to split')
    .option('--first', 'display just the first substring')
    .option('-s, --separator <char>', 'separator character', ',')
    .action((str, options) => {
      const limit = options.first ? 1 : undefined;
      console.log(str.split(options.separator, limit));
    });
  
  program
    .command('join')
    .description('Join the command-arguments into a single string')
    .argument('<strings...>', 'one or more strings')
    .option('-s, --separator <char>', 'separator character', ',')
    .action((strings, options) => {
      console.log(strings.join(options.separator));
    });
  
    program.parse(inputArgs, { from: "user" })
  }

const _stringUtil = stringUtil
export { _stringUtil as stringUtil };
