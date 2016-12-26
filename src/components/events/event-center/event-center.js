import EventList from '../event-list'
import EventsFilter from '../events-filter'

export default {
  data: () => {
    return {
      events: [],
      eventsFilter: { name: '' }
    }
  },
  methods: {
    selectEvent(eventId) {
      console.log('Selecting ', eventId);
      // this.events.forEach(event => {
      //     if (event.id === eventId)   event.isSelected = !event.isSelected;
      //     else                    event.isSelected = false;
      // });
      
      // this.$router.push(`/event/${eventId}`);
    },

    reloadEvents() {
      console.log('events');
      this.$http.get('event')
        .then(res => res.json())
        .then(events => this.events = events);
    }
  },
  computed: {
    eventsToDisplay() {
      return this.events.filter(event => {
        return event.name.includes(this.eventsFilter.name);
      })
    }
  },
  created() {
    this.reloadEvents();
  },
  components: {
    'event-list': EventList,
    'events-filter': EventsFilter
  }
}