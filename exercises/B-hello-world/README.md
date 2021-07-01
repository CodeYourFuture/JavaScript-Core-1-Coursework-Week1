It is programming tradition that the first thing you do in any language is make it output 'Hello world!'.

We'll do this in JavaScript, using something called `console.log()`.

Inside of `exercise.js` there's a line of code that will print "Hello world!".

### 1. Run the program

- Open a terminal window
- Change directory to this folder (`cd B-hello-world`)
- Run the program using node (`node exercise.js`)

### 2. Experiment

- Try to `console.log()` something different. For example, 'Hello World. I just started learning JavaScript!'.
- Try to console.log() several things at once.
- What happens when you get rid of the quote marks?
  D:\JavaScript\JavaScript-Core-1-Coursework-Week1\exercises\B-hello-world\exercise.js:2
  console.log(Hello world. I just started learning JavaScript!);
  ^^^^^

SyntaxError: missing ) after argument list
←[90m at wrapSafe (internal/modules/cjs/loader.js:979:16)←[39m
←[90m at Module.\_compile (internal/modules/cjs/loader.js:1027:27)←[39m
←[90m at Object.Module.\_extensions..js (internal/modules/cjs/loader.js:1092:10)←[39m
←[90m at Module.load (internal/modules/cjs/loader.js:928:32)←[39m
←[90m at Function.Module.\_load (internal/modules/cjs/loader.js:769:14)←[39m
←[90m at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)←[39m
←[90m at internal/main/run_main_module.js:17:47←[39m

- What happens when you console.log() just a number without quotes?
  Hello world. I just started learning JavaScript!
  5
