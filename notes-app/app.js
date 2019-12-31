const chalk = require("chalk");
const yargs = require("yargs");

yargs
  .command(
    "$0",
    "the default command",
    () => {},
    argv => {
      console.log("this command will be run by default");
    }
  )
  .command(
    "add",
    "Adding note",
    {
      title: { describe: "Note title", demandOption: true, type: "string" },
      body: { describe: "body", demandOption: true, type: "string" }
    },
    argv => {
      console.log(`Title ${argv.title} body - ${argv.body}`);
    }
  )
  .command("remove", "Removing note", () => {
    console.log("Removing");
  })
  .command("list", "List the notes", () => {
    console.log("Listing");
  })
  .command("read", "Read the notes", () => {
    console.log("Reading");
  })
  .parse();
