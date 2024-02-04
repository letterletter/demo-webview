// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
const fs = require('fs');
const path = require('path');
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "demo-webview" is now active!');

	let extension = vscode.extensions.getExtension('letter-demo-wf-test');
	const otherPluginConfig = vscode.workspace.getConfiguration('letter-demo-wf-test');

	console.log('Congratulations, your extension "demo-webview" configuration', otherPluginConfig.get('myExtension.type'));
	console.log('Congratulations----- get Config', extension?.extensionPath);
	if (extension) {
    let packageJsonPath = path.join(extension.extensionPath, 'package.json');
    fs.readFile(packageJsonPath, 'utf8', (err: Error, data: any) => {
        if (err) {
            console.error(err);
        } else {
            let packageJson = JSON.parse(data);
            console.log(packageJson);
        }
    });
	}
	
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('demo-webview.letter', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from demo-webview!');
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
