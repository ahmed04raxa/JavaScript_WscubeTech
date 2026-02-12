// let productItems = document.querySelector('.productItems')
// let getProducts = async () => {
//     let apiFirstResponse = await fetch('https://dummyjson.com/products')
//     let finalResponse = await apiFirstResponse.json()
//     productItems.innerHTML = finalResponse.name

// }
// getProducts()

let categoryListElement = document.querySelector('aside ul')
let productElement = document.querySelector('.products')

let currentSlug = '';

let getProducts = (catSlug = '') => {
    let apiUrl;
    if (catSlug == '') {
        apiUrl = 'https://dummyjson.com/products'
    } else {
        apiUrl = `https://dummyjson.com/products/category/${catSlug}`
    }
    fetch(apiUrl)
        .then((res) => res.json())
        .then((finalRes) => {
            let { products } = finalRes
            let productList = ''
            products.forEach((element) => {
                productList += `<div class="productItems">
                        <img src="${element.thumbnail}"
                            alt="">
                        <div class="priceCart">
                            <b>${element.price}</b>
                            <button>Add To Cart</button>
                        </div>
                        <h3>${element.title}</h3>
                    </div>`
                //console.log(element);

            })
            productElement.innerHTML = productList
        })


}

let getCatergory = () => {
    fetch('https://dummyjson.com/products/categories')
        .then((res) => res.json())
        .then((finalResp) => {
            let catList = ''
            finalResp.forEach((element) => {
                // console.log(element);
                catList += `<li class = "${element.slug == currentSlug ? 'activeCat' : ''}" data-slug=${element.slug}>${element.name}</li>`
            });
            categoryListElement.innerHTML = catList;
        })
}

categoryListElement.addEventListener('click', (e) => {
    if (e.target.tagName == "LI") {
        currentSlug = e.target.getAttribute('data-slug')
        getProducts(currentSlug)
        getCatergory()
    }
})
getCatergory()
getProducts()