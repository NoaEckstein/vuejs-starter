<template>
    <section>
        <h1>Email List</h1>
        
         <ul>
            <li v-for="(currEmail, idx) in emails">
                <email-preview :email="currEmail"
                             @click.native="$emit('SelectedEmail',currEmail)">
                    
                </email-preview>
            </li>
            
        </ul>
    </section>
</template>

<script>
   
    export default {
      
        data(){
            return {
            }
        },
        methods: {
            
           
        },
        components: {
         
        }
    

    }

</script>

<style scoped>

</style>