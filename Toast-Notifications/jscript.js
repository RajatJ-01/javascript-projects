var toast_box=document.querySelector(".toast_box");
var success_msg='<i class="fa-solid fa-circle-check"></i>Succesfully Sumbited';
var error_msg='<i class="fa-solid fa-circle-xmark"></i>Please fix the error';
var invalid_msg='<i class="fa-solid fa-circle-exclamation"></i>Invalid input, check again';
function start(msg){
    var toast=document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML=msg;
    toast_box.appendChild(toast);

    if(msg.includes('error'))
    {
        toast.classList.add('error');
    }
    if(msg.includes('Invalid'))
    {
        toast.classList.add('invalid');
    }

    setTimeout(()=>{
        toast.remove();
    },6000)
}