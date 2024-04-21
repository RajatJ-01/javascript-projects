const date=document.getElementById("date");
const day=document.getElementById("day");
const month=document.getElementById("month");
const year=document.getElementById("year");
const today=new Date();

date.innerHTML=(today.getDate() < 10?"0":"")+today.getDate();
day.innerHTML=Day(today.getDay());
month.innerHTML=Month(today.getMonth());
year.innerHTML=today.getFullYear();

function Month(month){
    let months=['January','February','March','April','May','June','July','August','September','October','November','December'];
    return months[month];
}

function Day(day){
    let days=['Sunday','Monday','Tuesday','Wednesday','Friday','Saturday'];
    return days[day];
}