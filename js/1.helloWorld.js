function helloWorld(){
    process.stdout.write(" Hello World! ");
}

function main(output) {
    for (let i = 0; i < output; i++) {
        helloWorld();
        console.log(i);
    }
}

main(7);