var img_box=document.getElementById("img_box");
var qrImage=document.getElementById("qr");
var text=document.getElementById("input_text");

function generate_qr(){
    if(text.value.length > 0){
        qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+text.value;
    }else
    {
        alert("Write something");
    }
    
}