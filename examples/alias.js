import { Command } from '../bare-commander.js'
const program = new Command();

// This example shows giving alternative names for a command.
function alias(inputArgs) {

    console.log(`Try the following:
    pear dev . alias --HELP
    pear dev . alias exec script
    pear dev . alias ex script
    pear dev . alias print file
    pear dev . alias pr file
    pear dev . alias show file`)

    program
    .helpOption('-H, --HELP', 'read more information')
    .command('exec')
    .argument('<script>')
    .alias('ex')
    .action((script) => {
      console.log(`execute: ${script}`);
    });
  
    program
      .command('print')
      .argument('<file>')
      // Multiple aliases is unusual but supported! You can call alias multiple times,
      // and/or add multiple aliases at once. Only the first alias is displayed in the help.
      .alias('p')
      .alias('pr')
      .aliases(['display', 'show'])
      .action((file) => {
        console.log(`print: ${file}`);
      });
  
    program.parse(inputArgs, { from: "user" })
  }

const _alias = alias
export { _alias as alias };
