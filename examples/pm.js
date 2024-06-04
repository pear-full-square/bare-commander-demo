import { Command } from '../bare-commander.js'
const program = new Command();

function pmm(inputArgs) {

    console.log(`Try the following:
    pear dev . pm --HELP
    pear dev . pm help install
    pear dev . pm install -H
    pear dev . pm install foo bar baz
    pear dev . pm install foo bar baz --force`)

    // Example of subcommands which are implemented as stand-alone executable files.
    //
    // When `.command()` is invoked with a description argument,
    // this tells Commander that you're going to use a stand-alone executable for the subcommand.
    //
    // Only `install` and `list` are implemented, see pm-install and pm-list.js
    program
    .helpOption('-H, --HELP', 'read more information')
    .name('pm')
    .version('0.0.1')
    .description('Fake package manager')
    .command('install [name]', 'install one or more packages')
    .alias('i')
    .command('search [query]', 'search with optional query')
    .alias('s')
    .command('update', 'update installed packages', {
      executableFile: 'myUpdateSubCommand',
    })
    .command('list', 'list packages installed', { isDefault: true });
  
    program.parse(inputArgs, { from: "user" })
  }

const _pm = pmm
export { _pm as pm };
