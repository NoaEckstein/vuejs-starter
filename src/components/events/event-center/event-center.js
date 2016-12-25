import EventList from '../event-list'

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
    }
  },
  created() {
    this.reloadEvents();
  },
  components: {
    'event-list': EventList
  }
}