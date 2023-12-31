import React from "react";
export default function EditModal({editid,notes,setnotes})
{
  const updateHandler=()=>{
   const updateNotes= notes.map((el)=>{
//console.log(el);
if(editid===el.id)
{
  return ({...el,
    title:document.getElementById("etitle").value,
    description:document.getElementById("edesc").value
  })
}
else{
  return el
}
    })
    console.log(updateNotes);
    setnotes(updateNotes);
  }
    return(
        <>
        {/*<!-- Button trigger modal -->*/}

{/*<!-- Modal -->*/}
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Notes</h1>
         </div>
      <div className="modal-body">
      <form>
  <div className="mb-3">
    <label for="etitle" className="form-label">Title*:</label>
    <input type="text" className="form-control" id="etitle" placeholder="Title" />
    </div>
  <div className="mb-3">
    <label for="edesc" className="form-label">Description</label>
    <textarea name="desc" id="edesc"  rows={"10"} className="form-control"  placeholder="Description"></textarea>
  </div>
 
</form>
 
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={updateHandler}>Edit Note</button>
        </div>
    </div>
  </div>
</div>
        </>
    )
}