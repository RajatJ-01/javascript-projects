let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");

for (let list of lists) {
    list.addEventListener("dragstart", function(e) {
        let selected = e.target;

        
        e.dataTransfer.setData("text/plain", "");

        
        rightBox.addEventListener("dragover", function(e) {
            e.preventDefault(); 
        });
        rightBox.addEventListener("drop", function(e) {
            rightBox.appendChild(selected);
        });

        
        leftBox.addEventListener("dragover", function(e) {
            e.preventDefault(); 
        });
        leftBox.addEventListener("drop", function(e) {
            leftBox.appendChild(selected);
        });
    });
}
