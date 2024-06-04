import { Command } from '../bare-commander.js'
const program = new Command();

// Commander supports nested subcommands.
// .command() can add a subcommand with an action handler or an executable.
// .addCommand() adds a prepared command with an action handler.

// Add nested commands using `.command()`.
function nestedCommands(inputArgs) {

    console.log(`Try the following:
    pear dev . nestedCommands --HELP
    pear dev . nestedCommands brew tea
    pear dev . nestedCommands heat jug`)

    program
    .helpOption('-H, --HELP', 'read more information')

    const brew = program.command('brew');
    brew.command('tea').action(() => {
      console.log('brew tea');
    });
    brew.command('coffee').action(() => {
      console.log('brew coffee');
    });
    
    // Add nested commands using `.addCommand().
    // The command could be created separately in another module.
    function makeHeatCommand() {
      const heat = new Command('heat');
      heat.command('jug').action(() => {
        console.log('heat jug');
      });
      heat.command('pot').action(() => {
        console.log('heat pot');
      });
      return heat;
    }
    program.addCommand(makeHeatCommand());

    program.parse(inputArgs, { from: "user" })
  }

const _nestedCommands = nestedCommands
export { _nestedCommands as nestedCommands };
