import React from "react";
export default  function Notes({element,notes,setnotes,seteditid})
{
  const removeHandler=(id)=>{
    //console.log(notes);//id

    const newNotes = notes.filter((emnt) => {
      return emnt.id !== id;
    });
      setnotes(newNotes);
    //  seteditid(id)
  }
  const EditHandler=(id)=>{
     // console.log(id);
     seteditid(id);
     notes.filter((el)=>{
      if(el.id===id)
      {
document.getElementById("etitle").value=el.title;
document.getElementById("edesc").value=el.description;
      }
     })
  }
    return(
        <>
        <div className="card">
  <div className="card-header">
    Featured
  </div>
  <div className="card-body" style={{textTransform:"capitalize"}}>
    <h5 className="card-title">{element.title}</h5>
    <p className="card-text">{element.description}</p>
    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
    onClick={()=>{
      EditHandler(element.id)
    }}
    >
  Edit
</button>

    <button className="btn btn-danger mx-3" onClick={()=>{
      removeHandler(element.id)
    }}> Delete</button>
  </div>
</div>
        </>
    )
}