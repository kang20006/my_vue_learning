console.log('hello,vue')


const app=Vue.createApp({
    //root component
    // data,functions,template
    // template: '<h2> I am the template </h2>'
    //it is advice to put the template in html file
    //create a function and return an object
    data(){
        return {
            //no matter what type of variable type
            showbooktitle: true,
            title: 'The Final Empire',
            author: 'Sio',
            age:'45',
        }
    },

    methods:{
        changeTitle(){
            console.log('you click me')
            // this access the component in data
            this.title='Words of Randiance'
        },
        changeTitle1(title){
            // this access the component in data
            // title from arguement
            this.title=title
        },
        toggleShowBooks(){
            this.showbooktitle= !this.showbooktitle

        }
    }
})

// mount app in element with id app
app.mount('#app')









