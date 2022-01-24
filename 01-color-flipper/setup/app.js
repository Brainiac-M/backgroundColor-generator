const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "blue"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
} ) 

//get random number bewteen 0 and 4
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}