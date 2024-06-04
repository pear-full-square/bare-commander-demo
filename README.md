# commander-demo

Leg 4 of the journey, giving bare-commander a test run.  
Using the ported __bare-commander.js__ module from https://github.com/Didericis/bare-commander.js.git.  
I am porting the examples into a single __pear__ application.


## Prepare

bare-commander is installed as a submodule

## Demo Findings

The examples of the node Commander module were adapted and are demonstrated in the pear environment.
All examples can be invoked.

The help (h/help) and version (v/version) options are uppercased so as to avoid a clash with the __pear__ options.

## Issues

__configureHelp__ not working.  
Issue with __subprocess.spawn__ resolved - __childProcess__ must be mapped to __bare-subprocess__
More investigation needed on the executable codepath.

__configureOutput__ not working.  
Does not modify std output streams.

Other examples that target executable files are not working, more investigation is needed.