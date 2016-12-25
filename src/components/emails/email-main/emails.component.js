// import emailPrev from '../email-preview/email-preview.vue'
import emailList from '../email-list/email-list.vue'
import emailcompose from '../email-compose/email-compose.vue';
import emaildetails from '../email-details/email-details.vue';
import emailstatus from '../email-status/email-status.vue';



export default {


  data: () => {

    return {
      name: 'avital'
    }
  },
   methods: {
            selectCar(carId){
                // console.log('Selecting ', carId);
                // this.cars.forEach(car => {
                //     if (car.id === carId)   car.isSelected = !car.isSelected;
                //     else                    car.isSelected = false;
                // });
                this.$router.push(`/car/${carId}`);
            },
    deleteCar(deleteReq) {
                    console.log('Deleting Car: ', deleteReq.carId, ' requested at: ', deleteReq.timestamp);
                    this.cars = this.cars.filter(car => car.id !== deleteReq.carId);
                    this.$http.delete(`item/${deleteReq.carId}`);
            },
            
            reloadCars() {
                // fetch('http://localhost:3003/item')
                 this.$http.get('item')
                    .then(res => res.json())
                    .then(cars => this.cars = cars);
                 this.carToEdit = undefined;   
                 this.showCarEdit = false;

            }
        },
        computed:{
            carsToDisplay() {
                return this.cars.filter(car => {
                    return car.name.includes(this.carsFilter.name);
                })
            }
        },
       created() {
           this.reloadCars();
       },

  components: {
    'email-list': emailList,
    emailcompose,   emaildetails,
    emailstatus

  }
}
  