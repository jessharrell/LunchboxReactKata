This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# Lunchbox React Kata

This kata will build your skill with the following in the React framework:

* Toolchain Installation and Use
* Creating Views
* Retrieving Data from an Endpoint
* Acceptance Test Driven Development
* Unit Test Driven Development

## Instructions

When you complete this kata, you will have completed the following:

* Set up your development environment
* Create a new React project
* Create full unit test coverage on a single view
* Create an acceptance test using the following Gherkin:
    * Given a number web service that returns 6 in a JSON object
    * When I click the FizzBuzz button
    * Then I see Fizz
* Work with a single view UI
* Test drive the complete FizzBuzz logic

### Development Environment
[Installing Node.js with NVM]: https://gist.github.com/d2s/372b5943bce17b964a79
[Installing yarn package management etc]: https://yarnpkg.com/lang/en/docs/install/#mac-stable
[Installing detox for acceptance tests]: https://github.com/wix/detox/blob/master/docs/Introduction.GettingStarted.md

1. Install homebrew if you don’t have it from:  https://brew.sh/
2. brew update
3. brew install|upgrade nvm
4. brew install|upgrade node
5. brew install watchman
6. brew install detox
7. brew install yarn
8. npm install -g create-react-app
9. yarn global add create-react-app
10. nvm install 10.1.0
11. nvm alias default 10.1.0
12. Make sure you’re actually running node 10 by checking ‘node --version’


### React Project Setup
[Brief React Installation Instructions]: https://reactjs.org/docs/add-react-to-a-new-app.html
1. create-react-app my-app
2. yarn global add create-react-app
3. npm install -g npm
4. cd my-app
5. yarn test (to run the single sad unit test that comes with it)
6. yarn start

### Unit Testing with Jest
[Testing React with Jest]: https://facebook.github.io/jest/docs/en/tutorial-react.html

### Acceptance Testing with Detox (and a fake server)
stuff

### Working with a View
Your starting place will be App.js

### The Magical Wonder of FizzBuzz
FizzBuzz is a deceptively simple programming problem used by countless
IT recruiters to find out if candidates indeed have at least some of the
programming skills they claim.  You can implement it in almost any form
of computer language in no more than a couple minutes.  If you can provide
input to a function, display the output, and write a couple if-thens, you 
can complete FizzBuzz.

Here are the rules:
* Given an input integer
    * If the integer is divisible by 3, return or display Fizz
    * If it is divisible by 5, return or display Buzz
    * If it is divisible by both, return or display FizzBuzz
    * Otherwise, just return the display the input number
    
But wait!  Don't just fixate on a bunch of if-elseif-else stuff.  In interviews,
FizzBuzz can be an opportunity to show your technical depth.  How would you
thin slice this problem?  Is there more than one way?  How would you test
drive it?  What kinds of tests give you the best value?

And, for the implementation itself, what happens if you can't use if blocks?
Does the implementation language give you other structures you can use?
What happens if a number is divisible by both 3 and 5?  Is there any point
in checking for 3 and 5 individually?  

How could you write the code in an
OO style?  A functional style?  Could you write code that would do the
evaluation using only binary logic operators?  What if you need to evaluate
billions of numbers really fast in a stream?  How could you parallelize the
operation?  Does knowing the answer to one number make it easier to find
the answer for another?  What are the characteristics of your function?
Does it run in constant time?  Why or why not?

The point is that there's a wealth of opportunities to explore the whole of 
computer science, even with such a simple program.  So enjoy doing this
implementation and let it fill your mind with ideas.

