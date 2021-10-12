#! /usr/bin/env node
const shell = require("shelljs");
const Color = require("color");
var currentBranch = "master";
var commitMessage;
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
