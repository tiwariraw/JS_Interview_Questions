/** Ice-Cream **/
// https://www.youtube.com/watch?v=ZYb_ZU8LNxs

/*
Place order        (2 sec)
Chop the fruit     (2 sec)
Add water and ice  (1 sec)
Start the machine  (1 sec)
Select container   (2 sec)
Select toppings    (3 sec)
Serve ice cream    (2 sec)
*/

let stocks = {
    fruits: ['strawberry', 'grapes', 'banana', 'apple'],
    liquids: ['water', 'ice'],
    holder: ['cone', 'cup', 'stick'],
    toppings: ['chocolate', 'peanuts']
}

/***using callback (which leads to callback-hell)***/
const order1 = (fruit_index, call_production) => {
    setTimeout(() => {
        console.log(`${stocks.fruits[fruit_index]} selected`);
        call_production();
    }, 2000);
}

const production = () => {
    console.log('production has started');

    setTimeout(() => {
        console.log('The fruit has been choped');

        setTimeout(() => {
            console.log(`${stocks.liquids[0]} and ${stocks.liquids[1]} was added`);

            setTimeout(() => {
                console.log('Machine started');

                setTimeout(() => {
                    console.log(`${stocks.holder[0]} selected`);

                    setTimeout(() => {
                        console.log(`${stocks.toppings[0]} topping is selected`);

                        setTimeout(() => {
                            console.log('Serve ice-cream');
                        }, 2000);
                    }, 3000);
                }, 2000);
            }, 1000);
        }, 1000);

    }, 2000);
}

order1(0, production);


/***using promise***/
let isShopOpen = true;

const order = (task, time) => {
    return new Promise((resolve, reject) => {
        if (isShopOpen) {
            setTimeout(() => {
                resolve(task());
            }, time);
        } else {
            console.log();
            reject(new Error('Sorry, the shop is closed.'));
        }
    });
}

order(() => {
    console.log(`${stocks.fruits[0]} was selected`);
}, 2000)
    .then(() => {
        return order(() => console.log('Production has started'), 0);
    })
    .then(() => {
        return order(() => console.log('The fruit has been choped'), 2000)
    })
    .then(() => {
        return order(() => console.log(`Adding ${stocks.liquids[0]} and ${stocks.liquids[1]}`), 1000)
    })
    .then(() => {
        return order(() => console.log('Machine started'), 1000)
    })
    .then(() => {
        return order(() => console.log(`${stocks.holder[0]} selected`), 2000)
    })
    .then(() => {
        return order(() => console.log(`${stocks.toppings[0]} topping selected`), 3000)
    })
    .then(() => {
        return order(() => console.log('Serve ice-cream'), 2000)
    })
    .catch((err) => {
        console.log(err.message);
    })
    .finally(() => console.log('End of the day. Go home and enjoy'))


/***using async/await***/
const order2 = async (task, time) => {
    return new Promise((resolve, reject) => {
        if (isShopOpen) {
            setTimeout(() => {
                resolve(task());
            }, time);
        } else {
            console.log();
            reject(new Error('Sorry, the shop is closed.'));
        }
    });
}

async function f1() {
    try {
        const value1 = await order2(() => `${stocks.fruits[0]} was selected`, 2000);
        console.log(value1);

        const value2 = await order2(() => 'Production has started', 0);
        console.log(value2);

        const value3 = await order2(() => `Adding ${stocks.liquids[0]} and ${stocks.liquids[1]}`, 1000)
        console.log(value3);

        const value4 = await order2(() => 'Machine started', 1000)
        console.log(value4);

        const value5 = await order2(() => `${stocks.holder[0]} selected`, 2000)
        console.log(value5);

        const value6 = await order2(() => `${stocks.toppings[0]} topping selected`, 3000)
        console.log(value6);

        const value7 = await order2(() => 'Serve ice-cream', 2000)
        console.log(value7);
    }
    catch (err) {
        console.log(err.message);
    }
    finally {
        console.log('End of the day. Go home and enjoy');
    }

}

f1();
