export default {
  data: () => {
    return {
      events: []
    }
  },
  methods: {
    reloadEvents() {
      console.log('events');
      this.$http.get('event')
        .then(res => res.json())
        .then(events => this.events = events);
      // this.carToEdit = undefined;
      // this.showCarEdit = false;
    }
  },
     created() {
           this.reloadEvents();
            
       }
}
