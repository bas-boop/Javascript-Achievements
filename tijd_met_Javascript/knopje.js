let MijnButton = document.getElementById('MijnButton')
let datum = new Date();//datum is de date
MijnButton.addEventListener('click', ()=>{
window.alert(":D je klikt op mij. Hier is de datum van waneer je op mij klikte.\n" + datum)})