document.querySelector('#calorie').addEventListener('click', pizzaSize)

function pizzaSize(){
    let size = document.querySelector('#pizzaSize').value
    if (size <500){
        document.querySelector('#pizza').style.width = '14rem'
    }
    else if (size >= 500 && size< 1000){
        document.querySelector('#pizza').style.width = '24rem'
    }
    else if (size >=1000 && size < 2000){
        document.querySelector('#pizza').style.width = '44rem'
    }
    else{
        document.querySelector('#pizza').style.width = '64rem'
    }
  

}





// document.querySelector('#pizzaSelect').addEventListener('click', pizzaSize)

// function pizzaSize(){
//     if (document.querySelector('#small')){
//     document.querySelector('#pizza').style.width = '14rem'
// }
// else if (document.querySelector('#medium')){
//     document.querySelector('#pizza').style.width = '34rem'
// }
// else if (document.querySelector('#large')){
//     document.querySelector('#pizza').style.width = '54rem'
// }}

//don't know why this doesn't work:   document.querySelector('#pizza').style.width = ('size * 1rem')

// const smallPizza = document.querySelector('#pizzaSelect').addEventListener('change', pizzaSize)

//document.getElementById('pizzaSelect').onchange = pizzaSize




// function pizzaSmall(){
//     document.querySelector('#pizza').style.width = '14rem'
// }
// function pizzaMedium(){
//     document.querySelector('#pizza').style.width = '34rem'
// }
// function pizzaLarge(){
//     document.querySelector('#pizza').style.width = '54rem'
// }


// function pizzaSize(){
//    if(document.getElementById('small')){
//     document.getElementById('pizza').style.width = '4rem'
//    }
//    else if(document.getElementById('medium')){
//     document.getElementById('pizza').style.width = '24rem'
//    } 
//    else if(document.getElementById('large')){
//     document.getElementById('pizza').style.width = '44rem'
//    }
// }



// const small = document.querySelector('#small')
// const medium = document.querySelector('#medium')
// const large = document.querySelector('#large')

// if(small){document.querySelector('#pizza').style.width = '4rem'}
// if(medium){document.querySelector('#pizza').style.width = '14rem'}
// if(large){document.querySelector('#pizza').style.width = '44rem'}