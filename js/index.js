//
//
// Homepage's products list
//
//

//
// Selectors & elements
let itemsSel = 'section.items'
let itemsEl = document.querySelector(itemsSel)

// API URL
const host = 'http://localhost:3000'
const productsListURI = host + '/api/products/'

//
// Fetch homepage products list
fetch(productsListURI)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((item) => {
      let aEl = document.createElement('a')
          aEl.setAttribute('href', 'product.html?id=' + item._id)

      let articleEl = document.createElement('article')

      let imgEl = document.createElement('img')
          imgEl.setAttribute('src', item.imageUrl)
          imgEl.setAttribute('alt', item.altTxt)

      let h3El = document.createElement('h3')
          h3El.classList.add('productName')
          h3El.innerText = item.name

      let pEl = document.createElement('p')
          pEl.classList.add('productDescription')
          pEl.innerText = item.description

      articleEl.append(imgEl, h3El, pEl)
      aEl.append(articleEl)

      itemsEl.insertAdjacentElement('beforeend', aEl)

    })
})
// EOF
