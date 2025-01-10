const API_key = '8b91e870c4e4ed9b3ee331c58d8f3fa1'
const lat = 34.6723
const lon = 135.4848
const link = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`

// Fetch data using fetch, then, catch
function fetchWeather1(){
    fetch(link)
        .then(response => {
            if (!response.ok){
                console.log("Network respnoses not ok")
            }
        return response.json();
        })
        .then (data =>{
            console.log("Data receieved", data);
        })
        .catch(error =>{
            console.error('There was a problem with the fetch operation:', error);
        })
}

// Fetch data using async function
async function fetchWeather2(){
    try{
        const response = await fetch(link);
        if (!response.ok){
            console.log("Network respnoses not ok")
        }

        const data = await response.json()
        console.log("Fetched data", data)
    }
    catch(error) {
        console.log(error.message)
    }
}