export default {
    props: ['emails'],
    data() {
        return {

        }
    },
    methods: {

    },
    watch: {
        emails() {
            console.log('readPrecentageCalc');
            var isReadCount = 0;
            this.emails.forEach(function(currEmail) {
                // console.log('currEmail', currEmail);
                if (currEmail.isRead) {
                    isReadCount++;
                }
            });
            console.log('isReadCount', isReadCount);
            
        }
    },
    mounted(){
        console.log('checking stuff',this.emails);
        
    }



}