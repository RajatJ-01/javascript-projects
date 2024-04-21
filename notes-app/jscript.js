var notesContainer=document.querySelector(".notes-container")
var createBtn=document.querySelector(".btn");

createBtn.addEventListener("click",()=>{
    var notes=document.createElement("p");
    var icon=document.createElement("img");
    notes.contentEditable="true";
    notes.className="input-box";
    icon.id="delete_icon";
    icon.src="images/delete.png";
    notesContainer.appendChild(notes).appendChild(icon);
    
    console.log(notesContainer);

})

notesContainer.addEventListener("click",function(e){
       if(e.target.tagName==="IMG")
       {
            e.target.parentElement.remove();
       }

},false);