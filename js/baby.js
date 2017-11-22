var babyObj=function ()
{
    this.x;
    this.y;
    this.angle;

    this.babyBody=new Image();


    this.babyTailTimer=0;
    this.babyTailCount=0;

    this.babyEyeTimer=0;
    this.babyEyeCount=0;
    this.babyEyeInterval=1000;

    this.babyBodyTimer=0;
    this.babyBodyCount=0;
}

babyObj.prototype.init=function ()
{
    this.x=canWidth*0.5-50;
    this.y=canHeight*0.5+50;
    this.angle=0;

    this.babyBody.src="./src/babyFade0.png";

}

babyObj.prototype.draw=function ()
{
    this.x=lerpDistance(mom.x,this.x,0.98);
    this.y=lerpDistance(mom.y,this.y,0.98);

    var deltaY=mom.y-this.y;
    var deltaX=mom.x-this.x;
    var beta = Math.atan2(deltaY,deltaX)+Math.PI//-PI PI  不加Math.PI  尾部朝着鼠标

    this.angle=lerpAngle(beta,this.angle,0.6);

    //baby tail count
    this.babyTailTimer+=deltaTime;
    if(this.babyTailTimer>50)
    {
        this.babyTailCount=(this.babyTailCount+1)%8;
        this.babyTailTimer%=50;
    }

    //babyEye
    this.babyEyeTimer+=deltaTime;
    if(this.babyEyeTimer>this.babyEyeInterval)
    {
        this.babyEyeCount=(this.babyEyeCount+1)%2;
        this.babyEyeTimer%=this.babyEyeInterval;

        if(this.babyEyeCount==0)
        {
            this.babyEyeInterval=Math.random()*1500+2000;
        }
        else
        {
            this.babyEyeInterval=200;
        }
    }

    //babyBody

    this.babyBodyTimer+=deltaTime;
    if(this.babyBodyTimer>300)
    {
        this.babyBodyCount=this.babyBodyCount+1;
        this.babyBodyTimer%=300;
        if(this.babyBodyCount>19)
        {
            this.babyBodyCount=19;
            //game over
        }
    }


    //ctx1
    ctx1.save();
    //translate()
    ctx1.translate(this.x,this.y);  //从这个点开始绘画的意思
    ctx1.rotate(this.angle);

    var babyTailCount=this.babyTailCount;
    ctx1.drawImage(babyTail[babyTailCount],-babyTail[babyTailCount].width*0.5+24,-babyTail[babyTailCount].height*0.5);
    var babyBodyCount=this.babyBodyCount;
    ctx1.drawImage(babyBody[babyBodyCount],-babyBody[babyBodyCount].width*0.5,-babyBody[babyBodyCount].height*0.5);
    var babyEyeCount=this.babyEyeCount;
    ctx1.drawImage(babyEye[babyEyeCount],-babyEye[babyEyeCount].width*0.5,-babyEye[babyEyeCount].height*0.5);  //因为图片有大小 所以让图片中心在这个点上


    ctx1.restore();
}