let input_box=document.getElementById("input_box");
let img_icon=document.getElementById("icon");

function action()
{
    if(img_icon.classList.contains("icon_add")){
        input_box.type="text";
        img_icon.src="images/eye-open.png";
        img_icon.classList.remove("icon_add");
        img_icon.classList.add("icon_remove");
        
    }
    else{
        input_box.type="password";
        img_icon.src="images/eye-close.png";
        img_icon.classList.remove("icon_close");
        img_icon.classList.add("icon_add");
    }
    
}