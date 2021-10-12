#! /usr/bin/env node
const shell = require("shelljs");
const Color = require("color");
var currentBranch = "master";
shell.echo("hello world");
console.log(process.argv);
const length = process.argv.length;
var commitMessage = process.argv[2];
const { program } = require("commander");
// adding branch config

// for (i = 2; i < length; i++) {
//   commitMessage = commitMessage + process.argv[i] + " ";
// }
console.log(commitMessage);

const firstCommand = "git add .";
const secondCommand = 'git commit -m "$commitMessage"';
for (i = 0; i < 14; i++) {}
const thirdCommand = "git push origin master";

console.log(secondCommand);
// Commands
// 1)git add .
// 2)git commit -m ""
// 3)git push origin master(branch)

// More Features/Versions:
// 1) automatically reads the branch from git and updates it.
// 2) More cli tools like help, version ,etc
// 3) Getting deafult commit messages from good sources.
//4) Other git commands helpline like merge, pull, fetch , etc
// 5) Inbuilt feature to save the code when file changed.(maybe another package)
// 6) Can use it also directly from vs code rather than CLI by making a file saving that command and writing commmit messages.

const push = () => {
  shell.exec(firstCommand);
  shell.exec(secondCommand);
  shell.exec(thirdCommand);
};

// program
//   .command("push <commitMessage>")
//   .description("Push a commit message")
//   .action(push);

// program.parse();

// gitquickpusher-1.0.0.tgz

push();

console.log("Kanye West is the best");
