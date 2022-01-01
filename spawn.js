class spawn {
    constructor(type = "egg", metabolism = 0, boredom = 0, evotime = 100, age = 0, hungry = 100, happy = 100, ill = false, reincarnations = 0) {
      //creates a new creature, allowing for previous stats to be passed to next evolution if need be
      //by default will create an egg with full stats that never decrease.
      this.type = type;
      this.hungerDec = metabolism;
      this.happyDec = boredom;
      this.age = age;
      this.hungry = hungry;
      this.happy = happy;
      this.ill = ill;
      //this.ill = true;
      this.timetillevo = evotime;
      this.incarnation = reincarnations + 1;
      this.poo = 0;
      console.log(this.incarnation);
    }
    decVals() {
      if (Math.random() < 0.05*this.happyDec) {
        this.hungry -= 1;
      }
      if (Math.random() < 0.05*this.hungerDec) {
        if (this.ill == true) {
          this.happy -= 5;
        }
        this.happy -= 1;
      }
      if (Math.random() < 0.00025 * (this.poo + 1)) {
        this.ill = true;
      }
      if (Math.random() < 0.001) {
        this.poo++;
      }
      this.age = this.age + 0.1;
      if (this.hungry <= 0) {
        this.hungry = 0;
        this.type = "dead";
        this.hungerDec = 0;
        this.happyDec = 0;
      }
      if (this.happy <= 0) {
        this.happy = 0;
        this.type = "dead";
        this.hungerDec = 0;
        this.happyDec = 0;
      }
      if (this.age > this.evotime) {
        evolve();
      }
      console.log("hungry: " + this.hungry);
      console.log("happy: " + this.happy);
      console.log("age: " + this.age);
    }

    eat() {
      if (this.hungry >= 100) {
        this.hungry = 100
        //full animation
      }
      else {
        if (this.hungry + 25 < 100) {
          this.hungry += 25;
        }
        else 
        {
          this.hungry = 100
        }
      }
    }
    cure() {
      if (this.ill == true) {
        healsuccess.play();
        this.ill = false;
      }
      else {
        //this sfx isnt that great, replace asap
        healfail.play();
        this.happy -= 20;
      }
    }
    fun() {
      if (this.happy >= 100) {
        this.happy = 100;
        //full animation
      }
      else {
        if (this.happy + 25 < 100) {
          this.happy += 25;
        }
        else 
        {
          this.happy = 100
        }
      }
    }
    clean() {
      this.poo = 0;
    }
    gethungry() {
      return this.hungry
    }
    gethappy() {
      return this.happy
    }
    gettype() {
      return this.type
    }
    getill() {
      return this.ill
    }
    getpoo() {
      return this.poo
    }
    evolve() {

    }
  }