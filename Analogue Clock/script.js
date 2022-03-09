setInterval(()=>{
let d = new Date();
let h = d.getHours();
let m = d.getMinutes();
let s = d.getSeconds();

let hRotation = 30*h + m/2;
let mRotation = 6*m;
let sRotation = 6 * s;

hours.style.transform = `rotate(${hRotation}deg)`;
minutes.style.transform = `rotate(${mRotation}deg)`;
seconds.style.transform = `rotate(${sRotation}deg)`;
},1000)