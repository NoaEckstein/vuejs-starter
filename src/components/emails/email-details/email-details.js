
    export default {
        props:['email'],
        data() {
            return {
                // currEmail: {subject: ':-P', body: ':-)  '}
             
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

            }
        },
       
    
    }


