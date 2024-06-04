import { Command } from '../bare-commander.js'
const program = new Command();

function actionThis(inputArgs) {

    console.log(`Try the following:
    pear dev . actionThis --HELP
    pear dev . actionThis --port 8080 index.js`)

    program
    .helpOption('-H, --HELP', 'read more information')
    .command('serve')
    .argument('<script>')
    .option('-p, --port <number>', 'port number', 80)
    .action(function () {
      console.error(`Running script ${this.args[0]}, ${this.opts().port} on port `);
    });

    program.parse(inputArgs, { from: "user" })
  }

const _actionThis = actionThis
export { _actionThis as actionThis };
