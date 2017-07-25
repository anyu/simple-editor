import React from 'react';
import Header from './Header';

import MyEditor from './MyEditor';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mainContainer">
        <Header />
        <MyEditor />
      </div>
  )}
}


export default App;
