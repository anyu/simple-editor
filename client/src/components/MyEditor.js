import React from 'react';
import {Editor, EditorState, RichUtils, getDefaultKeyBinding, KeyBindingUtil } from 'draft-js';
const {hasCommandModifier} = KeyBindingUtil;


class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };
    this.onChange = (editorState) => this.setState({editorState});
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.keyBindingFn = this.keyBindingFn.bind(this);
    this.onTab = this.onTab.bind(this);
    this.toggleBlockType = this._toggleBlockType.bind(this);
  }

  handleKeyCommand(command: string): DraftHandleValue {
    console.log('command', command)
    if (command === 'bullet') {
      return 'handled';
    }
    return 'not-handled';
  }

  keyBindingFn(e: SyntheticKeyboardEvent): string {
    // Cmd+L key
    if (e.keyCode === 76 && hasCommandModifier(e)) {
      this.onToggle = (e) => {
        e.preventDefault();
        this.toggleBlockType('unordered-list-item');
      };
      this.onToggle(e);
      return 'bullet';
    }
    return getDefaultKeyBinding(e);
  }

  onTab(e) {
    const maxDepth = 4;
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

    let className = 'RichEditor-editor editor"';

    return (
      <div className="editorContainer">
        <div className="editorHeaderArea">
          <h1>My Tasks</h1>
        </div>
        <div className="editorWrapper"> 
          <div className="RichEditor-root">
            <BlockStyleControls
              editorState={editorState}
              onToggle={this.toggleBlockType}
            />
            <div className={className} onClick={this.focus}>
              <Editor
                editorState={editorState}
                handleKeyCommand={this.handleKeyCommand}
                keyBindingFn={this.keyBindingFn}
                onChange={this.onChange}
                onTab={(e) => {this.onTab(e)}}
                placeholder="Start writing..."
              />
            </div>
          </div>
        </div>  
      </div>

    );
  }
}


const BlockStyleControls = (props) => {
  const {editorState} = props;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();
  return (<div></div>);
};

export default MyEditor;

