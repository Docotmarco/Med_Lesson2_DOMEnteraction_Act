let app= Vue.createApp({
    data:function(){
        return {
        name:'',
        confirmedname:'',
        confirmedname2:'',
        lastname:''
         }
    },
    methods:{
        confirminput1(){
            this.confirmedname=this.name;
        },
        confirminput2(){
            this.confirmedname2=this.name;
        },
        setname(event,lastname){
            this.name=event.target.value +' '+lastname;
        },
        setname2(event){
            this.name=event.target.value;
        },
        alert_mode(event){
           event.preventDefault();
            alert('thank you for alerting me!')
            
        }
    }
});
app.mount("#assignment");