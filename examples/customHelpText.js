import { Command } from '../bare-commander.js'
const program = new Command();

// This example shows using addHelpText.
function customHelpText(inputArgs) {

    console.log(`Try the following:
    pear dev . customHelpText --HELP
    pear dev . customHelpText extra --HELP
    pear dev . customHelpText`)

    program
    .name('awesome')
    .helpOption('-H, --HELP', 'read more information')
    
    program
      .addHelpText('beforeAll', 'A W E S O M E\n')
      .addHelpText('afterAll', (context) => {
        if (context.error) {
          return '\nHelp being displayed for an error';
        }
        return '\nSee web site for further help';
      });
    
    program
      .command('extra')
      .addHelpText('before', 'Note: the extra command does not do anything')
      .addHelpText(
        'after',
        `
    Examples:
      awesome extra --help
      awesome help extra`,
      );
    
    program.parse(inputArgs, { from: "user" })
  }

const _customHelpText = customHelpText
export { _customHelpText as customHelpText };
