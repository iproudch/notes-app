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

const remove = (title) => {
  try {
    const notes = loadNotes();
    const note = notes.filter((note) => note.title === title);
    if (!!note) throw e;
    saveNote(notes.filter((note) => note.title !== title));
    console.log(chalk.bgGreenBright("remove note with title: ", title));
  } catch (e) {
    console.log(chalk.bgRed("not found note with title: ", title));
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

module.exports = { addNote, getNotes, remove };
