// база с заказчиками
const reviews = [
    {
        img: '../img/1.png',
        name: 'Valentin',
        message: 'Nice package, fast delivery. I\'m satisfied.'
    },

    {
        img: '../img/2.png',
        name: 'Egor',
        message: 'Very fast delivery. Thank you! See you later.'
    },

    {
        img: '../img/3.png',
        name: 'Ann',
        message: 'My order was delivered on time, it\'s wonderfully!'
    }
]

// корневой элемент, куда будет произведена вставка
const container = document.getElementById('reviews-js')

// функция содержит функциональное (кавычки) html выражение
const reviewHTML = (rev) =>
    `<div class="review">
        <img src="${rev.img}" alt="first">
        <div class="rev-content">
            <h3>${rev.name}</h3>
            <p>${rev.message}</p>
        </div>
    </div>`

// Выбранный метод показа
function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

// index содержит всех заказчиков, показывает в случайном порядке
let timerId = setInterval(() => {
    const index = getRandomInt(0, 2)
    container.classList.add('pre-show')
    container.innerHTML = reviewHTML(reviews[index])

    // удаление внутри интервала
    setTimeout(() => {
        container.classList.remove('pre-show')
    }, 400)
}, 3000)
