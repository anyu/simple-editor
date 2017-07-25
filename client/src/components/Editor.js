import React from 'react';


class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ''

    }
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(event) {
    if(event.key === 'Enter'){
      this.setState = {
        task: 'hey'
      }
    } else if(event.keyCode == '9'){
      event.preventDefault();
      document.execCommand('insertHTML', false, '&#009');
      // this.setState = {
      //   task: 'hey'
      // }
    } 
  }

  render() {
    return (
      <div className="editorContainer">
        <div className="editorHeaderArea">
          <h1>My Tasks</h1>
        </div>
        <div className="editor" contentEditable="true" placeholder="Start writing..." onKeyDown={this.handleKeyPress} >

        </div>
      </div>
  )}
}


export default Editor;
