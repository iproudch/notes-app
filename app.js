const notes = require("./notes.js");
const chalk = require("chalk");
const yargs = require("yargs");

// fs.writeFileSync("hello.txt", "Hello from Node.js");
// fs.appendFileSync("hello.txt", " learning day 1");

// console.log(getNotesFn());

// console.log(chalk.bgGreenBright("Start app with nodemon Success!"));

yargs.command({
  command: "add",
  description: "Add new notes",
  builder: {
    title: {
      describe: "Add title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Add title body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  description: "Remove notes",
  handler: function () {
    console.log("Removing notes!");
  },
});

yargs.command({
  command: "list",
  description: "Show notes list",
  handler: function () {
    console.log("List notes!");
  },
});

yargs.command({
  command: "read",
  description: "read notes",
  handler: function () {
    console.log("Reading notes!");
  },
});

yargs.parse();
// yargs.parse();
