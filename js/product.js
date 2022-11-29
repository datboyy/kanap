//
//
// Products themselves
//
//
// API URI
const url = new URL(window.location);
const id = url.searchParams.get("id");
const host = 'http://localhost:3000'
const productsListURI = host + '/api/products/' + id
//
// Selectors
let itemSel = 'section.item'
let itemImgSel = '.item__img'
let itemTitleSel = '#title'
let itemPriceSel = '#price'
let itemDescSel = '#description'
let itemColorsSel = '#colors'
let addToCartBtn = '#addToCart'
//
// Elements
let titleEl = document.querySelector('title')                                   // Page title element
let itemEl = document.querySelector(itemSel)                                    // Item container element
let itemImgEl = document.querySelector(itemImgSel)                              // Item image container element
let itemTitleEl = document.querySelector(itemTitleSel)                          // Item title element
let itemPriceEl = document.querySelector(itemPriceSel)                          // Item price element
let itemDescEl = document.querySelector(itemDescSel)                            // Item description element
let itemColorsEl = document.querySelector(itemColorsSel)                        // Item colors options container element
let addToCartBtnEl = document.querySelector(addToCartBtn)                       // Item add to cart button element
//
// Fetch product data
fetch(productsListURI)
  .then((res) => res.json())
  .then((data) => {
    //
    // Craft an "" id "" html element
    let idEl = document.createElement('span')
        idEl.innerText = data._id
        idEl.setAttribute('id', "id")
        idEl.style.display = "none"
    itemEl.insertAdjacentElement('afterbegin', idEl)
    //
    // Page title
    titleEl.innerText = titleEl.innerText + ' - ' + data.name
    //
    // Product image
    let imgEl = document.createElement('img')
        imgEl.setAttribute('src', data.imageUrl)
    itemImgEl.insertAdjacentElement('afterbegin', imgEl)
    //
    // Product title
    itemTitleEl.innerText = data.name
    //
    // Product price
    itemPriceEl.innerText = data.price
    //
    // Product description
    itemDescEl.innerText = data.description
    //
    // Product colors
    data.colors.forEach((color) => {
      // Create an option element
      let colorsOptionEl = document.createElement('option')
          colorsOptionEl.setAttribute('value', color)
          colorsOptionEl.innerText = color
      // Append option element to the DOM
      itemColorsEl.insertAdjacentElement('beforeend', colorsOptionEl)
    })
  })
  //
  // Add-to-cart button event
  addToCartBtnEl.addEventListener('click', (ev) => {
    // @TODO
    let id = document.querySelector('#id').innerText
    let productObj = {
        id: id,
        img: itemImgEl.querySelector('img').getAttribute('src'),
        price: itemPriceEl.innerText,
        name: itemTitleEl.innerText,
        description: itemDescEl.innerText,
        color: itemColorsEl.value
    }
    localStorage.setItem('id', productObj)
  })
// EOF
