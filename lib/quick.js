console.log("quick command is set");
const quick = require("../index");
const { program } = require("commander");

program.command("quick").description("List all the TODO tasks").action(quick);
