function action()
{
    var button=document.getElementById("btn");
    var user_date=document.getElementById("user_date");
    user_date.max=new Date().toISOString().split("T")[0];
    var result=document.getElementById("result");
    var birth_date=new Date(user_date.value);
    console.log(birth_date);
    var y1=birth_date.getFullYear();
    var m1=birth_date.getMonth()+1;
    var d1=birth_date.getDate();

    var current_date=new Date();


    var y2=current_date.getFullYear();
    var m2=current_date.getMonth()+1;
    var d2=current_date.getDate();
 
    var y3,m3,d3;
    y3=y2-y1;

    if(m2 >= m1){
        m3=m2-m1;
    }
    else
    {
        y3--;
        m3=12+m2 - m1;
    }
    
    if(d2 >= d1){
        d3=d2-d1;
    }
    else
    {
        m3--;
        d3= getDaysInMonth(y1, m1) + d2 - d1;
    }
    if(m3 < 0)
    {
        m3=11;
        y3--;
    }
    result.innerHTML=`You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old`;
   

}

function getDaysInMonth(y,m){
    return new Date(y,m,0).getDate();
}


