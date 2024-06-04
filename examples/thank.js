import { Command } from '../bare-commander.js'
const program = new Command();

function thank(inputArgs) {

    console.log(`Try the following:
    pear dev . thank --HELP
    pear dev . thank John
    pear dev . thank Doe --title Mr
    pear dev . thank --debug Doe --title Mr`)

    program
    .helpOption('-H, --HELP', 'read more information')
    .argument('<name>')
    .option('-t, --title <honorific>', 'title to use before name')
    .option('-d, --debug', 'display some debugging')
    .action((name, options, command) => {
      if (options.debug) {
        console.error('Called %s with options %o', command.name(), options);
      }
      const title = options.title ? `${options.title} ` : '';
      console.log(`Thank-you ${title}${name}`);
    });
  
    program.parse(inputArgs, { from: "user" })
  }

const _thank = thank
export { _thank as thank };
