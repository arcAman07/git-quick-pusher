#! /usr/bin/env node
const shell = require("shelljs");
const Color = require("color");
var argv = require("optimist").argv;
// default branch set is "master"
var currentBranch = "master";
console.log(process.argv);
const length = process.argv.length;
var commitMessage = process.argv[2];
console.log(commitMessage);
// while remote add origin has been set
const firstCommand = "git add .";
const secondCommand = `git commit -m "${commitMessage}"`;
const thirdCommand = "git push origin master";
var url = process.argv[3];
const newFirstCommand = "git init";
const newSecondCommand = firstCommand;
const newThirdCommand = secondCommand;
const newFourthCommand = "git remote add origin" + url;
const newFifthCommand = thirdCommand;
//

console.log(secondCommand);
// Commands
// 1)git add .
// 2)git commit -m ""
// 3)git push origin master(branch)

// To push an existing repository
const quick = async () => {
  commitMessage = process.argv[2];
  await shell.exec(firstCommand);
  await shell.exec(secondCommand);
  await shell.exec(thirdCommand);
};

// First time - connect git to github repository
//Format - push "commitMessage" url

const push = async () => {
  url = process.argv[3];
  commitMessage = process.argv[2];
  await shell.exec(newFirstCommand);
  await shell.exec(newSecondCommand);
  await shell.exec(newThirdCommand);
  await shell.exec(newFourthCommand);
  await shell.exec(newFifthCommand);
};

// To set the current branch of the working repo
// Format - set branchName(currentBranch)
// default working branch is "master"

const set = async () => {
  // currentBranch = await process.argv[0];
  await shell.exec((currentBranch = process.argv[1]));
  shell.echo(currentBranch);
};

// gitquickpusher-1.0.0.tgz

module.exports = quick();

set();

module.exports = push();

module.exports = set();
