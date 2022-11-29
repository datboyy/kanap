//
//
// Homepage's products list
//
//
// API URL
const host = 'http://localhost:3000'
const productsListURI = host + '/api/products/'
//
// Selectors & elements
let itemsSel = 'section.items'
let itemsEl = document.querySelector(itemsSel)
//
// Fetch homepage products list
fetch(productsListURI)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((item) => {
      //
      // Container a element
      let aEl = document.createElement('a')
          aEl.setAttribute('href', 'product.html?id=' + item._id)
      //
      // Article element
      let articleEl = document.createElement('article')
      //
      // Product illustration image element
      let imgEl = document.createElement('img')
          imgEl.setAttribute('src', item.imageUrl)
          imgEl.setAttribute('alt', item.altTxt)
      //
      // Product title element
      let h3El = document.createElement('h3')
          h3El.classList.add('productName')
          h3El.innerText = item.name
      //
      // Product description element
      let pEl = document.createElement('p')
          pEl.classList.add('productDescription')
          pEl.innerText = item.description
      //
      // Append elements to the DOM
      articleEl.append(imgEl, h3El, pEl)
      aEl.append(articleEl)
      itemsEl.insertAdjacentElement('beforeend', aEl)
    })
})
// EOF
