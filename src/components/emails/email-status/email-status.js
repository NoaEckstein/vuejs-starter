export default {
    props: ['emails'],
    data() {
        return {

        }
    },
    methods: {

    },
    computed: {
        readPrecentageCalc() {
            console.log('readPrecentageCalc');
            var isReadCount = 0;
            this.emails.forEach(function(currEmail) {
                if (currEmail.isRead) {
                    isReadCount++;
                }else{
                    isRead;
                }
            });
            console.log('isReadCount', isReadCount);
            
        }
    },
    mounted(){
        console.log('checking stuff',this.emails);
        
    }



}