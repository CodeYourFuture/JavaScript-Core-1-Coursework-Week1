It is programming tradition that the first thing you do in any language is make it output 'Hello world!'.

We'll do this in JavaScript, using something called `console.log()`.

Inside of `exercise.js` there's a line of code that will print "Hello world!".

### 1. Run the program

- Open a terminal window
- Change directory to this folder (`cd exercises/B-hello-world`) - assuming you're at the project root
- Run the program using node (`node exercise.js`)

### 2. Experiment

- Try to `console.log()` something different. For example, 'Hello World. I just started learning JavaScript!'.
- Try to console.log() several things at once.
- What happens when you get rid of the quote marks? it gives me this error 
[Running] node "/Users/Coding/Documents/GitHub/HTML-CSS-Module-Project/HTML-CSS-Module-Project/JavaScript-Core-1-Coursework-Week1/exercises/B-hello-world/exercise.js"
/Users/Coding/Documents/GitHub/HTML-CSS-Module-Project/HTML-CSS-Module-Project/JavaScript-Core-1-Coursework-Week1/exercises/B-hello-world/exercise.js:1
console.log(Salve mondo);
            ^^^^^

SyntaxError: missing ) after argument list
    at Object.compileFunction (node:vm:352:18)
    at wrapSafe (node:internal/modules/cjs/loader:1033:15)
    at Module._compile (node:internal/modules/cjs/loader:1069:27)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1159:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
    at node:internal/main/run_main_module:17:47

[Done] exited with code=1 in 0.304 seconds






- What happens when you console.log() just a number without quotes?
it gives me a result of 10, with a console.log (10)
