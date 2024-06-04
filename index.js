import process from 'bare-process'
import { actionThis  } from './examples/actionThis.js'
import { alias  } from './examples/alias.js'
import { argument  } from './examples/argument.js'
import { argumentsCustomProcessing  } from './examples/argumentsCustomProcessing.js'
import { argumentsExtra  } from './examples/argumentsExtra.js'
import { configureHelp  } from './examples/configureHelp.js'
import { configureOutput  } from './examples/configureOutput.js'
import { customCommandClass } from './examples/customCommandClass.js'
import { customHelp } from './examples/customHelp.js'
import { customHelpDescription } from './examples/customHelpDescription.js'
import { customHelpText } from './examples/customHelpText.js'
import { customVersion } from './examples/customVersion.js'
import { defaultCommand } from './examples/defaultCommand.js'
import { deploy } from './examples/deploy.js'
import { description } from './examples/description.js'
import { globalOptionsAdded } from './examples/globalOptionsAdded.js'
import { globalOptionsNested } from './examples/globalOptionsNested.js'
import { helpSubcommandsUsage } from './examples/helpSubcommandsUsage.js'
import { hook } from './examples/hook.js'
import { nestedCommands } from './examples/nestedCommands.js'
import { optionsBooleanOrValue } from './examples/optionsBooleanOrValue.js'
import { optionsCommon } from './examples/optionsCommon.js'
import { optionsConflicts } from './examples/optionsConflicts.js'
import { optionsCustomProcessing } from './examples/optionsCustomProcessing.js'
import { optionsDefaults } from './examples/optionsDefaults.js'
import { optionsEnv } from './examples/optionsEnv.js'
import { optionsExtra } from './examples/optionsExtra.js'
import { optionsImplies } from './examples/optionsImplies.js'
import { optionsNegatable } from './examples/optionsNegatable.js'
import { optionsRequired } from './examples/optionsRequired.js'
import { optionsVariadic } from './examples/optionsVariadic.js'
import { passThroughOptions } from './examples/passThroughOptions.js'
import { pizza } from './examples/pizza.js'
import { pm } from './examples/pm.js'
import { pmInstall } from './examples/pmInstall.js'
import { positionalOptions } from './examples/positionalOptions.js'
import { split } from './examples/split.js'
import { stringUtil } from './examples/stringUtil.js'
import { thank } from './examples/thank.js'

const { teardown, config } = Pear    // Import configuration options and cleanup functions from Pear
// config.args contains all the non-pear command arguments 

const example = config.args[0]
config.args = config.args.slice(1)
console.log("EXAMPLE: ", example);
switch (example) {
  case 'actionThis': actionThis(config.args); break;
  case 'alias': alias(config.args); break;
  case 'argument': argument(config.args); break;
  case 'argumentsCustomProcessing': argumentsCustomProcessing(config.args); break;
  case 'argumentsExtra': argumentsExtra(config.args); break;
  case 'configureHelp': configureHelp(config.args); break;
  case 'configureOutput': configureOutput(config.args); break;
  case 'customCommandClass': customCommandClass(config.args); break;
  case 'customHelp': customHelp(config.args); break;
  case 'customHelpDescription': customHelpDescription(config.args); break;
  case 'customHelpText': customHelpText(config.args); break;
  case 'customVersion': customVersion(config.args); break;
  case 'defaultCommand': defaultCommand(config.args); break;
  case 'deploy': deploy(config.args); break;
  case 'description': description(config.args); break;
  case 'globalOptionsAdded': globalOptionsAdded(config.args); break;
  case 'globalOptionsNested': globalOptionsNested(config.args); break;
  case 'helpSubcommandsUsage': helpSubcommandsUsage(config.args); break;
  case 'hook': hook(config.args); break;
  case 'nestedCommands': nestedCommands(config.args); break;
  case 'optionsBooleanOrValue': optionsBooleanOrValue(config.args); break;
  case 'optionsCommon': optionsCommon(config.args); break;
  case 'optionsConflicts': optionsConflicts(config.args); break;
  case 'optionsCustomProcessing': optionsCustomProcessing(config.args); break;
  case 'optionsDefaults': optionsDefaults(config.args); break;
  case 'optionsEnv': optionsEnv(config.args); break;
  case 'optionsExtra': optionsExtra(config.args); break;
  case 'optionsImplies': optionsImplies(config.args); break;
  case 'optionsNegatable': optionsNegatable(config.args); break;
  case 'optionsRequired': optionsRequired(config.args); break;
  case 'optionsVariadic': optionsVariadic(config.args); break;
  case 'passThroughOptions': passThroughOptions(config.args); break;
  case 'pizza': pizza(config.args); break;
  case 'pm': pm(config.args); break;
  case 'pmInstall': pmInstall(config.args); break;
  case 'positionalOptions': positionalOptions(config.args); break;
  case 'split': split(config.args); break;
  case 'stringUtil': stringUtil(config.args); break;
  case 'thank': thank(config.args); break;
  default: 
    console.log(`Choose an example:
    actionThis
    alias
    argument
    argumentsCustomProcessing
    argumentsExtra
    configureHelp
    configureOutput
    customCommandClass
    customHelp
    customHelpDescription
    customHelpText
    customVersion
    defaultCommand
    deploy
    description
    globalOptionsAdded
    globalOptionsNested
    helpSubcommandsUsage
    hook
    nestedCommands
    optionsBooleanOrValue
    optionsCommon
    optionsConflicts
    optionsCustomProcessing
    optionsDefaults
    optionsEnv
    optionsExtra
    optionsImplies
    optionsNegatable
    optionsRequired
    optionsVariadic
    passThroughOptions
    pizza
    pm
    pmInstall
    positionalOptions
    split
    stringUtil
    thank`);
}

// don't know why (I'll figure it out in time ...), but need this to force exit.
// not needed if the commander stuff is not wrapped in function - feature of commander??
process.exit(0)


