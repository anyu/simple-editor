import React from 'react';


class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(event) {
    if(event.key === '9'){
       event.preventDefault();
      console.log('enter press here! ')
    }
  }

  render() {
    return (
      <div className="editorContainer">
        <div className="editorHeaderArea">
          <h1>My Tasks</h1>
        </div>
        <div className="editor" contentEditable="true" placeholder="Drag files or start writing..." onKeyDown={this.handleKeyDown} >

        </div>
      </div>
  )}
}


export default Editor;
