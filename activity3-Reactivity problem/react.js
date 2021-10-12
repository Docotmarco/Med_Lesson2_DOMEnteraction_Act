var app=Vue.createApp({
    data(){
      return{
        // tomuch:'Too much',
        // notmuch:'Not there yet',  
        counter:0,
        // result:'Result'
      }
    },
    
    methods:{
      add(num){
        this.counter=this.counter+num;
         },
     },
     watch:{
     counter(value){
       
        if(value >37 || value <1){
         
         const val= this;
         setTimeout(function() {val.counter=0;},5000);
        }else{
           return 0;
        }
      }
     },
    computed:{
      output(){  

        if(this.counter>37){
          return 'Too much!';
        }
        else if(this.counter  < 37 && this.counter >0){
          return 'Not there yet!';
        }
       
        else if(this.counter===37){
         return this.counter;
        } 
         else{
          return 0;
        }
      }
      
    }
    });
    app.mount('.header');
     