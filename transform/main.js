const fig = document.getElementById('figure');
const circle = document.querySelector('#figure.circle')
const triangle = document.querySelector('#figure.triangle')


fig.onclick = function() {
    fig.classList.add('circle')
    circle.onclick = function() {
        fig.classList.remove('circle')
        fig.classList.add('triangle')
    }
}

circle.onclick = function() {
    fig.classList.remove('circle')
    fig.classList.add('triangle')
}

triangle.onclick = function() {
    triangle.classList.remove('circle')
}

