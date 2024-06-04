import { Command } from '../bare-commander.js'

class CommandWithTrace extends Command {
  createCommand(name) {
    const cmd = new CommandWithTrace(name);
    // Add an option to subcommands created using `.command()`
    cmd.option('-t, --trace', 'display extra information when run command');
    return cmd;
  }
}

function inpectCommand(command) {
  // The option value is stored as property on command because we called .storeOptionsAsProperties()
  console.log(`Called '${command.name()}'`);
  console.log(`args: ${command.args}`);
  console.log('opts: ', command.opts());
}

// Use a class override to customise the command and its subcommands.
function customCommandClass(inputArgs) {

    console.log(`Try the following:
    pear dev . customCommandClass --HELP
    pear dev . customCommandClass serve --help
    pear dev . customCommandClass serve -t -p 80 a b c
    pear dev . customCommandClass build --help
    pear dev . customCommandClass build --trace foo`)

    const program = new CommandWithTrace('program')
    .helpOption('-H, --HELP', 'read more information')
    .option('-v, ---verbose')
    .action((options, command) => {
      inpectCommand(command);
    });
  
    program
      .command('serve [params...]')
      .option('-p, --port <number>', 'port number')
      .action((params, options, command) => {
        inpectCommand(command);
      });
    
    program.command('build <target>').action((buildTarget, options, command) => {
      inpectCommand(command);
    });

    program.parse(inputArgs, { from: "user" })
  }

const _customCommandClass = customCommandClass
export { _customCommandClass as customCommandClass };
