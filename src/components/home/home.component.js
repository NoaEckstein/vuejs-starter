export default {
  data: () => {
    return {
      items: []
    }
  },
  methods: {

// When you unmark this reloadCars function it creates a bug in loading the page:

    // reloadCars() {
    //   // fetch('http://localhost:3003/item')
    //   this.$http.get('item')
    //     .then(res => res.json())
    //     .then(cars => this.cars = cars);
    //   this.carToEdit = undefined;
    //   this.showCarEdit = false;
    //   console.log('hi!');
      

    // }
  },
  created() {
    // this.reloadCars();

  }
}