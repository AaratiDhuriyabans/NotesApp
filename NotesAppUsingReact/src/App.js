import React, { useState } from 'react';
import NavBar from './Components/NavBar';
import Form from './Components/Form';
import Notes from './Components/Notes';
import EditModal from './Components/EditModal';

export default function App()
{
  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");
  const [notes,setnotes]=useState(getNotesFromLs);
  const [editid,seteditid]=useState("");
  localStorage.setItem("notes",JSON.stringify(notes))
  console.log(notes);
  return(
   <>
    <div>
      <EditModal editid={editid} notes={notes} setnotes={setnotes}/>
      <NavBar/>
      <Form  title={title} setTitle={setTitle} description={description} setDescription={setDescription} notes={notes} setnotes={setnotes} />
      <div className="container justify-content-center">
        <div className="row">
          <h1 className='mb-3'>My Notes</h1>
          <div className="col-md-10" >
            {
              notes.length===0?  
              <div className="card">
              <div className="card-header">
                Featured
              </div>
              <div className="card-body">
                <h5 className="card-title">Message</h5>
                <p className="card-text">No notes are Available</p>
                </div>
            </div>: notes.map((element)=>{
              return(
                <Notes element={element} key={element.id} notes={notes} setnotes={setnotes} seteditid={seteditid}/>
              )
            })        }
          </div>
        </div>
      </div>
    </div>
 
   </>
    )
    function getNotesFromLs()
    {
      const note=JSON.parse(localStorage.getItem("notes"));
      if(note)
      {
        return note
      }
      else{
        return [];
      }
    }
}