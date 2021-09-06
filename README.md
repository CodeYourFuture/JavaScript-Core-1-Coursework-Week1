# Coursework

Like learning a musical instrument, programming requires daily practise.

The exercises are split into three folders: `exercises`, `mandatory` and `extra`. All homework in the `exercise` and `mandatory` section **must** be completed for homework by the following lesson. 

The `extra` folder contains exercises that you can complete to challenge yourself, but are not required for the following lesson.

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

For your homework, we'll be using [**test driven development**](https://medium.com/@adityaalifnugraha/test-driven-development-tdd-in-a-nutshell-b9e05dfe8adb) to check your answers. Test driven development (or TDD) is the practice of writing tests for your code first, and then write your code to pass those tests. This is a very useful way of writing good quality code and is used in a lot of industries. You don't have to worry about knowing how this works, but if you're curious, engage with a volunteer to find out more! :)

1. Complete the challenges in each file and save it once you're happy with your changes
2. Run the script to check the results against the tests - all tests should read PASSED if you completed the challenges correctly. If a test reads FAILED, find the associated test to identify which function failed and fix it.
3. Raise a PR once you're happy with the quality of your code
