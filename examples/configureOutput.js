import { Command } from '../bare-commander.js'
import process from 'bare-process'
const program = new Command();

function errorColor(str) {
  // Add ANSI escape codes to display text in red.
  return `\x1b[31m${str}\x1b[0m`;
}

function configureOutput(inputArgs) {

    console.log(`Try the following:
    pear dev . configureOutput --HELP
    pear dev . configureOutput --version
    pear dev . configureOutput --unknown`)

    program.configureOutput({
      // Visibly override write routines as example!
      writeOut: (str) => process.stdout.write(`[OUT] ${str}`),
      writeErr: (str) => process.stdout.write(`[ERR] ${str}`),
      // Output errors in red.
      outputError: (str, write) => write(errorColor(str)),
    });
    
    program.version('1.2.3').option('-c, --compress').command('sub-command');
    
    program.parse(inputArgs, { from: "user" })
  }

const _configureOutput = configureOutput
export { _configureOutput as configureOutput };
