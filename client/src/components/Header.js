import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <h3>HumanDx</h3>
        <nav>
          <img className ='userpic' src='assets/images/avatar.jpg'/>
        </nav>
      </div>
  )}
}


export default App;
