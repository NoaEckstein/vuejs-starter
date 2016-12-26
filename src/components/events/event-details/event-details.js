export default {
  data: () => {
    return {
      event: null
    }
  },
  methods: {
    // loadEvent(eventId) {
    //   this.$http.get(`event/${Id}`)
    //     .then(res => res.json())
    //     .then(event => this.event = event);
    // }

    loadEvent(eventId) {
      this.$http.get(`event/${eventId}`)
        .then(res => res.json())
        .then(event => this.event = event);
    },
    decodeHtml(html) {
      var txt = document.createElement('textarea');
      txt.innerHTML = html;
      return txt.value;
    }
  },
  created() {
    const eventId = this.$route.params.id
    console.log('id: ', eventId);
    this.loadEvent(eventId)
    // this.loadCar(carId);
    // console.log('this.$route.params', this.$route.params.id);
    //  const eventId = this.$route.params.id
    //  this.loadEvent(eventId);

  }
}