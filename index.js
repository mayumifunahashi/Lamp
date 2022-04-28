const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function islampbroken (){
    return lamp.src.indexOf ('quebrada') >- 1
}

function lampOn (){
    if (!islampbroken ()){
          lamp.src = './src/acesa.jpg';
    }
  
}

function lampOff () {
    if (!islampbroken()) {
        lamp.src = './src/apagada.jpg';
    }
    
}

function lampBroken (){
    lamp.src = './src/quebrada.jpg'
}

function button (){
    return
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('dblclick', lampBroken);
