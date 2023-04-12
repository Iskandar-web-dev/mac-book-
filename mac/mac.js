
let macbooks = {
    "white": "whitemac.png",
    "spacegrey": "spacegreymac.png"
}
let prices = {
   "$1,999": "$1,999",
   "+$200": "$2,199",
   "+$600": "$2,599",
   "+$1,200": "$3,199"
}
let main = document.querySelector('main')
let mac_bg = document.querySelector('.left')
let change_color = document.querySelectorAll('.changebtn')
let h4_color = document.querySelector('.color')
let storage = document.querySelectorAll('[data-prices]')
let pricee = document.querySelector('.pricee')
change_color.forEach((btn) => {
    btn.onclick = () => {
        let key = btn.getAttribute('data-color')
        h4_color.innerHTML = btn.innerHTML
        change_color.forEach(el => el.classList.remove('active'))
        btn.classList.add('active')
        mac_bg.style.backgroundImage = `url(${macbooks[key]})`
    }
})
 storage.forEach((price) => {
    price.onclick = () => {
        let key = price.getAttribute('data-prices')
        price.classList.add('btnActive')
       storage.forEach(el => el.classList.remove('btnActive'))
       price.classList.add('btnActive')
        pricee.innerHTML = prices[key]
        
    }
 })
 let hamb = document.querySelector('.hamb')
 let modal = document.querySelector('.modal')
 let close = document.querySelector('.close')
 hamb.onclick = () => {
    modal.style.display = 'block'
    setTimeout(() => {
        modal.style.left = '0%'
    }, 200);
 }
 close.onclick = () => {
    modal.style.left = "-30%"
    setTimeout(() => {
        modal.style.display = 'none'
    }, 200);
 }