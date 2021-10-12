let app = new Vue({
    el: '#my_app',
    data:{
        user: '',
        user1: false,
        user2: false,
        active: true,
        color:'',
        activeColor: '',
    },

    methods:{
        user_input(event){
            this.user = event.target.value;

            if(this.user === 'user1'){
                this.user1 = !this.user1;
            }else if(this.user ==='user2'){
                this.user2 = !this.user2;
            }else{
                this.user1 = ''
                this.user2 = ''
            }
        },
        btn_Toggle(){
            this.active = !this.active;
        },

        input_Color(event){
           this.color = event.target.value;
           if(this.color === 'red'){
               this.activeColor = this.color;
           }else if(this.color === 'blue'){
               this.activeColor = this.color
           }else if(this.color ==='yellow'){
               this.activeColor = this.color;
           }else if(this.color==='violet'){
               this.activeColor=this.color;
           }else if(this.color==='purple'){
               this.activeColor=this.color;
           }else if(this.color==='pink'){
               this.activeColor=this.color;
           }else if(this.color==='green'){
               this.activeColor=this.color;
           }else if(this.color==='skyblue'){
            this.activeColor=this.color;
           }else if(this.color==='white'){
            this.activeColor=this.color;
           }else if(this.color==='orange'){
            this.activeColor=this.color;
           }else if(this.color==='brown'){
            this.activeColor=this.color;
           }else if(this.color==='black'){
            this.activeColor=this.color;
           }else if(this.color==='gray'){
            this.activeColor=this.color;
           }
           else{
               this.activeColor = ''
           }
        }
       
    },
   
});

