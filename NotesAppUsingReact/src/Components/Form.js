import React from "react";
export default function Form({title,setTitle,description,setDescription,notes,setnotes})
{
  const inputHandler=(e)=>{
    if(e.target.id==="title")
    {
      setTitle(e.target.value)
    }
    else{
      setDescription(e.target.value)
    }
    console.log(title,description);
  }
  const addNotesHandler=(e)=>{
    e.preventDefault();
   if(title!=="" && description!=="")
   { setnotes((note)=>{
    return(
      [...note,{
        title:title,
        description:description,
        id:new Date().getTime()
      }]
    )
  })
 }
    setTitle("");
    setDescription("");
  }
   
    return(<>
  <div className="container my-3">
    <div className="row justify-content-center">
        <div className="col-md-10">
        <form style={{border:"2px solid #ced4da",borderRadius:"10px",padding:"10px"}}>
  <div className="mb-3">
    <label for="title" className="form-label">Enter Title*:</label>
    <input type="text" className="form-control" id="title" placeholder="Title"  value={title} onChange={inputHandler}/>
    </div>
  <div className="mb-3">
    <label for="desc" className="form-label">Enter Description*:</label>
    <textarea name="desc" id="desc"  rows={"10"} className="form-control"  placeholder="Description" value={description} onChange={inputHandler}></textarea>
  </div>
   <button type="submit" className="btn btn-success" onClick={addNotesHandler}>Add Note</button>
</form>
 
        </div>
    </div>
  </div>
     </>)
}