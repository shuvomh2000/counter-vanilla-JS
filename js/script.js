
// for hour
let count1 = document.querySelector(".count1")
let countnum1 = 0


function counter1() {
    countnum1++
    count1.innerHTML = countnum1

    if(countnum1 == count1.dataset.number){
        clearInterval(stop1)
    }
}

let stop1 = setInterval(function(){
    counter1()
},100)




// for min
let count2 = document.querySelector(".count2")
let countnum2 = 0



function counter2() {
    countnum2++
    count2.innerHTML = countnum2

    if(countnum2 == count2.dataset.number){
        clearInterval(stop2)
    }
}

let stop2 = setInterval(function(){
    counter2()
},100)
//  for sec
// let count3 = document.querySelector(".count3")
// let countnum3 = 0


// function counter3() {
//     countnum3++
//     count3.innerHTML = countnum3

//     if(countnum3 == count3.dataset.number){
//         clearInterval(stop3)
//     }
// }

// let stop3 = setInterval(function(){
//     counter3()
// },1000)