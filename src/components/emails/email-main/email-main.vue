  <template src="./emails.component.html">

  </template>
  
  
  
  
  
    <!--<template src="./emails.component.html">
  <div>
    
    <email-list @SelectedEmail="selectemail"> </email-list>
    <email-details :selectedEmail="selectedEmail"></email-details>

  </div>
</template>

<script src="./emails.component.js">

import EmailList from './components/emails/email-list.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Avital Vue Email App',
      emails: [
              { id: 1, subject: 'Vue What are Components?', body: 'Components are one of the most powerful features of Vue. They help you extend basic HTML elements to encapsulate reusable code.', 
              isRead: false},
              {id: 2, subject: 'Vue Using Components?', body: 'We’ve learned in the previous sections that we can create a new Vue instance with', 
              isRead: false}, 
              {id: 3, subject: 'Vue Composing Components', body: 'Components are meant to be used together, most commonly in parent-child relationships: component A may use component B in its own template', 
              isRead: false},
              {id: 4, subject: 'Vue Passing Data with Props', body: 'Every component instance has its own isolated scope. This means you cannot (and should not) directly reference parent data in a child component’s template. Data can be passed down to child components using props.', 
              isRead: false}
              ],
          selectedEmail: {}
    }
  },
  methods: {
    selectEmail(currEmail){
        this.selectedEmail = currEmail;
        this.selectedEmail.isRead= true;
  }

     },
  components: {
    'enail-list': EmailList
  }

}


</script>

<style src="./emails.component.scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>-->
