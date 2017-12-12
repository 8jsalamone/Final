function Device(t,ma,c){

    //Instance Variables
    this.state= "off";
    this.type = t;
    this.milliamps= ma;
    this.capacity=c;
    this.juice=1
    this.rate = [0.0015,0.0235,0.23];

    //Instance Functions
    this.power = function(){
        return this.juice
    }

    this.off = function(){
        if(this.state == "active" || this.state == "idle" || this.juice <= 0)
        this.state = "off";
    };

    this.on = function(){
        if(this.state == "off" && this.juice >0){
            this.state = "idle";
        }
    };

    this.wake = function(){
        if(this.state == "off" || this.state == "idle"){
            this.state == "active"
        }
    };

    this.use = function(min){
        let time = min / 60;

        if(this.state == "off"){
            let juice = juice - this.rate[0];
        }
        else if(this.state=="idle"){
            let juice = juice - this.rate[1];
        }
        else if(this.state == "active"){
            let juice = juice - this.rate[2];
        }
    }

    this.charge = function(min){
        //adds more electricity to the device's juice depending on its state
        let time = min / 60;
        let charge = (this.millAmps / this.capacity);
        if(this.state == "off"){
            let output = 1 - this.rate[0];
        }
        else if(this.state=="idle"){
            let output = 1 - this.rate[1];
        }
        else if(this.state == "active"){
            let output = 1 - this.rate[2];
        }
        this.juice = this.juice + charge*output*time;
        //resets juice to 1 if it has exceeded 1
        if(this.juice > 1){
            this.juice = 1
        }
    };


}//end of the device declaration
function ChargingDock(){

    this.ports = [undefined, undefined, undefined,undefined,undefined,undefined,undefined,undefined] //finish from instructions
    this.leds = ["red","red","red","red","red","red","red","red",]

    this.plug = function(dvc){
        for(let s = 0; s < this.ports.length; s++){
            if (this.leds[s] == "red"){
                this.port[s] = dvc;
                this.leds[s] = "yellow";
                break
            }
        }
    };

    this.unplug = function(dvcIdx){
        if(this.leds[dvcIdx]  == "yellow" || this.leds[dvcIdx] == green){
            let temp = this.ports[dvcIdx];
            this.ports[dvcIdx] = undefined
            this.leds[dvcIdx] = "red"
            return temp
        }
    };

    this.chargeAll = function(min){
        for(let s = 0; s < this.ports.length; s++){
            if(this.leds[s] == "yellow" || "green"){
                this.ports[s].charge(min);
            }
            if(this.ports[s].juice >= .99){
                this.leds[s] = "green";
            }
        }
    };
}


function main(){
    let flemphone = new Device("phone",3000,10000);
   console.log(flemphone.power());
   flemphone.on();
   flemphone.wake();
   flemphone.use(90);
   console.log(flemphone.power());
   flemphone.sleep();
   flemphone.use(300);
   console.log(flemphone.power());
   flemphone.off();
   flemphone.use(300);
   console.log(flemphone.power());
   flemphone.charge(60);
   console.log(flemphone.power());
   flemphone.charge(1000);
   console.log(flemphone.power());
}

//runs the main code
main();
