const cartButton = document.querySelector('#cart-button');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');
const card = document.querySelector('#card');
const card2 = document.querySelector('#card2');
const card3 = document.querySelector('#card3');
const card4 = document.querySelector('#card4');
const card5 = document.querySelector('#card5');
const card6 = document.querySelector('#card6');

cartButton.addEventListener('click',function(event){
    modal.classList.add('modal-open');
});
close.addEventListener('click',function(event){
    modal.classList.remove('modal-open');
});


card.addEventListener('click', function(event){
    card.classList.add('bounceOut');
});
card2.addEventListener('click', function(event){
    card2.classList.add('bounceOut');
});
card3.addEventListener('click', function(event){
    card3.classList.add('bounceOut');
});
card4.addEventListener('click', function(event){
    card4.classList.add('bounceOut');
});
card5.addEventListener('click', function(event){
    card5.classList.add('bounceOut');
});
card6.addEventListener('click', function(event){
    card6.classList.add('bounceOut');
});

new WOW().init();