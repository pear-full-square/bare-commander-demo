import { Command } from '../bare-commander.js'
const program = new Command();

function positionalOptions(inputArgs) {

    console.log(`Try the following:
    pear dev . positionalOptions --HELP
    pear dev . positionalOptions upload test.js
    pear dev . positionalOptions -p upload test.js
    pear dev . positionalOptions upload -p 8080 test.js
    pear dev . positionalOptions -p upload -p 8080 test.js`)

    program
    .helpOption('-H, --HELP', 'read more information')
    .enablePositionalOptions().option('-p, --progress');

    program
    .command('upload <file>')
    .option('-p, --port <number>', 'port number', 80)
    .action((file, options) => {
      if (program.opts().progress) console.log('Starting upload...');
      console.log(`Uploading ${file} to port ${options.port}`);
      if (program.opts().progress) console.log('Finished upload');
    });
  
    program.parse(inputArgs, { from: "user" })
  }

const _positionalOptions = positionalOptions
export { _positionalOptions as positionalOptions };
