const searchEl = document.querySelector('.search')

searchEl.search.addEventListener("input", () => {
    const searchValue = searchEl.search.value.toLowerCase()
    console.log(searchValue)
    const cardsItem = document.querySelectorAll('.cards__item')
    const cardsTitles = document.querySelectorAll('.cards__title')

    cardsTitles.forEach((title, i) => {
        // title.textContent.toLowerCase().includes(searchValue) ? cardsItem[i].style.display = 'block': cardsItem[i] = 'none'
        if (title.textContent.toLowerCase().includes(searchValue)) {
            cardsItem[i].style.display = 'block'
        } else {
            cardsItem[i].style.display = 'none'
        }
    })
})

import { createCountries } from "./updateUI"
import request from "./request"

const searchSelect = document.querySelectorAll('.search__select-list li')
const searchSelectSpan = document.querySelector('.search__select span')

searchSelect.forEach((li) => {
    li.addEventListener('click', () => {
        searchSelectSpan.textContent = li.textContent

        let filterApi
    
        if (li.textContent == 'All') {
            filterApi = 'https://restcountries.com/v3.1/'
        } else {
            filterApi =`https://restcountries.com/v3.1/region/${li.textContent}`
        }

        request(filterApi).then((data) => {
            createCountries(data)
        }).catch((error) => {
            console.log(error)
        })
    })

})