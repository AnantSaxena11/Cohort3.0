// setTimeout(()=>{
//     console.log("1st second")
//     setTimeout(()=>{
//         console.log("3 Seconds")
//         setTimeout(()=>{
//             console.log("5 seconds")
//         },5000)
//     },3000)
// },1000)


// nested callback function is called as call back hell 



function setTimeOutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}


// setTimeOutPromisified(1000).then(function () {
//     console.log("Hi 1st Second has passed")
//     setTimeOutPromisified(3000).then(function () {
//         console.log("3rd Second has passed")
//         setTimeOutPromisified(5000).then(function () {
//             console.log("5th Second has Passed!!")
//         })
//     });
// });


function callback()
{
    console.log("THE TIME HAS PASSED")
}


async function run()
{
    await setTimeOutPromisified(1000)
    callback()
    await setTimeOutPromisified(3000)
    callback()
    await setTimeOutPromisified(5000)
    callback()
}

run()