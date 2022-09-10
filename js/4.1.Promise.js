const userOut = false
const userIn = true

// Promise with resolve and reject
function classPromise() {
    return new Promise((resolve, reject) => {
        if (userOut) {
            reject({
                name: "User Move Out",
                message: "sadface :("
            })
        } else if (userIn) {
            reject({
                name: "User getting web classes",
                message: "happyface :)"
            })
        } else {
            resolve("Thanks for comming, BYE :D")
        }
    })
}

// Instead of callbacks just use a then
classPromise().then((message) => {
    console.log('Success: ' + message)
}).then((message) => {
    console.log('Success: ' + message)
}).catch((error) => {
    console.log(error.name + ' ' + error.message)
})