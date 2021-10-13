#! /usr/bin/env node
const shell = require("shelljs");
const Color = require("color");
// default branch set is "master"
var currentBranch = "master";
shell.echo("hello world");
console.log(process.argv);
const length = process.argv.length;
var commitMessage = process.argv[2];
const { program } = require("commander");
console.log(commitMessage);
// while remote add origin has been set
const firstCommand = "git add .";
const secondCommand = `git commit -m "${commitMessage}"`;
for (i = 0; i < 14; i++) {}
const thirdCommand = "git push origin master";

//

console.log(secondCommand);
// Commands
// 1)git add .
// 2)git commit -m ""
// 3)git push origin master(branch)

// To push an existing repository
const push = async () => {
  await shell.exec(firstCommand);
  await shell.exec(secondCommand);
  await shell.exec(thirdCommand);
};

// First time - connect git to github repository
//Format - push "commitMessage" url

// To set the current branch of the working repo
// Format - set branchName(currentBranch)
// default working branch is "master"

// gitquickpusher-1.0.0.tgz

module.exports = push();
