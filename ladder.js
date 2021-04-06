let ladder = {
    up(){
        return this.a + 1;
    },

    down(){
        return this.b - 1;
    },

    showStep(){
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    }
};

ladder.up();
ladder.up();
ladder.down();
ladder.showStep();