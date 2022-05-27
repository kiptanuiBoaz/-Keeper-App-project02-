import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

 function reNotes (notes){
  return(
    <div>
     

      <Note
        key={notes.key}
        header={notes.title}
        note={notes.content}
      />

    
    </div>
  )
};




function App(){
  return (
    <div>
      <Header/>
      {notes.map(reNotes)}
      <Footer/>
    </div>
   
  )
}

export default App;
