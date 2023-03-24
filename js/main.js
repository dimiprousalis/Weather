
document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
    const apiKey = 'ddd68f304dc04e048d398b634d73b4e1'
    const choice = document.querySelector('input').value
    const url = `https://api.weatherbit.io/v2.0/current?postal_code=${choice}&key=${apiKey}&units=I`

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(info => {
            console.log(info)
            let temperature = info.data[0].temp
            
            document.querySelector('#city').innerHTML = info.data[0].city_name
            document.querySelector('#temp').innerHTML = temperature
            document.querySelector('#description').innerHTML = info.data[0].weather.description
           
            if (temperature >= 65) {
                document.querySelector('h3').innerHTML = 'Looks like nice weather today! You should enjoy a cocktail by the pool'
                document.querySelector('img').src = 'happysun.png'
                document.querySelector('body').className = "backgroundHot"
            } else {
                document.querySelector('h3').innerHTML = 'Looking a little cold today... You should stay inside and binge Netflix'
                document.querySelector('img').src = 'sadcloud.png'
                document.querySelector('body').className = "backgroundCold"
            }

        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

