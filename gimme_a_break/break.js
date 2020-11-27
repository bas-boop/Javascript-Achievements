i = document.getElementById("break_img")
p = document.getElementById("clock")

breakStart = new Date(2020, 11, 27, 15, 30, 0, 0)
breakEnd = new Date(2020, 11, 27, 16, 30, 0, 0)

e = setInterval(updateTime,1000)

function updateTime(){
    d = new Date()
     p.innerHTML = "Break Time from "+breakStart.toTimeString()+" until " +breakEnd.toTimeString()+"<br/> Time: "+d.getHours() +" : "+ d.getMinutes() +" : "+ d.getSeconds()
}
function breakNow(){
    i.src = "break.jpg"
   
}
function endBreak(){
   i.src = "work.jpg"
}
