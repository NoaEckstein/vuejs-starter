
// import emailPrev from '../email-preview/email-preview.vue'
import emailCompose from '../email-compose/email-compose.vue';
import emailDetails from '../email-details/email-details.vue';
import emailStatus from '../email-status/email-status.vue';
import emailList from '../email-list/email-list.vue';

export default {

    data: () => {
        return {
            emails: [],
            emailsFilter: '',
            selectedEmail: {}
        }
    },
    methods: {
        deleteEmail(deleteId) {
            console.log('Deleting Email: ', deleteId);
            this.emails = this.emails.filter(email => email.id !== deleteId);
            this.$http.delete(`email/${deleteId}`);
        },
        selectEmail(email) {
            this.selectedEmail = email;
            this.selectedEmail.isRead = true;
            this.$http.put(`email`, this.selectedEmail).then(handleResult);
            this.reloadEmails();
            //added from cars and adjusted:


            function handleResult(res) {
                console.log('putting!!!', res);

                //     res.json()
                //    .then(res => {
                //            console.log("Result from server", res);
                //         //    that.$emit('done')
                //         this.dataSaved = true;
                //         this.$router.push('/car');
                //        }) 
            }



            // console.log('Selecting ', emailId);
            // this.emails.forEach(email => {
            //     if (email.id === emailId)   email.isSelected = !email.isSelected;
            //     else                    email.isSelected = false;
            // });
            // this.$router.push(`/email/${email}`);
        },
        reloadEmails() {
            // fetch('http://localhost:3003/item')
            this.$http.get('email')
                .then(res => res.json())
                .then(emails => {
                    this.emails = emails;
                    this.selectedEmail = this.emails[0];
                    console.log('reloadEmails', this.emails);
                });
            this.emailToEdit = undefined;
            this.showEmailEdit = false;

        }
    },
    computed: {
        emailsToDisplay() {
            console.log('emailsToDisplay', this.emails);
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
