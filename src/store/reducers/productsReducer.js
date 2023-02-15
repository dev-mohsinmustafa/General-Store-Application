const initState = {
    products:  [
        {id: 1 , name: 'man t-shirt and trouser summer season' , image: 'item 6.webp' , price: 20,discount:2,discountPrice: 20 - 2/ 100 * 20,quantity:1,desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis reprehenderit nobis eligendi, dignissimos accusamus necessitatibus corporis laudantium facere ad sed molestiae eveniet aliquid maiores in quos deleniti, at commodi? Eveniet."},
        {id: 2 , name: 'man pent court' , image: '2.webp' , price: 30,discount:5,discountPrice: 30 - 5/ 100 * 30,quantity:1,desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis reprehenderit nobis eligendi, dignissimos accusamus necessitatibus corporis laudantium facere ad sed molestiae eveniet aliquid maiores in quos deleniti, at commodi? Eveniet."},
        {id: 3 , name: 'jacket for men' , image: '3.jpg' , price: 20,discount:2,discountPrice: 20 - 2/ 100 * 20,quantity:1,desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis reprehenderit nobis eligendi, dignissimos accusamus necessitatibus corporis laudantium facere ad sed molestiae eveniet aliquid maiores in quos deleniti, at commodi? Eveniet."},
        {id: 4 , name: 'man slippers' , image: 'item 4.webp' , price: 20,discount:2,discountPrice: 20 - 2/ 100 * 20,quantity:1,desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis reprehenderit nobis eligendi, dignissimos accusamus necessitatibus corporis laudantium facere ad sed molestiae eveniet aliquid maiores in quos deleniti, at commodi? Eveniet."},
        {id: 5 , name: 'man t-shirt ' , image: 'item 5.webp' , price: 20,discount:2,discountPrice: 20 - 2/ 100 * 20,quantity:1,desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis reprehenderit nobis eligendi, dignissimos accusamus necessitatibus corporis laudantium facere ad sed molestiae eveniet aliquid maiores in quos deleniti, at commodi? Eveniet."},
        {id: 6 , name: 'man trouser kacha' , image: '6.jpg' , price: 20,discount:2,discountPrice: 20 - 2/ 100 * 20,quantity:1,desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis reprehenderit nobis eligendi, dignissimos accusamus necessitatibus corporis laudantium facere ad sed molestiae eveniet aliquid maiores in quos deleniti, at commodi? Eveniet."},
        {id: 7 , name: 'man shoes' , image: 'item 1.webp' , price: 20,discount:2,discountPrice: 20 - 2/ 100 * 20,quantity:1,desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis reprehenderit nobis eligendi, dignissimos accusamus necessitatibus corporis laudantium facere ad sed molestiae eveniet aliquid maiores in quos deleniti, at commodi? Eveniet."},
        {id: 8 , name: ' touch watch' , image: '8.jpg' , price: 20,discount:2,discountPrice: 20 - 2/ 100 * 20,quantity:1,desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis reprehenderit nobis eligendi, dignissimos accusamus necessitatibus corporis laudantium facere ad sed molestiae eveniet aliquid maiores in quos deleniti, at commodi? Eveniet."},
        {id: 9 , name: 'air buds' , image: '9.jpg' , price: 20,discount:2,discountPrice: 20 - 2/ 100 * 20,quantity:1,desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis reprehenderit nobis eligendi, dignissimos accusamus necessitatibus corporis laudantium facere ad sed molestiae eveniet aliquid maiores in quos deleniti, at commodi? Eveniet."},
        {id: 10 , name: 'violet' , image: '10.jpg' , price: 20,discount:2,discountPrice: 20 - 2/ 100 * 20,quantity:1,desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis reprehenderit nobis eligendi, dignissimos accusamus necessitatibus corporis laudantium facere ad sed molestiae eveniet aliquid maiores in quos deleniti, at commodi? Eveniet."},
        {id: 11 , name: 'HandFree' , image: '11.jpg' , price: 20,discount:2,discountPrice: 20 - 2/ 100 * 20,quantity:1,desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis reprehenderit nobis eligendi, dignissimos accusamus necessitatibus corporis laudantium facere ad sed molestiae eveniet aliquid maiores in quos deleniti, at commodi? Eveniet."},
        {id: 12 , name: 'PowerBank' , image: '12.jpeg' , price: 20,discount:2,discountPrice: 20 - 2/ 100 * 20,quantity:1,desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis reprehenderit nobis eligendi, dignissimos accusamus necessitatibus corporis laudantium facere ad sed molestiae eveniet aliquid maiores in quos deleniti, at commodi? Eveniet."},
    ]
}
const productsReducer = (state = initState,action) => {
switch (action.type) {
 

    default:
        return state;
}
}
export default productsReducer   