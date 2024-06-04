import { Command } from '../bare-commander.js'
const program = new Command();

// This example shows global options on the program which affect all the subcommands.
// See how to work with global options in the subcommand and display them in the help.
//
// (A different pattern for a "global" option is to add it to the subcommands, rather
// than to the program. See global-options-added.js.)
function globalOptionsNested(inputArgs) {

  console.log(`Try the following:
    pear dev . globalOptionsNested --HELP
    pear dev . globalOptionsNested --global sub --local
    pear dev . globalOptionsNested sub --help`)

  program
    .helpOption('-H, --HELP', 'read more information')
    .configureHelp({ showGlobalOptions: true }).option('-g, --global');

  program
    .command('sub')
    .option('-l, --local')
    .action((options, cmd) => {
      console.log({
        opts: cmd.opts(),
        optsWithGlobals: cmd.optsWithGlobals(),
      });
    });
    
  program.parse(inputArgs, { from: "user" })
}

const _globalOptionsNested = globalOptionsNested
export { _globalOptionsNested as globalOptionsNested };
