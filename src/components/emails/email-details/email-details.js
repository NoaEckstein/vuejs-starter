
    export default {
        props:['email'],
        data() {
            return {
            }
        },
        methods: {
            // do i need next email function?
            // nextEmail(){
            //     const nextId = this.email.id+1;
            //     this.$router.push(`/email/${nextId}`);
            //     this.loadEmail(this.email.id+1);
            // },

            
            loadEmail(emailId) {
                console.log('email-details');

                this.$http.get(`email/${emailId}`)
                    .then(res => res.json())
                    .then(email => this.email = email);
            },
            deleteEmail(emailId){
                this.$emit('doDelete', {emailId:this.email.id})


                /*
                deleteCar() {
                this.$emit('doDelete', {carId: this.car.id, timestamp: Date.now()});

            },
            editEmail() {
                this.$emit('doEdit', this.email);
            },*/
            }
        },
       
    
    }


