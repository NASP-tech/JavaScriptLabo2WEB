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

async function studying() {
    const response = await makeRequest('DEI')
    console.log('Getting Answer ...')
    const processedResponse = await processRequest(response)
    console.log(processedResponse)
}

studying()