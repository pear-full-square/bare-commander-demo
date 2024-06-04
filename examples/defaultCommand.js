import { Command } from '../bare-commander.js'
const program = new Command();

// Example program using the command configuration option isDefault to specify the default command.
function defaultCommand(inputArgs) {

    console.log(`Try the following:
    pear dev . defaultCommand --HELP
    pear dev . defaultCommand build
    pear dev . defaultCommand serve -p 8080
    pear dev . defaultCommand -p 443`)

    program
    .helpOption('-H, --HELP', 'read more information')
    .command('build')
    .description('build web site for deployment')
    .action(() => {
      console.log('build');
    });
  
  program
    .command('deploy')
    .description('deploy web site to production')
    .action(() => {
      console.log('deploy');
    });
  
  program
    .command('serve', { isDefault: true })
    .description('launch web server')
    .option('-p,--port <port_number>', 'web port')
    .action((options) => {
      console.log(`server on port ${options.port}`);
    });
  
    program.parse(inputArgs, { from: "user" })
  }

const _defaultCommand = defaultCommand
export { _defaultCommand as defaultCommand };
