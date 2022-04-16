const app = Vue.createApp({
    data() {
        return {
            url: "www.google.com",
            showBooks: true,
            books: [
                {
                    title: 'name',
                    author: 'najib',
                    img: 'assets/1.jpeg',
                    isFav: true
                },
                {
                    title: 'nooo',
                    author: 'mahathir',
                    img: 'assets/2.jpeg',
                    isFav: false
                },
                {
                    title: 'yessss',
                    author: 'lim',
                    img: 'assets/3.jpeg',
                    isFav: true
                },
            ]

        }
    },
    methods: {
        handleEvent(e, data) {
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleFav(book){
            book.isFav= !book.isFav
        }
    },
    // computed propertise
    // return can be access in the template
    // depend on the data
    computed:{
        filteredBooks(){
            return 'hello'
        },
        filteredBooks2(){
            // return new filtered array
            // if isfav true then add to array
            return this.books.filter((book)=>book.isFav)
        }
    }
})

app.mount('#app')