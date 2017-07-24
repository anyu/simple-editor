import React from 'react';


class Editor extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="editorContainer">
        <h1>HumanDx Editor</h1>
        <div className="editor" contentEditable="true" placeholder="Drag files or start writing...">

        </div>
      </div>
  )}
}


export default Editor;
