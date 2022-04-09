


document.querySelector('#calorie').addEventListener('click', pizzaSize)

function pizzaSize(){
    let size = document.querySelector('#pizzaSize').value
    if (size <500){
        document.querySelector('#pizza').style.width = '4rem'
    }
    else if (size >= 500 && size< 1000){
        document.querySelector('#pizza').style.width = '9rem'
    }
    else if (size >=1000 && size < 2000){
        document.querySelector('#pizza').style.width = '12rem'
    }
    else{
        document.querySelector('#pizza').style.width = '15rem'
    }
}


    
document.querySelector('#calorie').addEventListener('click', setInit)

function setInit(){
    setInterval(updateCountdown, 1000)
    let countDownEl  = document.getElementById('workoutTime').value
    let time = countDownEl * 60
function updateCountdown(){ 
    const minutes = Math.floor(time / 60);
    let seconds = time % 60
    seconds = seconds < 10? '0' + seconds : seconds;
   document.getElementById('pizza').style.width =  `${seconds}` + 'rem'
   document.querySelector('.timer').innerHTML = `${minutes}: ${seconds}`
   if (minutes <= 0 && seconds <= 0){clearInterval(updateCountdown)}
   else {time--}
}  
}


// function setInit(){
//     let time = document.querySelector('#workoutTime').value*60000
//     timer(time)
// }

// function timer(time){
//  let time2 = time - 1000;
//  console.log(time2)
//  setTimeout(() => {timer(time2)}, 1000)
//  while (time <= 0){
//     clearTimeout(timer);
//   }
// }



// function red(time2){

// 