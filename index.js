#! /usr/bin/env node
const shell = require("shelljs");
const chalk = require("chalk");
const { program } = require("commander");
// default branch set is "master"
var currentBranch = "master";

// Here 0 signifies that there is only one branch that is master and 1 signifies other alternate branches have been set
var alternateBranchExists = 0;
// Commands
// 1)git add .
// 2)git commit -m ""
// 3)git push origin master(branch)

// To push an existing repository
const push = async () => {
  commitMessage = process.argv[3];
  const firstCommand = "git add .";
  const secondCommand = `git commit -m "${commitMessage}"`;
  const thirdCommand = "git push -f origin " + currentBranch;
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
  const newFifthCommand = "git push -f origin " + currentBranch;
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
};

const help = async () => {
  program
    .command("push <CommitMessage>")
    .description(chalk.magenta("Push your code to an existing repository"));

  program
    .command("set <CommitMessage> <RepositoryUrl>")
    .description(
      chalk.magenta(
        "Connect git to your repository and setup the initial commit"
      )
    );

  program
    .command("branch <BranchName>")
    .description(
      chalk.magenta(
        "Create a new branch in your repository and push your code to it"
      )
    );

  // still under development - currently the bugs are being fixed, will be fixed in the new release

  program
    .command("send <BranchName> <CommitMessage>")
    .description(
      chalk.magenta(
        "Push your code to an already existing branch in your repository other than the 'master' branch"
      )
    );

  program.parse();
};

// When you need to push already to an already existing branch other than "master" branch
// Format quick send <branchName>(currentBranch) <commitMessage>
// Still not fully functional- Some bugs to fixed which will revamped in the next version
const send = async () => {
  currentBranch = await process.argv[3];
  commitMessage = await process.argv[4];
  const firstSendCommand = "git add .";
  const secondSendCommand = `git commit -m "${commitMessage}"`;
  const thirdSendCommand = "git push -u origin " + currentBranch;
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
program
  .command("push <CommitMessage>")
  .description(chalk.magenta("Push your code to an existing repository"));

program
  .command("set <CommitMessage> <RepositoryUrl>")
  .description(
    chalk.magenta("Connect git to your repository and setup the initial commit")
  );

program
  .command("branch <BranchName>")
  .description(
    chalk.magenta(
      "Create a new branch in your repository and push your code to it"
    )
  );

// still under development - currently the bugs are being fixed, will be fixed in the new release

program
  .command("send <BranchName> <CommitMessage>")
  .description(
    chalk.magenta(
      "Push your code to an already existing branch in your repository"
    )
  );

program.parse();
