    const app = {
        data() {
            return {
                msg: 'Hello & Welcome, Vue3',
                photos: [{
                        src: 'images/1.jpg',
                        title: 'Autumn',
                        favor: false,
                        like: 0
                    },
                    {
                        src: 'images/2.jpg',
                        title: 'Hug & Love',
                        favor: true,
                        like: 2
                    },
                    {
                        src: 'images/3.jpg',
                        title: 'Good Night',
                        favor: true,
                        like: 6
                    },
                    {
                        src: 'images/4.jpg',
                        title: 'Architecture',
                        favor: true,
                        like: 1

                    },
                    {
                        src: 'images/5.jpg',
                        title: 'HarryPotter',
                        favor: false,
                        like: 0
                    },
                    {
                        src: 'images/6.jpg',
                        title: 'Building',
                        favor: false,
                        like: 0
                    },
                    {
                        src: 'images/7.jpg',
                        title: 'Mountain',
                        favor: false,
                        like: 0
                    },
                    {
                        src: 'images/8.jpg',
                        title: 'Oxygen',
                        favor: true,
                        like: 1
                    },
                    {
                        src: 'images/9.jpg',
                        title: 'Road',
                        favor: false,
                        like: 0
                    },
                    {
                        src: 'images/10.jpg',
                        title: 'Light',
                        favor: true,
                        like: 2
                    }
                    

                ],methods: {
                    favorite(index){
                        this.favorite[index].favor =! this.favorite[index].favor
                    }
                    
                }
               

            }
        }
      
    }
    mountedApp = Vue.createApp(app).mount('#app')