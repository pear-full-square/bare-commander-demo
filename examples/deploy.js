import { Command } from '../bare-commander.js'
const program = new Command();

function deploy(inputArgs) {

    console.log(`Try the following:
    pear dev . deploy --HELP`)

    program
    .helpOption('-H, --HELP', 'read more information')
    .name('deploy')
    .version('0.0.1')
    .option('-c, --config <path>', 'set config path', './deploy.conf');
    
    program
      .command('setup [env]')
      .description('run setup commands for all envs')
      .option('-s, --setup_mode <mode>', 'Which setup mode to use', 'normal')
      .action((env, options) => {
        env = env || 'all';
        console.log('read config from %s', program.opts().config);
        console.log('setup for %s env(s) with %s mode', env, options.setup_mode);
      });
    
    program
      .command('exec <script>')
      .alias('ex')
      .description('execute the given remote cmd')
      .option('-e, --exec_mode <mode>', 'Which exec mode to use', 'fast')
      .action((script, options) => {
        console.log('read config from %s', program.opts().config);
        console.log(
          'exec "%s" using %s mode and config %s',
          script,
          options.exec_mode,
          program.opts().config,
        );
      })
      .addHelpText(
        'after',
        `
    Examples:
      $ deploy exec sequential
      $ deploy exec async`,
      );
  
    program.parse(inputArgs, { from: "user" })
  }

const _deploy = deploy
export { _deploy as deploy };
