
const btn = document.querySelector('.btn')
const search = document.querySelector('.search')
const input = document.getElementById('.input')

btn.addEventListener('click', function() {
    search.classList.toggle('active')
    input.focus()
})




