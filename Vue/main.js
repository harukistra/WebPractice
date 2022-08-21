Vue.createApp({
    data() {
        return {
            user: null,
        }
    }, 
    methods: {
        signIn() {
            this.user = {
                name: "geekTarou",
            }
        },
        signOut() {
            this.user = null
        },
    },
}).mount("#v-if-sign-in")


Vue.createApp({ 
    data() {
        return {
            animals: ["framingo", "gollira", "lion"] 
        }
    },
}).mount("#v-for")