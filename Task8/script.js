var input = document.querySelector("input");
var data = [
    {name: "harsh",src:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "harshitha",src:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "harshika",src:"https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "shyam",src:"https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
]

var pers = "";
data.forEach(function(elem){
     pers += `<div class="person">
    <div class="img">
        <img src="${elem.src}" alt="">
    </div>
    <h4>${elem.name}</h4>
</div>`
})

document.querySelector(".people").innerHTML=pers;

input.addEventListener("input",function(){
    var matching = data.filter(function(e){
        return e.name.startsWith(input.value)
    })
    var newuers = "";
    matching.forEach(function(elem){
        newuers += `<div class="person">
       <div class="img">
           <img src="${elem.src}" alt="">
       </div>
       <h4>${elem.name}</h4>
   </div>`
   })
   
   document.querySelector(".people").innerHTML=newuers;
    
})