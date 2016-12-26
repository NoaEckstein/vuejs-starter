

import emailPrev from '../email-preview/email-preview.vue'
// import emaildetails from '../email-details/email-details.vue'
    export default {
        props: {
            emails: {
                required: false,
                type: Array
            }
        },
        data(){
            return {
        
            }
        },
        methods:{
            selectingEmail(currEmail){
                console.log('email-list', currEmail);
                
                this.$emit('selectEmail',currEmail)
                
            }
        },
        components: {
            'email-preview' : emailPrev
        }


    }

