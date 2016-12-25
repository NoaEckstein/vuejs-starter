 
import emailcompose from '../email-compose/email-compose.vue';
import emaildetails from '../email-details/email-details.vue';
import emailstatus from '../email-status/email-status.vue';


export default  {
  data: () => {
    return {
      name: 'avital'
      
    }
  },
  components:{
    emailcompose,
    emaildetails,
    emailstatus
  }
}