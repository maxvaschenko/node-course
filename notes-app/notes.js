const fs = require("fs");
const chalk = require("chalk");

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

const addNote = (title, body) => {
  const notes = loadNotes();
  const isTitleUsed = notes.some(item => item.title === title);
  if (!isTitleUsed) {
    notes.push({ title, body });
    saveNotes(notes);
    console.log(chalk.green.inverse("Note added!"));
  } else {
    console.log(chalk.red.inverse("Note title taken!"));
  }
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

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse("Your notes:"));
  notes.forEach(item => {
    console.log(chalk.inverse(item.title));
  });
};

const readNote = title => {
  const notes = loadNotes();
  const note = notes.find(item => item.title === title);
  if (note) {
    console.log(chalk.green.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red.inverse("No note found!"));
  }
};

module.exports = { addNote, removeNote, listNotes, readNote };
