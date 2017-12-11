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


function main(){}

//runs the main code
main();
