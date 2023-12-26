import React from 'react';
import './assets/css/app.css';
// import ContentRowSecTions from './components/ContentRowSecTions';
import Principal from './components/Principal'

function App() {
  return (
    <React.Fragment>
      <div className='heder'>     
        <Principal/>        
        {/* <ContentRowSecTions/>        */}
      </div>
    </React.Fragment>
  );
}

export default App;
