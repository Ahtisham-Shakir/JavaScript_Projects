const joke = document.getElementById('joke');
const btn = document.getElementById('jokeBtn');

btn.addEventListener('click', generateJoke)

// Function execute on reload
generateJoke()

// async function to fetch data
async function generateJoke(){
    let config = {
        headers:{
            'Accept':'application/json'
        }
    }

    const response = await fetch('https://icanhazdadjoke.com',config);
    const data = await response.json()
     joke.innerHTML = data.joke;
}


// using .then to fetch data
// function generateJoke(){
//     let config = {
//         headers:{
//             'Accept':'application/json'
//         }
//     }

//     fetch('https://icanhazdadjoke.com',config)
//     .then(response => response.json())
//     .then(data => joke.innerHTML = data.joke)
// }