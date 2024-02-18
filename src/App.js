import './App.css';
import NevBar from './Components/NevBar';
import { useState } from 'react';
import Home from './Components/Home';
import About from './Components/About';
import How from './Components/How';
import Footer from './Components/footer';
import Readocs from '../src/Components/Readocs'
import EyeMovement from '../src/Components/eye'
import Card from '../src/Components/card';
function App() {
  const [color, setColor] = useState("black");
  const [bgcolor, setBgColor] = useState("white");

  return (
    <>
    <div style={{ color: color, backgroundColor: bgcolor, width: "100%", height: "100%", border: "solid", borderColor: bgcolor ,width:"100%"}}>
      <NevBar setColor={setColor} setBgColor={setBgColor} color={color} bgcolor={bgcolor} />
      <section id=''>
       <Home color={color} bgcolor={bgcolor}  />
       </section>
       <section id='aboutus'>
      <About color={color} bgcolor={bgcolor}  />
      </section>
      <section id='how'>
      <How color={color} bgcolor={bgcolor}  />
      </section>
      <section id='readocs'>
      <Readocs color={color} bgcolor={bgcolor}  />
      </section>
      <section id='aboutus'>
      <Card color={color} bgcolor={bgcolor}  />
      </section>
      <Footer></Footer>
    </div>
    </>
  );
}

export default App;
