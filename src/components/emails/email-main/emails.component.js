
import emailCompose from '../email-compose/email-compose.vue';
import emailDetails from '../email-details/email-details.vue';
import emailStatus from '../email-status/email-status.vue';
import emailList from '../email-list/email-list.vue';



export default {
  data: () => {
    return {
      name: 'avital'

    }
  },
  methods: {
    deleteEmail(deleteReq) {
      console.log('Deleting Email: ', deleteReq.emailId, ' requested at: ', deleteReq.timestamp);
      this.emails = this.emails.filter(email => email.id !== deleteReq.emailId);
      this.$http.delete(`email/${deleteReq.emailId}`);
    },
   created() {
            console.log('this.$route.params', this.$route.params);
             const emailId = this.$route.params.id
             this.loadEmail(emailId);
             
        }  
  },
  components: {
    'email-compose': emailCompose,
    'email-details': emailDetails,
    'email-status': emailStatus,
    'email-list': emailList

  }
}