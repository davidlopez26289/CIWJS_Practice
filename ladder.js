let ladder = {
    step = 0,
    max = 5,
    up(){
        if(this.step !== this.max){
            this.step++;
        } else{
            alert("max height is reached");
        }
    },

    down(){
        return this.step--;
    },

    showStep: function(){
        console.log(this.step);
    },
};

ladder.height(5)
ladder.up().up().down().showStep();