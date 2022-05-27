import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

 




function App(){
  return (
    <div>
      <Header/>
      {notes.map((notes)=>
            
        <div>


          <Note
            key={notes.key}
            header={notes.title}
            note={notes.content.substring(0,17)+"..."}
          />


        </div>
            
          
      )}
      <Footer/>
    </div>
   
  )
}

export default App;
