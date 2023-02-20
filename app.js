const chalk = require("chalk"); // modulo para estilizar o terminal
const { argv } = require("yargs");
const yargs = require("yargs"); // modulo que ajuda a criar ferramentas interativas de linha de comando, analisando argumentos e gerando uma interface de usuário elegante.
const { addNote } = require("./notes.js");
const notes = require("./notes.js");

//Customize yargs version
yargs.version("1.1.0");

//Created add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true, // Por padrão é uma propriedade definida como false / essa propriedade faz com que seja necessário ter o 'title' para executar o command
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true, // Por padrão é uma propriedade definida como false / essa propriedade faz com que seja necessário ter o 'title' para executar o command
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

//Created remove commmand
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

//Created list command
yargs.command({
  command: "list",
  describe: "list your note",
  handler() {
    notes.listNotes();
  },
});

//Created read command
yargs.command({
  command: "read",
  describe: "read a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

yargs.parse(); // responsável pelo processo de passar os argumentos com todos os detalhes de configuração