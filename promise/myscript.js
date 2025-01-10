// Async = makes a function returns a promise
// Await = makes an asybc function wait for a promise

function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true;

            if(dogWalked){
                resolve('You have walked the dog!')
            } else {
                reject("You didn't walk the dog")
            }
        }, 1000);
    });
}

async function doChores(){
    const walkDogResult = await walkDog()
    console.log(walkDogResult);
}

doChores();


