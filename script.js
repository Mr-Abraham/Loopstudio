var toggle = document.querySelector('.switch');
var nav = document.querySelector('nav');
var navigation = document.querySelector('.navigation');

toggle.onclick = function(){
    toggle.classList.toggle('active');
    nav.classList.toggle('active');
    navigation.classList.toggle('active');
}