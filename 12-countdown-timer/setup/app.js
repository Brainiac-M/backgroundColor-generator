const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');
//console.log(items)

//********Create date template*********
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

//  let futureDate = new Date(2022, 4, 25, 08, 30, 00);
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 8, 30, 50); 
// console.log(futureDate);

const year = futureDate.getFullYear();
//console.log(year)
const hour = futureDate.getHours();
const minutes = futureDate.getMinutes();
let month = futureDate.getMonth();
// console.log(month);
month = months[month];
const date = futureDate.getDate();
// console.log(date);
const weekday = weekdays[futureDate.getDay()];
// console.log(weekday);


giveaway.textContent = `Giveaway ends on ${weekday}, ${date} ${month} ${year} ${hour}:${minutes}am`;

//******future time in milliseconds******
const futureTime = futureDate.getTime();

function getRemainingTime(){
  const today = new Date().getTime();
  const diff = futureTime - today;
  // console.log(diff);


  //******Remember that:******
  // 1s = 1000ms
  // 1min = 60s
  // 1hour = 60min
  // 1day = 24hours

  //******Time values in ms******
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = diff/oneDay;
  // console.log(days);
  days = Math.floor(days);
  // console.log(days);
  let hours = Math.floor((diff%oneDay) /oneHour);
  // console.log(hours);
  let minutes = Math.floor((diff % oneHour) / oneMinute);
  let seconds = Math.floor((diff % oneMinute) / 1000);

  //********set values as arrays*******
  const dateValues = [days, hours, minutes, seconds];

  //*******format item******
  function format(item){
    if(item < 10){
      return item = `0${item}`;
    }
    return item
  }

  //****input values for item*****
  items.forEach( (item, index) => {
    item.innerHTML = format(dateValues[index]);
  })

  //****end countdown and display expiration message********
  if(diff < 0){
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">Sorry, the giveaway has ended. Better luck next time.</h4>`
  }

}

//*****countdown*****
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();