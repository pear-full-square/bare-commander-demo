import { Command } from '../bare-commander.js'
const program = new Command();

function argument(inputArgs) {

    console.log(`Try the following:
    pear dev . argument --HELP")
    pear dev . argument main.remote.site")
    pear dev . argument main.remote.site admin\n`)

    program
    .name('connect')
    .helpOption('-H, --HELP', 'read more information')
    .argument('<server>', 'connect to the specified server')
    .argument('[user]', 'user account for connection', 'guest')
    .description('Example program with argument descriptions')
    .action((server, user) => {
      console.log('server:', server);
      console.log('user:', user);
    });

    program.parse(inputArgs, { from: "user" })
  }

const _argument = argument
export { _argument as argument };

