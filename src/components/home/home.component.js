export default {
  data: () => {
    return {
      items: []
    }
  },
  methods: {

    reloadCars() {
      // fetch('http://localhost:3003/item')
      this.$http.get('item')
        .then(res => res.json())
        .then(cars => this.cars = cars);
      this.carToEdit = undefined;
      this.showCarEdit = false;
      console.log('hi!');
      

    }
  },
  created() {
    this.reloadCars();

  }
}