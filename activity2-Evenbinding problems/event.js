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

        alert_mode(event){
            event.preventDefault();
             alert('thank you for alerting me!');
         },

        confirminput1(){
            this.confirmedname=this.name;
        },
        confirminput2(){
            this.confirmedname2=this.name;
        },
        setname(event){
            //by pressing the keydown 
            this.name=event.target.value ;
        },
        setname2(event){
            //by pressing the enter
            this.name=event.target.value;
        },
       
    }
});
app.mount("#assignment");