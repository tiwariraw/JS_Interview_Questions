// Q. The products array has three elements and each of them has six properties.
// 1. Create a function called rateProduct which rates the product.
// 2. Create a function called averageRating which calculate the average rating of a product.
// 3. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },

    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },

    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
];

// rate product
function rateProduct() {
    let count = 0;

    const userId = prompt('Enter your user id: ')
    const id = prompt('Enter the id of the product you want to rate: ');

    for (const product of products) {
        if (product._id === id) {
            const rate = +prompt('Enter your ratings: ');
            product.ratings.push({ userId: userId, rate: rate })
            count++;
        }
    }

    if (count === 0) {
        console.log('Product does not exist');
    }
}

// rateProduct();

console.log(products);

// average rating
function avgRating() {
    let count = 0;

    const id = prompt('Enter the id of the product you want the average rating of : ');

    for (const product of products) {
        if (product._id === id) {
            let sum = 0;

            if (product.ratings.length === 0) {
                return 'No ratings exist';
            }
            for (const el of product.ratings) {
                sum += el.rate;
            }

            count++;

            return sum / product.ratings.length;
        }
    }

    if (count === 0) {
        return 'Product does not exist';
    }
}

// console.log(`The average rating is: ${avgRating()}`);

// like product

function likeProduct() {
    let count = 0;

    const id = prompt('Enter the id of the product you want to like or dislike: ');
    const userId = prompt('Enter your userId: ');

    for (const product of products) {
        if (product._id === id) {
            if (product.likes.includes(userId)) {
                const index = product.likes.indexOf(userId);
                product.likes.splice(index, 1);
                return 'Disliked';
            } else {
                product.likes.push(userId);
                return 'Liked';
            }
            count++;
        }
    }

    if (count === 0) {
        return 'Product does not exist';
    }
}

console.log(likeProduct());
console.log(likeProduct());