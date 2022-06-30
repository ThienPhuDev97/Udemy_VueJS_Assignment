const app = Vue.createApp({
    data() {
        return {
           valueInput: '',
           valueInput2: '' 
        };
    },
    methods: {
        showAlert() {
            alert('WellCome to  my Assignment')
        },
        getValueInput(event) {
            this.valueInput = event.target.value;
        },
        getValueInput2(event) {
            this.valueInput2 = event.target.value;
        },
        
    }
});
app.mount('#assignment')