import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from './data'

function App() {

  return (
    <>    
      <Navbar />
      <main className="main">        
        {data.map((item, index) => {          
          return (
            <>
              <Card item={item}/>              
              {index !== data.length - 1 && <hr/> }
            </>
          )
        })}     
      </main>
    </>
  );
}

export default App;
