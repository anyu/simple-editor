# Task List Editor
A minimal task list editor that allows users to type freely and nest task items.

## Requirements
* Node 
* NPM

## Usage
Run the following commands from the root directory:
```javascript
npm install  
npm run build:watch  
npm start
```  

* Cmd+L // format text into bullets
* Tab / shift+tab // indent, outdent bullets (4 levels of hierarchy possible)
* Arrow keys // navigate through text
* Cmd+Z // undo
* Delete // backspace

## Installation requirements ##
  * Node
  * NPM
  * MySQL
  * API key for YelpFusion API

## Design Choices
Since the goal is to reduce friction and allow users to contribute freely, the interface is minimal to convey ease and be immediately intuitive. 


## Development Choices
The main editor is a customized, minimal implementation of Facebook's Draft.js (http://draftjs.org) framework. Draft.js leverages HTML's contentEditable attribute, which enables rich text formatting, and can be customized extensively with React.
