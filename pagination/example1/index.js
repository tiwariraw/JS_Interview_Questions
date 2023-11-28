const cardsContainer = document.querySelector('.cards-container');
const loadMoreBtn = document.querySelector('.load-more-btn');

const fetchData = async (postPerPage, skip) => {
    const data = await fetch(`https://dummyjson.com/products?limit=${postPerPage}&skip=${skip}`);
    const json = await data.json();
    console.log(json);

    json?.products?.forEach(product => {
        cardsContainer.innerHTML += `
        <div class="card">
                <img src="${product?.thumbnail}" alt="products-pic-${product?.id}">
                <h3 class="title">${product?.title}</h3>
                <h2 class="price">$${product?.price}</h2>
        </div>
        `
    })
}

fetchData(4, 0);

loadMoreBtn.addEventListener('click', (e) => {
    let page = 2;

    let l = 4;
    let s = (page - 1) * l;

    fetchData(l, s);

    page++;
});

/* Ref:
    1. https://www.youtube.com/watch?v=Ynp6Gdd3XVE
    2. 
    3. https://www.youtube.com/watch?v=Ejdir7bwCpk (pagination design only)
*/