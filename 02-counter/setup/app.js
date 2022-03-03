//set initial count 
let count = 0

//select value and buttons
const value  = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

//seclect each button and add click event
btns.forEach( (btn) => {
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList;
        if(styles.contains('increase')){
            count++;
        }
        else if(styles.contains('decrease')){
            count--;
        }
        else{
            count = 0;
        }

        //check count to change color
        if (count > 0){
            value.style.color = "green";
        }
        else if(count < 0){
            value.style.color = "red";
        }
        else{
            value.style.color = "initial";
        }

        value.textContent = count;
    })
} )