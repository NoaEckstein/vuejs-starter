// import emailPrev from '../email-preview/email-preview.vue'
import emailList from '../email-list/email-list.vue'
import emailcompose from '../email-compose/email-compose.vue';

export default {


  data: () => {

    return {
      name: 'avital'
    }
  },

  components: {
    'email-preview': emailPrev,
    'email-list': emailList,
    emailcompose

  }
}
  