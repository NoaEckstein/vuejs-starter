
// import emailPrev from '../email-preview/email-preview.vue'
import emailCompose from '../email-compose/email-compose.vue';
import emailDetails from '../email-details/email-details.vue';
import emailStatus from '../email-status/email-status.vue';
import emailList from '../email-list/email-list.vue';

export default {

    data: () => {
        return {
            name: 'avital',
            emails: [],
            emailsFilter:''
        }
    },
    methods: {
        deleteEmail(deleteReq) {
            console.log('Deleting Email: ', deleteReq.emailId, ' requested at: ', deleteReq.timestamp);
            this.emails = this.emails.filter(email => email.id !== deleteReq.emailId);
            this.$http.delete(`email/${deleteReq.emailId}`);
        },
    selectEmail(emailId) {
        // console.log('Selecting ', emailId);
        // this.emails.forEach(email => {
        //     if (email.id === emailId)   email.isSelected = !email.isSelected;
        //     else                    email.isSelected = false;
        // });
        this.$router.push(`/email/${emailId}`);
    },
    reloadEmails() {
        // fetch('http://localhost:3003/item')
        this.$http.get('email')
            .then(res => res.json())
            .then(emails => this.emails = emails);
        this.emailToEdit = undefined;
        this.showEmailEdit = false;
    }
},
computed: {
    emailsToDisplay() {
        return this.emails.filter(email => {
            return email.subject.includes(this.emailsFilter);
        })
    }
},
created() {
    // console.log('this.$route.params', this.$route.params);
    // const emailId = this.$route.params.id;
    this.reloadEmails();

},

components: {
    'email-compose': emailCompose,
    'email-details': emailDetails,
    'email-status': emailStatus,
    'email-list': emailList

  }
}
