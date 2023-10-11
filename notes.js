const { default: chalk } = require("chalk");
const fs = require("fs");

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicate = notes.filter((note) => note.title === title);
  if (duplicate.length === 0) {
    notes.push({
      title,
      body,
    });
    saveNote(notes);
    console.log(chalk.bgGreenBright("add note success"));
  } else {
    console.log(chalk.bgRed("duplicate title!"));
  }
};

const saveNote = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const getNotes = () => {
  return "Your notes...";
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    return JSON.parse(dataBuffer.toString());
  } catch (e) {
    return [];
  }
};

module.exports = { addNote, getNotes };
