const chalk = require("chalk");
const yargs = require("yargs");
const { getNotes, addNote, removeNote, listNotes } = require("./notes");

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
      const { title, body } = argv;
      addNote(title, body);
    }
  )
  .command(
    "remove",
    "Removing note",
    {
      title: { describe: "Note title", demandOption: true, type: "string" }
    },
    argv => {
      const { title } = argv;
      removeNote(title);
    }
  )
  .command("list", "List the notes", {}, () => {
    listNotes();
  })
  .command("read", "Read the notes", () => {
    console.log("Reading");
  })
  .parse();
