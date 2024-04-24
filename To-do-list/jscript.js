var input_box=document.getElementById('inpt');
var list_container=document.getElementById('list');

function action()
{
    if(input_box.value === ''){
        alert("Enter something first");
    }
    else{
        var li=document.createElement("li");
        li.innerHTML=input_box.value;
        list_container.appendChild(li);
        var span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        saveData();
        
    }
    input_box.value='';

}

list_container.addEventListener("click", function(e){
    if (e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === 'SPAN')
    {
        e.target.parentElement.remove();
        saveData();
    }

},false);

function saveData()
{
    localStorage.setItem("data", list_container.innerHTML);

}

function showData()
{
    list_container.innerHTML =localStorage.getItem("data");
}

showData();   