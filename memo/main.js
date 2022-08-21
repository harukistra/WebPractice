const items = document.querySelectorAll('.sub')

window.onload = function() {
    for(let i=0; i < items.length; i++) {
        items[i].classList.add('show')
    }
}