import { Command } from '../bare-commander.js'
const program = new Command();

function passThroughOptions(inputArgs) {

    console.log(`Try the following:
    pear dev . passThroughOptions --HELP
    pear dev . passThroughOptions git status
    pear dev . passThroughOptions git --version
    pear dev . passThroughOptions --dry-run git checkout -b new-branch
    pear dev . passThroughOptions git push --dry-run`)

    program
    .helpOption('-H, --HELP', 'read more information')
    .argument('<utility>')
    .argument('[args...]')
    .passThroughOptions()
    .option('-d, --dry-run')
    .action((utility, args, options) => {
      const action = options.dryRun ? 'Would run' : 'Running';
      console.log(`${action}: ${utility} ${args.join(' ')}`);
    });
  
    program.parse(inputArgs, { from: "user" })
  }

const _passThroughOptions = passThroughOptions
export { _passThroughOptions as passThroughOptions };
