const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => "notes";

const addNote = (title, body) => {
  const notes = loadNotes();
  const isTitleUsed = notes.some(item => item.title === title);
  if (!isTitleUsed) {
    notes.push({ title, body });
    saveNotes(notes);
  }
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const removeNote = title => {
  const notes = loadNotes();
  const isNoteAdded = notes.some(item => item.title === title);
  if (isNoteAdded) {
    const newNotes = notes.filter(item => item.title !== title);
    saveNotes(newNotes);
    console.log(chalk.green.inverse("Note removed!"));
  } else {
    console.log(chalk.red.inverse("No note found!"));
  }
};

module.exports = { getNotes, addNote, removeNote };
