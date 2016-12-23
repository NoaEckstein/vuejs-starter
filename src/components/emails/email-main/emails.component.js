import emailPrev from '../email-preview/email-preview.vue'
import emailList from '../email-list/email-list.vue'



export default  {


  data: () => {

    
    return {
         emails: [
                {name: 'wowmotherfuckaaa', id: 1}
                ]
               
      
    }
  },

  components: {
            'email-preview' : emailPrev,
            'email-list' : emailList

        }
  
}