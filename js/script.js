function updateDate(){
    var date2 = new Date();
    var setTime2 = document.getElementById("setTime");
    setTime2.innerHTML = date2.getHours() + ":" + date2.getMinutes()+":"+date2.getSeconds();
    var setDate2 = document.getElementById("setDate");
    setDate2.innerHTML = date2.getDate() + "-" + parseInt(date2.getMonth()+1)+"-"+date2.getFullYear();
}
setInterval(updateDate,100);
onload = updateDate();

function getColor(){
    var getColor2 = document.getElementById("setColor").value;
     localStorage.setItem("Color",getColor2);
     document.getElementById("time").style.background = localStorage.getItem("Color");
     document.body.style.background = localStorage.getItem("Color");
}
function setColor(){
   document.getElementById("setColor").value = localStorage.getItem("Color");

   document.getElementById("time").style.background = localStorage.getItem("Color");
   document.body.style.background = localStorage.getItem("Color");
}
setInterval(setColor,100);