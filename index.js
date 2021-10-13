#! /usr/bin/env node
const shell = require("shelljs");
const Color = require("color");
var argv = require("optimist").argv;
// default branch set is "master"
var currentBranch = "master";
console.log(process.argv);
console.log(process.argv[3]);
// while remote add origin has been set
// const firstCommand = "git add .";
// const secondCommand = `git commit -m "${commitMessage}"`;
// const thirdCommand = "git push origin master";
// var url = process.argv[3];
// const newFirstCommand = "git init";
// const newSecondCommand = firstCommand;
// const newThirdCommand = secondCommand;
// const newFourthCommand = "git remote add origin" + url;
// const newFifthCommand = thirdCommand;

// Commands
// 1)git add .
// 2)git commit -m ""
// 3)git push origin master(branch)

// To push an existing repository
const push = async () => {
  commitMessage = process.argv[3];
  const firstCommand = "git add .";
  const secondCommand = `git commit -m "${commitMessage}"`;
  const thirdCommand = "git push origin master";
  await shell.exec(firstCommand);
  await shell.exec(secondCommand);
  await shell.exec(thirdCommand);
};

// First time - connect git to github repository
//Format - push "commitMessage" url

const set = async () => {
  var url = process.argv[3];
  const newFirstCommand = "git init";
  const newSecondCommand = "git add .";
  const newThirdCommand = `git commit -m "${commitMessage}"`;
  const newFourthCommand = "git remote add origin" + url;
  const newFifthCommand = "git push origin master";
  var url = process.argv[4];
  var commitMessage = process.argv[3];
  console.log(commitMessage);
  console.log(newFirstCommand);
  console.log(newThirdCommand);
  console.log(newFourthCommand);
  await shell.exec(newFirstCommand);
  await shell.exec(newSecondCommand);
  await shell.exec(newThirdCommand);
  await shell.exec(newFourthCommand);
  await shell.exec(newFifthCommand);
};

// To set the current branch of the working repo
// Format - set branchName(currentBranch)
// default working branch is "master"

const branch = async () => {
  // currentBranch = await process.argv[0];
  await shell.exec((currentBranch = process.argv[1]));
  shell.echo(currentBranch);
};

if (process.argv[2] === "push") {
  push();
}

if (process.argv[2] === "branch") {
  branch();
}

if (process.argv[2] === "set") {
  set();
}
