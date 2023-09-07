let slider = document.querySelector('.slider .about-list');
let items = document.querySelectorAll('.slider .about-list .about-item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let lengthItems = items.length - 1;
let active = 0;

next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}

// let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    console.log('hehe');
    console.log(items[active].offsetLeft    );
    slider.style.left = -items[active].offsetLeft + 'px';

    // clearInterval(refreshInterval);
    // refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}