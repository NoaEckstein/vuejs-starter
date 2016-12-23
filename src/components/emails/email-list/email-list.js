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
                // emails: [
                //     {name: 'wowmotherfuckaaa', id: 1}
                // ]
               
            }
        },
        methods: {
           propegateDeleteReq(deleteReq) {
               this.$emit('doDelete', deleteReq)
           }
        },
        components: {
            'email-preview' : emailPrev
        }
    

    }