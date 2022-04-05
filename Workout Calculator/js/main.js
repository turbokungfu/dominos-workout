


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

    
document.querySelector('#calorie').addEventListener('click', timer)

function timer(){
    let time = document.querySelector('#workoutTime').value*60000
    console.log(time)
    
    while (time > 0){
        setInterval(decreasePizza, [1000])
        time = time - 1000
}

function decreasePizza(){
    console.log('pizza')
}
}
    // setInterval("countdown()",1000){
    //     console.log(time)
    //     time--
    //     if (time === 0){
    //         alert('Pizza gone');
    //         }}
    // countdownId = setInterval("countdown()", 1000)}
