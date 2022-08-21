Vue.createApp({ 
    date() {
        return {
            message: "Hello",
        }
    }, 
    methods: {
        changeMessage: function() {
            this.message = "Namasute"
        },
    },
}).mount("#app")
