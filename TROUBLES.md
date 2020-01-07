no such package '@npm//node_modules/react

bazel does not install npm packages (orkspace has npm_install) - should see "Fetching @npm; Running *SOLVED*: npm install on //:package.json 17s" in output: run `bazel clean --expunge` does the trick to reinstall node modules
*SOLVED*: Compiling TypeScript (devmode) //:frontend failed: Worker process did not return a WorkResponse, @bazel\typescript\tsc_wrapped__bin: команда не найдена: installing msys should do the trick, most probably you have forgotten to do this: https://docs.bazel.build/versions/master/install-windows.html