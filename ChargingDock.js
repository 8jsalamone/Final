const Device = require("./Device.js")

function ChargingDock(){

    this.ports = ["undefined", "undefined", "undefined","undefined","undefined","undefined","undefined","undefined"]; //finish from instructions
    this.leds = ["red","red","red","red","red","red","red","red"];

    this.plug = function(dvc){
        for(let s = 0; s < this.ports.length; s++){
            if (this.leds[s] == "red"){
                this.ports[s] = dvc;
                this.leds[s] = "yellow";
                break;
            }
        }
    };

    this.unplug = function(dvcIdx){
        if(this.leds[dvcIdx]  == "yellow" || this.leds[dvcIdx] == "green"){
            let temp = this.ports[dvcIdx];
            this.ports[dvcIdx] = undefined
            this.leds[dvcIdx] = "red"
            return temp
        }
    };

    this.chargeAll = function(min){
        for(let s = 0; s < this.ports.length; s++){
            if(this.leds[s] == "yellow" || this.leds[s] == "green"){
                this.ports[s].charge(min);
            }
            if(this.ports[s].juice >= 0.99){
                this.leds[s] = "green";
            }
        }
    };
}


function main(){
    let cd = new ChargingDock();

    let d1 = new Device("phone",3000,10000);
    let d2 = new Device("laptop",3000,15000);
    let d3 = new Device("laptop",5000,15000);
    let d4 = new Device("tablet",3000,15000);

    d1.use(90);
    d2.use(120);
    d3.use(90);
    d4.use(240);
    console.log(cd);
    cd.plug(d1);
    cd.plug(d2);
    cd.plug(d3);
    cd.plug(d4);
    console.log(cd);
    cd.chargeAll(60);

    cd.unplug(0);
    cd.unplug(1);
    console.log(cd);
}

//runs the main code
main();
