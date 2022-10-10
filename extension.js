// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const fs = require('fs');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "random-movie-quotes" is now active!'
  );

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    'random-movie-quotes.helloWorld',
    function () {
      // The code you place here will be executed every time your command is executed

      // Display a message box to the user
      vscode.window.showInformationMessage(
        'Hello World from Random Movie Quotes!'
      );
    }
  );

  context.subscriptions.push(disposable);
}

function randomQuote() {
  const chance = require('chance').Chance();
  let extensionPath = vscode.extensions.getExtension;
}

// This method is called when your extension is deactivated
function deactivate() {}

function processSelection(formatCB, argsCB) {
  let e = vscode.window.activeTextEditor;
  let d = e.document;
  let sel = e.selections;

  e.edit(function (edit) {
    for (let x = 0; x < sel.length; x++) {
      let txt = d.getText(new vscode.Range(sel[x].start, sel[x].end));
      if (argsCB.length > 0) {
        txt = formatCB.apply(this, argsCB);
      } else {
        txt = formatCB();
      }
      edit.insert(sel[x].start, txt);
    }
  });
}

module.exports = {
  activate,
  deactivate,
};
