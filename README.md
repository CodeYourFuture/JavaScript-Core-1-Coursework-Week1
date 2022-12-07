# Coursework

Like learning a musical instrument, programming requires daily practice.

The exercises are split into two folders: `mandatory` and `extra`. All homework in the `mandatory` section **must** be completed for homework by the following lesson.

The `extra` folder contains exercises that you can complete to challenge yourself, but are not required for the following lesson.

If you think you need to do more practice with the basics, then you can find some more exercises listed in `resources.md`. These exercises are not mandatory and won't be assigned as part of your coursework for the week.

## Setting up your code editor


There are some tools that will help you to write code. One of these, [Prettier](https://prettier.io/), formats your code, making it easier for you and others to read.

### 1. Install prettier

- In Visual Studio open the extensions panel (see https://code.visualstudio.com/docs/editor/extension-gallery#_browse-and-install-extensions)
- Search for `Prettier - Code formatter`
- Click install on the top result

### 2. Enable formatting on save

- In Visual Studio open the settings file (see https://code.visualstudio.com/docs/getstarted/settings#_creating-user-and-workspace-settings)
- Search for `editor format`
- Set `editor.formatOnSave` and `editor.formatOnPaste` to true


## Running the code/tests

The files for the mandatory/extra exercises are intended to be run as jest tests. 

- Once you have cloned the repository, run `npm install` once in the terminal to install jest (and any necessary dependencies).
- To run the tests for all mandatory/extra exercises, run `npm test`
- To run only the tests for the mandatory exercises, run `npm test -- --selectProjects mandatory`
- To run only the tests for the extra exercises, run `npm test -- --selectProjects extra`
- To run a single exercise/test (for example `mandatory/1-writer.js`), run `npm test -- --testPathPattern mandatory/1-writer.js` (Remember, you can use tab-completion to get files relative to the current directory, so m`Tab ↹`/1-`Tab ↹` will autocomplete get you the test file starting with 1-)

For more information about tests, look here:

https://syllabus.codeyourfuture.io/guides/intro-to-tests

Try out variant way of running tests:

- `npm test` -> run all mandatory and extra tests
- `npm test -- --selectProjects mandatory` -> run only mandatory tests
- `npm test -- --testPathPattern mandatory/1-syntax-errors.js` -> run single test

## Solutions

The solutions for this coursework can be found here:

https://github.com/CodeYourFuture/JavaScript-Core-1-Coursework-Week1-Solution

This is a **private** repository. Please request access from your Teachers, Buddy or City Coordinator after the start of your next lesson.

## Instructions for submission

For your homework, we'll be using tests to check your answers. The tests will assert that your functions behave in the correct way. A **failing test** ❌ indicates that a function _is not_ behaving correctly; a **passing test** ✅ indicates that your function is behaving correctly.

1. Complete the challenges in each file and save it once you're happy with your changes
2. Run the script to check the results against the tests - all tests should read PASSED if you completed the challenges correctly. If a test reads FAILED, find the associated test to identify which function failed and fix it.
3. Raise a PR once you're happy with the quality of your code
