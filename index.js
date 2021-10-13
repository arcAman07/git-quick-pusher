#! /usr/bin/env node
const shell = require("shelljs");
const Color = require("color");
const chalk = require("chalk");
var argv = require("optimist").argv;
const { program } = require("commander");
// default branch set is "master"
var currentBranch = "master";

// Here 0 signifies that there is only one branch that is master and 1 signifies other alternate branches have been set
var alternateBranchExists = 0;
console.log(process.argv);
// Commands
// 1)git add .
// 2)git commit -m ""
// 3)git push origin master(branch)

// To push an existing repository
const push = async () => {
  commitMessage = process.argv[3];
  const firstCommand = "git add .";
  const secondCommand = `git commit -m "${commitMessage}"`;
  const thirdCommand = "git push origin " + currentBranch;
  await shell.exec(firstCommand);
  await shell.exec(secondCommand);
  await shell.exec(thirdCommand);
};

// First time - connect git to github repository
//Format - push "commitMessage" url

const set = async () => {
  var url = process.argv[4];
  var commitMessage = process.argv[3];
  const newFirstCommand = "git init";
  const newSecondCommand = "git add .";
  const newThirdCommand = `git commit -m "${commitMessage}"`;
  const newFourthCommand = "git remote add origin " + url;
  const newFifthCommand = "git push origin " + currentBranch;
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

// To set the current branch of the working repo and create that branch in the repository and push the code to that created branch
// Format - set branchName(currentBranch)
// default working branch is "master"

const branch = async () => {
  // currentBranch = await process.argv[0];
  const firstBranchCommand = "git add .";
  currentBranch = await process.argv[3];
  const secondBranchCommand = "git branch " + currentBranch;
  commitMessage = await process.argv[4];
  const thirdBranchCommand = `git commit -m "${commitMessage}"`;
  const fourthBranchCommand = "git push -u origin " + currentBranch;
  await shell.exec(firstBranchCommand);
  await shell.exec(secondBranchCommand);
  await shell.exec(thirdBranchCommand);
  await shell.exec(fourthBranchCommand);
  console.log(currentBranch);
};

const help = async () => {
  program
    .command('push "<CommitMessage>"')
    .description("List all the TODO tasks");

  program
    .command('set "<CommitMessage>" <RepositoryUrl>')
    .description("Add a new TODO task");

  program.command("branch <BranchName>").description("Mark commands done");

  program
    .command("send <BranchName> <CommitMessage>")
    .description("Another One");

  program.parse();
};

// When you need to push already to an already existing branch other than "master" branch
// Format quick send <branchName>(currentBranch) <commitMessage>

const send = async () => {
  currentBranch = await process.argv[3];
  commitMessage = await process.argv[4];
  const firstSendCommand = "git add .";
  const secondSendCommand = `git commit -m "${commitMessage}"`;
  const thirdSendCommand = "git push origin " + currentBranch;
  console.log(secondSendCommand);
  console.log(thirdSendCommand);
  await shell.exec(firstSendCommand);
  await shell.exec(secondSendCommand);
  await shell.exec(thirdSendCommand);
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

if (process.argv[2] === "send") {
  send();
}

if (process.argv[2] === "--help") {
  help();
}
program.command("push <CommitMessage>").description("List all the TODO tasks");

program
  .command("set <CommitMessage> <RepositoryUrl>")
  .description("Add a new TODO task");

program.command("branch <BranchName>").description("Mark commands done");

program.command("send <BranchName> <CommitMessage>").description("Another One");

program.parse();
