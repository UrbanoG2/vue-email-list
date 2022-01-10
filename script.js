var app = new Vue({
    el: '#app',
    data: {
        emails:[],
    },

    created() {


        //ciclo 10 volte 
        for (let i = 0; i < 10; i++) {

            axios

            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((response) => {

                //creo variabile d'appoggio che mi va a prendere ciò che mi interessa all'interno del response
                let mail = response.data;      

                console.log(mail.response);


                //pusho nel mio array vuoto nei data, le mail che ho ottenuto
                this.emails.push(mail.response)
                    
            })
    
            .catch((error) => {
                    console.log(error);
             });
    
        }

        
    },

    methods: {

    },
})