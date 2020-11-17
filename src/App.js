import './App.css';
import React, { useState } from 'react'
import Bg from './components/bg'
import Home from './Home'
import { Themecontex } from './context/Themecontex'


function App() {

  const [theme, settheme] = useState({
    colorone: '#ec524b',
    colortwo: "#5a0d09",
    img: "https://miro.medium.com/max/2776/1*QWomjCiDOJ_2wkONOsldBQ.png"
  })




  return (


    <div className="App" style={{
      backgroundImage: `radial-gradient( circle 972.6px at 10% 40%,${theme.colorone} 0%, ${theme.colortwo} 90% )`
      // background-imageradial-gradient( circle 972.6px at 10% 40%, #7579e7 0%, #0e1174 90% );  

    }} >
      <Themecontex.Provider value={{ theme, settheme }}>
        <Home />
        <Bg />
      </Themecontex.Provider>




    </div>
  );
}

export default App;
