console.log("Expanded");
 
function expand(id){
   let panels =  document.getElementsByClassName('panel');
   Array.from(panels).forEach((element)=>{
       element.classList.remove('active');
   })
   document.getElementById(id).classList.add('active');
}