import React from 'react';
import Editor from './Editor';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mainContainer">
        <Editor />
      </div>
  )}
}


export default App;
