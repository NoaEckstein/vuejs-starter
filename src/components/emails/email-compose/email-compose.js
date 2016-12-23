export default {
        data() {
            return {
                email: {subject: '', body: ''},
                dataSaved: false,
            }
        },
        computed:{
            emailCompose() {
                let obj = Object.assign({}, this.email);
                return obj;
            }
        },
       
        methods: {
            save() {
                let that = this;
                function handleResult(res) {
                    res.json()
                   .then(res => {
                           console.log("Result from server", res);
                        //    that.$emit('done')
                        this.dataSaved = true;
                        this.$router.push('/email');
                       }) 
                }

                console.log('Saving', this.emailCompose);
                if (this.email.id)  this.$http.put(`email`, this.emailCompose).then(handleResult);
                else this.$http.post('email', this.emailCompose).then(handleResult);
                
            },
             loadEmail(emailId) {
                this.$http.get(`email/${emailId}`)
                    .then(res => res.json())
                    .then(email => this.email = email);
            }
        },
       
        created() {
             const emailId = this.$route.params.id
             if (emailId)    this.loadEmail(emailId);
        },
        beforeRouteLeave(to, from, next) {
            if (this.dataSaved) return next();
            if (this.email.subject  === this.emailCompose.subject && 
                this.email.body === this.emailCompose.body) return next();

            const ans = confirm('Change will not save!');
            if (ans)        next();
            else            next(false)
            
        }
       
    
    }