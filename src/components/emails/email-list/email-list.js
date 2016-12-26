

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
        components: {
            'email-preview' : emailPrev
        }


    }

