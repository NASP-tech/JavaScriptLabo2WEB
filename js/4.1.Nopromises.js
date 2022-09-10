const userOut = false
const userIn = true

// Normal Function with parameters
function classCallback(callback, error){
    if(userOut){
        error({
            name: "User Move Out",
            message: "sadface :("
        })
    } else if(userIn){
        error({
            name: "User getting web classes",
            message: "happyface :)"
        })
    } else {
        callback("Thanks for comming, BYE :D")
    }
}


classCallback((message) => {
    console.log("Success: " + message)
}, (error) => {
    console.log(error.name + ' ' + error.message)
})