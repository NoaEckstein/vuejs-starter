export default {
        data() {
            return {
                car: null
            }
        },
        methods: {
            nextCar(){
                const nextId = this.car.id+1;
                this.$router.push(`/car/${nextId}`);
                this.loadCar(this.car.id+1);
            },
            loadCar(carId) {
                this.$http.get(`item/${carId}`)
                    .then(res => res.json())
                    .then(car => this.car = car);
            }
        },
        created() {
            // console.log('this.$route.params', this.$route.params);
             const carId = this.$route.params.id
             this.loadCar(carId);
             
        }
      

    }