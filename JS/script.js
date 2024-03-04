/**
 * 1. inizializzo un counter
 * 2. con un setInterval decremento il counter
 * 3. stampo il counter
 * 4. quando il counter = 0 interrompo il setInterval
 */


const output = document.getElementById('output');
let counter = 5;

output.innerHTML = counter;
const decrement = () =>{
    counter--;
    output.innerHTML = counter;
    if(counter < 0){
        clearInterval(countDown);
        output.innerHTML = 'fine';
    } 
        
}

const countDown = setInterval(decrement, 1000);



