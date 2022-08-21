const imageElement = document.getElementById('dog-img')

fetch('https://dog.ceo/api/breeds/image/random')
.then((res) => {
    return res.json()
})
.then((data) => {
    imageElement.src = data.message
})