var home = document.querySelector('#home');
var contact = document.querySelector('#contact');
var about = document.querySelector('#about');

var hometext = document.querySelector('#hometext');
var contacttext = document.querySelector('#contacttext');
var abouttext = document.querySelector('#abouttext');



home.addEventListener("click",function(){
    saartexthatao();
    hometext.style.display = 'block';
    hometext.style.width = '50%';
})

contact.addEventListener("click",function(){
    saartexthatao();
    contacttext.style.display = 'block';
    contacttext.style.width = '50%';
})

about.addEventListener("click",function(){
    saartexthatao();
    abouttext.style.display = 'block';
    abouttext.style.width = '50%';
})

function saartexthatao(){
    document.querySelectorAll("h3").forEach(function(h3){
        h3.style.display = 'none';
    })
}
