import { Command } from '../bare-commander.js'
import process from 'bare-process'
const program = new Command();

function pmInstall(inputArgs) {

    console.log(`Try the following:
    pear dev . pmInstall --HELP
    pear dev . pmInstall --port 8080 index.js`)

    program
    .helpOption('-H, --HELP', 'read more information')
    program.option('-f, --force', 'force installation');

    program.parse(inputArgs, { from: "user" })
    const pkgs = program.args;

    if (!pkgs.length) {
      console.error('packages required');
      process.exit(1);
    }
    
    console.log();
    if (program.opts().force) console.log('  force: install');
    pkgs.forEach(function (pkg) {
      console.log('  install : %s', pkg);
    });
    console.log();
}

const _pmInstall = pmInstall
export { _pmInstall as pmInstall };
