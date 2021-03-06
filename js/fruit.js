var fruitObj=function () {

    this.alive=[];
    this.x=[];
    this.y=[];
    this.aneNo=[];
    this.l=[];
    this.spd=[];
    this.fruitType=[];
    this.orange=new Image();
    this.blue=new Image();

}



fruitObj.prototype.num=30;
fruitObj.prototype.init=function ()
{
        for(var i=0;i<this.num;i++){
            this.alive[i]=false;
            this.x[i]=0;
            this.y[i]=0;
            this.aneNo[i]=0;
            this.spd[i]=Math.random()*0.017+0.003;//[0.003,0.02]
            this.fruitType[i]="";

        }

        this.orange.src="./src/fruit.png";
        this.blue.src="./src/blue.png";
}

fruitObj.prototype.draw=function()
{
    for(var i=0;i<this.num;i++)
    {

        if(this.alive[i])
        {
            if(this.fruitType[i]=="blue")
            {
                var pic=this.blue;
            }
            else
            {
                var pic=this.orange;
            }
            if(this.l[i]<=14)
            {       //果实的半径  小于14在成长
                var NO=this.aneNo[i];
                this.l[i]+= this.spd[i]*deltaTime;
                this.x[i]=ane.headx[NO];
                this.y[i]=ane.heady[NO];
                ctx2.drawImage(pic,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);
            }

            else{
                this.y[i]-= this.spd[i]*7*deltaTime;
                ctx2.drawImage(pic,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);
            }

            if(this.y[i]<10){
                this.alive[i]=false;   //果实离开  变为 非活  即装回池子
            }
        }



    }
}


fruitObj.prototype.born=function (i) {

    this.aneNo[i]=Math.floor(Math.random()*ane.num);
    this.l[i]=0;
    this.alive[i]=true;

    if(Math.random()<0.1)
    {
        this.fruitType[i]="blue";
    }
    else
    {
        this.fruitType[i]="orange";
    }

}


fruitObj.prototype.dead=function (i)
{
    this.alive[i]=false;
}



function fruitMonitor()
{
    var num=0;
    for(var i=0;i<fruit.num;i++)
    {
        if(fruit.alive[i])num++;

    }
    if(num<10)
    {
        //发出果实
        sendFruit();
        return;
    }
}

//判断果实是否在池子中    alive[i]=true证明已经出生 不在池子中  等它离开界面才能回到池子
function sendFruit() {
    for(var i=0;i<fruit.num;i++)
    {
        if(!fruit.alive[i])
        {
            fruit.born(i);
            return;
        }
    }

}
