const button = document.querySelector('button')

const apiKey = 'WT8ZozYcAvaOPpi7hvW9Yl6YRjdxLAefRXMgj6xE'
button.addEventListener('click', ()=>{
const date = document.getElementById('input').value


fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`) //template literal because apiKey and date have been declared. User will enter in date
  .then(response => response.json()) //pasre responds as JSON
  .then(response => {
    if (response.media_type == "image"){
      document.querySelector('img').src = response.hdurl
      document.querySelector('iframe').style.display='none'
    }else if (response.media_type == "video"){
      document.querySelector('iframe').src = response.url
      document.querySelector('img').style.display='none'
}

})

  .catch(err => {
      console.log(`error ${err}`)
      alert("Sorry, there are no results for your search.")
  })
})



/*const apiKey = ''
button.addEventListener('click', ()=>{
const date = document.querySelector('#input').value

fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      if (response.media_type == "image"){
        document.querySelector('img').src = response.hdurl
      }else if (response.media_type == "video"){
        document.querySelector('iframe').src = response.url
}

})

    .catch(err => {
        console.log(`error ${err}`)
        alert("Sorry, there are no results for your search.")
    })
})*/
