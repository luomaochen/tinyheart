var waveObj=function ()
{
    this.x=[];
    this.y=[];
    this.alive=[];
    this.r=[];
    this.wavclo="";

}

waveObj.prototype.num=10;
waveObj.prototype.init=function ()
{
    for(var i=0;i<this.num;i++)
    {
        this.alive[i]=false;
        this.r[i]=0;
    }
}


waveObj.prototype.draw=function ()
{
    ctx1.save();
    ctx1.lineWidth=3;
    ctx1.shadowBlur=10;
    ctx1.shadowColor="white";
    for(var i=0;i<this.num;i++)
    {
        if(this.alive[i])
        {
             this.r[i]+=deltaTime*0.04;
             if(this.r[i]>50)
             {
                 this.alive[i]=false;
                 continue;
             }


             var alpha=1-this.r[i]/50;


             //draw
            ctx1.beginPath();
            ctx1.arc(this.x[i],this.y[i],this.r[i],0,Math.PI*2);
            ctx1.closePath();
            if(this.wavclo=="blue"){
                ctx1.strokeStyle="rgba(0,0,255,"+alpha+")";
                ctx1.stroke();
            }
            if(this.wavclo=="orange"){

                ctx1.strokeStyle="rgba(255,165,0,"+alpha+")";
                ctx1.stroke();
            }
            // if(this.wavclo=="white"){
            //     this.r[i]+=deltaTime*0.04;
            //     var alpha=1-this.r[i]/80;
            //     ctx1.arc(this.x[i],this.y[i],this.r[i],0,Math.PI*2);
            //     ctx1.closePath();
            //     ctx1.strokeStyle="rgba(255,255,255,"+alpha+")";
            // }



        }
    }
    ctx1.restore();
}

waveObj.prototype.born=function (x,y,z)
{
    for(var i=0;i<this.num;i++)
    {
        if(!this.alive[i])
        {
             this.alive[i]=true;
             this.r[i]=10;
             this.x[i]=x;
             this.y[i]=y;
             this.wavclo=z;
              //born
              return;
        }
    }
}