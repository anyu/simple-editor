import React from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';
import TestEditor from './TestEditor';

class MyEditor extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="editorContainer">
        <div className="editorHeaderArea">
          <h1>My Tasks</h1>
        </div>
          {/* <div className="editor"> */}
            <TestEditor/>
         {/* </div>  */}
      </div>
  )}
}


export default MyEditor;
