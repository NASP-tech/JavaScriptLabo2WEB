function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Address for class is ${location}`)
        if(location === 'DEI') {
            resolve('Google Maps says DEI')
        } else {
            reject('Google cannot get the address')
        }
    })
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('Processing answer')
        resolve(`Actual resolution + ${response}`)
    })
}

makeRequest('DEI').then(response => {
    console.log('Response Received')
    return processRequest(response)
}).then(processResponse => {
    console.log(processResponse)
}).catch(error => {
    console.log(error)
})