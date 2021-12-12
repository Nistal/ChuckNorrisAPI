const bod = document.querySelector('body')

const container = document.createElement('div')
container.setAttribute('class', 'container')

const btn = document.createElement('button')
btn.setAttribute('class', 'btn')
btn.textContent = 'Actualizar'

const phrase = document.createElement('p')
phrase.setAttribute('class', 'phrase')

const imagen = document.createElement('img')
imagen.setAttribute('src', 'https://assets.chucknorris.host/img/avatar/chuck-norris.png')
imagen.classList.add('chuck-img')

container.appendChild(imagen)
container.appendChild(phrase)
bod.appendChild(container)

bod.appendChild(btn)

const url = 'https://api.chucknorris.io/jokes/random'

fetch(url)
    .then(res => {
        return res.json()
    })
    .then(data => {
        // document.write(data.value)
        phrase.textContent = data.value
    })
    .catch(err => {
        console.log('Error: ' + err)
    })


btn.addEventListener('click', () => {
    window.location.reload();
})