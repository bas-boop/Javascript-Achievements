i = document.getElementById("break_img")
p = document.getElementById("clock")

breakStart = new Date(2020, 12, 4, 15, 45, 0, 0)
breakEnd = new Date(2020, 12, 4, 21, 15, 0, 0)

e = setInterval(updateTime,1000)

function updateTime(){
    d = new Date()
     p.innerHTML = "Break Time from "+breakStart.toTimeString()+" until " +breakEnd.toTimeString()+"<br/> Time: "+d.getHours() +" : "+ d.getMinutes() +" : "+ d.getSeconds()
    if(breakStart.getMinutes() == d.getMinutes()){
        breakNow();
    }
    if (breakEnd.getMinutes() == d.getMinutes()){
        breakNot();
    }
}
function breakNow(){
    i.src = "break.jpg"
}
function breakNot(){
   i.src = "work.jpg"
}