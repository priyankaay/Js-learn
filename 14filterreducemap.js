const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (num) => {
    return num > 4
} )

const nums = []

myNums.forEach( (num) => {
    if (num > 4) {
        nums.push(num)
    }
} )

//difference between filter and for each is that filter function return array as per condition on which filer is applied


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1989, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
];
const res=books.filter((bk)=>{
    return bk.genre=='Non-Fiction'||bk.publish===1989;
})
console.log(res);


//////mAP
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const news = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(news);



///Reduce
// initially accumlator is 0



const my = [1, 2, 3]

const myTotal = my.reduce( (acc, currval)=> {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)

const myTot = my.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);

//reduce as two parameter =>one is callback functio and swxond is initial value of accumlator
