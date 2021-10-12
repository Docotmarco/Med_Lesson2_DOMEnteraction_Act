const app= Vue.createApp({
    data(){
        return{
            name:'Marco',
            age: 20,
            addage:'YOUR AGE IN 5 YEARS',
            randumNUmber:'Favorate number:RANDOM NUMBERS BETWIN ZERO IN 1',
            img_link:'https://source.unsplash.com/random'
        }
    },
    methods:{
        add_addrandum(){
          const randum=Math.random();
            if(randum < 0.1){
               return randum;
            }
            else {
              return this.randumNUmber;
            }
        },
        add_age(){
          const randum=Math.random();
            if(randum < 0.1){
              return this.addage;
            }
            else {
              return this.age+5;
            }
        },
        set_name(event){
         
          
            this.name=event.target.value;
          
           
        }
     }
});app.mount('#id_section');