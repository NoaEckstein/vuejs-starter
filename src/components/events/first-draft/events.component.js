export default {
  data: () => {
    return {
      events: [],
      filter: { name: '' }
    }
  },
  methods: {
    reloadEvents() {
      this.$http.get('event')
        .then(res => res.json())
        .then(events => this.events = events);
      // this.carToEdit = undefined;
      // this.showCarEdit = false;
    }
  },

  computed: {
    eventsToDisplay() {
      return this.events.filter(event => {
        return event.name.includes(this.filter.name);
      })
    }
  },
  created() {
    this.reloadEvents();

  }
}
