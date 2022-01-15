// let count1 = document.querySelector(".count1")
// let countnum1 = 0


// function counter1() {
//     countnum1++
//     count1.innerHTML = countnum1

//     if(countnum1 == count1.dataset.number){
//         clearInterval(stop1)
//     }
// }

// let stop1 = setInterval(function(){
//     counter1()
// },100)



let forcountarray = document.querySelectorAll(".count")
let arr = Array.from(forcountarray)
let box = document.querySelector(".box")
// let forboxarray = document.querySelectorAll(".box") 
// let box = Array.from(forboxarray)

arr.map(function (item) {
    let count = 0

    function counter() {
        count++
        item.innerHTML = count

        if (count == item.dataset.number) {
            clearInterval(stop)
            item.style.background = "green"
        }
    }
    let stop = setInterval(function () {
        counter()
    }, 100)


})