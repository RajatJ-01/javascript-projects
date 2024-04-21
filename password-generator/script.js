var input_box=document.getElementById("input_box");

function start()
{
    var password='';
    var upperLetters='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowerLetters=upperLetters.toLowerCase();
    var numbers='1234567890';
    var symbols='@#$%&?/|';
    password+=upperLetters[(Math.floor(Math.random()*upperLetters.length))];
    password+=lowerLetters[(Math.floor(Math.random()*lowerLetters.length))];
    password+=numbers[(Math.floor(Math.random()*numbers.length))];
    password+=symbols[(Math.floor(Math.random()*symbols.length))];

    var allchar=upperLetters+lowerLetters+numbers+symbols;
    
    var length=12;

    while(password.length <12)
    {
        password+=allchar[Math.floor(Math.random() * allchar.length)];
    }

    input_box.value=password;

    
}

function copy_password()
{
    input_box.select();
    document.execCommand('copy');
}