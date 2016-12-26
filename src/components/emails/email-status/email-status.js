export default {
    props: ['emails'],
    data() {
        return {
            readPrecentage:0
        }
    },
    methods: {

    },
    watch: {
        emails() {
            var isReadCount = 0;
            this.emails.forEach(function(currEmail) {
                // console.log('currEmail', currEmail);
                if (currEmail.isRead) {
                    isReadCount++;
                }
            });
            this.readPrecentage = isReadCount*100/this.emails.length;
            console.log('isReadCount', isReadCount);
            
        }
    },
    mounted(){
        console.log('checking stuff',this.emails);
        
    }



}