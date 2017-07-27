import React from 'react';
import {Editor, EditorState, RichUtils, getDefaultKeyBinding, KeyBindingUtil } from 'draft-js';
const {hasCommandModifier} = KeyBindingUtil;


class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };
    this.onChange = (editorState) => this.setState({
      editorState
    });
    this._handleKeyCommand = this._handleKeyCommand.bind(this);
    this._keyBindingFn = this._keyBindingFn.bind(this);
    this._onTab = this._onTab.bind(this);
    this._toggleBlockType = this._toggleBlockType.bind(this);
  }

  _handleKeyCommand(command) {
    if (command === 'bullet') {
      return 'handled';
    } else if (command === 'indent') {
      return 'handled';
    }
    return 'not-handled';
  }

  _keyBindingFn(e){
    // Cmd+L key formats text to bullets
    if (e.keyCode === 76 && hasCommandModifier(e)) {
      this.onToggle = (e) => {
        e.preventDefault();
        this._toggleBlockType('unordered-list-item');
      };
      this.onToggle(e);
      return 'bullet';
    } 
    return getDefaultKeyBinding(e);
  }

  _onTab(e) {
    const maxDepth = 3;
    this.onChange(RichUtils.onTab(e, this.state.editorState, maxDepth));
  }
  
  _toggleBlockType(blockType) {
    this.onChange(
      RichUtils.toggleBlockType(
        this.state.editorState,
        blockType
      )
    );
  }

  render() {
    const {editorState} = this.state;

    return (
      <div className="editorContainer">
        <div className="editorHeaderArea">
          <h1>My Tasks</h1>
        </div>
        <div className="editorWrapper"> 
          <div className="RichEditor-editor editor" onClick={this.focus}>
            <Editor
              editorState={editorState}
              handleKeyCommand={this._handleKeyCommand}
              keyBindingFn={this._keyBindingFn}
              onChange={this.onChange}
              onTab={(e) => {this._onTab(e)}}
              placeholder="Start writing..."
            />
          </div>
        </div>  
      </div>

    );
  }
}

export default MyEditor;

