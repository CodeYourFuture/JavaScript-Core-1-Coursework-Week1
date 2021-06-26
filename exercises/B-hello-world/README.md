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
When executing "node exercise.js" from the terminal with no quote marks I received the error "SyntaxError: missing ) after argument list, which makes sense as with no quotation marks the debugger/interpreter is expecting only a one word value within the brackets while with the quotation marks it is expecting a string which can have multiple words with spaces".

- What happens when you console.log() just a number without quotes?
The output is a value and is highlighted in a base colour in the terminal, however, if a number is put into quotation marks it becomes a string and is highlighted in a different (string) colour.