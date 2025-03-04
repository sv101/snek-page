import logo from './logo.svg';
import './App.css';

import GlobalHeader from './Components/GlobalHeader';
import { useState } from 'react';
import Home from './Components/Home';



function App() {
  const [showWebsite1, setShowWebsite1] = useState(false);
  const [showWebsite2, setShowWebsite2] = useState(false);

  function showWebsiteFrame1() {
    setShowWebsite1(true);
  }

  function showWebsiteFrame2() {
    setShowWebsite2(true);
  }

  function showHome() {
    setShowWebsite1(false);
    setShowWebsite2(false);
  }

 
  return (
    <div className="App">
      <GlobalHeader onClick={showHome} />

      {(showWebsite1) ? (
        <iframe title='survey1'
          src="https://myworld2030.org/partner/LPE_PSU"
          style={{ width: '100vw', height: '150vw' }}
        />
      ): (
        ( showWebsite2) ? (
        <iframe title='survey2'
          src="https://pennstate.qualtrics.com/jfe/form/SV_eu5L5iUKF54yq0e"
          style={{ width: '100vw', height: '150vw' }}
        />
      ): (<Home showWebsiteFrame1={showWebsiteFrame1} showWebsiteFrame2={showWebsiteFrame2} />))}

    </div>
  );
}

export default App;



// 61dafb