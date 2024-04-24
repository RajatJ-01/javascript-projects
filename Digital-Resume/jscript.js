var ab=document.getElementById("About");
var exe_button=document.getElementById("exe_button")
var project_button=document.getElementById("project_button");
var skill_button=document.getElementById("skill_button");
var education_button=document.getElementById("education_button");
var contact_button=document.getElementById("contact_button");


var about=document.querySelector(".about");
var expirence=document.querySelector(".experience");
var project=document.querySelector(".projects");
var skill=document.querySelector(".skills");
var education=document.querySelector(".education");
var contact=document.querySelector(".contact");


//action area
function action(){
    window.scrollTo({ top: 770, behavior: 'smooth' });
}

about.addEventListener("mouseenter",()=>{
    ab.style.background="gainsboro";
    ab.style.fontWeight=1000;
    ab.style.transform='scale(1.10)';
});

about.addEventListener("mouseleave",()=>{
    ab.style.background="transparent";
    ab.style.fontWeight=10;
});

//experience area


function exp(){
    window.scrollTo({ top: 1540,behavior: "smooth"});
}

expirence.addEventListener("mouseenter",()=>{
    exe_button.style.background="gainsboro";
    exe_button.style.fontWeight=1000;
    exe_button.style.transform='scale(1.10)';
});

expirence.addEventListener("mouseleave",()=>{
    exe_button.style.background="transparent";
    exe_button.style.fontWeight=10;
});


// project area
function proj(){
    window.scrollTo({ top: 2315,behavior: "smooth"});
}

project.addEventListener("mouseenter",()=>{
    project_button.style.background="gainsboro";
    project_button.style.fontWeight=1000;
    project_button.style.transform='scale(1.10)';
});

project.addEventListener("mouseleave",()=>{
    project_button.style.background="transparent";
    project_button.style.fontWeight=10;
});

//skill
function ski(){
    window.scrollTo({top:3520,behavior:"smooth"})
}
skill.addEventListener("mouseenter",()=>{
    skill_button.style.background="gainsboro";
    skill_button.style.fontWeight=1000;
    skill_button.style.transform='scale(1.10)';
});

skill.addEventListener("mouseleave",()=>{
    skill_button.style.background="transparent";
    skill_button.style.fontWeight=10;
});

//education

function edu(){
    window.scrollTo({top:5220,behavior:"smooth"})
}

education.addEventListener("mouseenter",()=>{
    education_button.style.background="gainsboro";
    education_button.style.fontWeight=1000;
    education_button.style.transform='scale(1.10)';
});

education.addEventListener("mouseleave",()=>{
    education_button.style.background="transparent";
    education_button.style.fontWeight=10;
});

//contact

function cont(){
    window.scrollTo({ top: 5990, behavior: 'smooth' });
}

contact.addEventListener("mouseenter",()=>{
    contact_button.style.background="gainsboro";
    contact_button.style.fontWeight=1000;
    contact_button.style.transform='scale(1.10)';
});

contact.addEventListener("mouseleave",()=>{
    contact_button.style.background="transparent";
    contact_button.style.fontWeight=10;
});

//typewrite
// var i = 0;
// var txt = 'A Pythonist';
// var speed = 200;

// function typeWriter() {
//   if (i < txt.length) {
//     document.getElementById("type-rite").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   } else {
//     i = 0; // Reset i to 0 to start typing from the beginning again
//     document.getElementById("type-rite").innerHTML = ''; // Clear the text before typing again
//     setTimeout(typeWriter, speed);
//   }
// }
// typeWriter();
var texts = ['A Pythonist','A Java Developer', 'A fast learner', 'A Data Scientist'];
var currentTextIndex = 0;
var i = 1;
var speed = 100; // Adjust typing speed as needed

function typeWriter() {
  if (i < texts[currentTextIndex].length) {
    document.getElementById("type-rite").innerHTML += texts[currentTextIndex].charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(eraseText, speed); // After typing a text, erase it
  }
}

function eraseText() {
  if (i > 1) {
    var currentText = texts[currentTextIndex];
    document.getElementById("type-rite").innerHTML = currentText.substring(0, i);
    i--;
    setTimeout(eraseText, speed);
  } else {
    currentTextIndex = (currentTextIndex + 1) % texts.length; // Move to the next text
    setTimeout(typeWriter, speed);
  }
}

typeWriter();

document.getElementById('downloadBtn').addEventListener('click', function() {
    
    var filePath = 'resume/Rajat_Resume.pdf'; // Update this with your file path

    
    var link = document.createElement('a');
    link.href = filePath;

    
    link.download = 'resume.pdf'; 

    
    document.body.appendChild(link);
    link.click();

    
    document.body.removeChild(link);
});