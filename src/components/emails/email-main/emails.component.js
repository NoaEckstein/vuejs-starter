// import emailPrev from '../email-preview/email-preview.vue'
import emailList from '../email-list/email-list.vue'
import emailcompose from '../email-compose/email-compose.vue';
import emaildetails from '../email-details/email-details.vue';
import emailstatus from '../email-status/email-status.vue';



export default {


  data: () => {

    return {
      name: 'avital'
    }
  },

  components: {
    'email-preview': emailPrev,
    'email-list': emailList,
    emailcompose,   emaildetails,
    emailstatus

  }
}
  