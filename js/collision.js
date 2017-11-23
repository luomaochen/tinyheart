//判断大鱼和果实的距离
function  momFruitColliaion()
{
    if(!data.gameOver)  //非gameover情况下大鱼才能吃到果实
    {
        for(var i=0;i<fruit.num;i++)
        {
            if(fruit.alive[i])
            {
                var l=calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
                if(l<900)
                {
                    fruit.dead(i);
                    data.fruitNum++;
                    mom.momBodyCount++;
                    if(mom.momBodyCount>7)
                        mom.momBodyCount=7;
                         if(fruit.fruitType[i]=="blue")
                         {
                             data.double=2;
                             wave.born(fruit.x[i],fruit.y[i],"blue");
                         }else{
                             wave.born(fruit.x[i],fruit.y[i],"orange");
                         }


                }
            }
        }
    }

}

//mom baby collision

function momBabyCollision()
{
    if(data.fruitNum>0 && !data.gameOver)  //大鱼吃到果实回去 喂小鱼才能进行检测
    {

        var l=calLength2(mom.x,mom.y,baby.x,baby.y);
        if(l<900)
        {
            //baby recover
            baby.babyBodyCount=0;

            mom.momBodyCount=0;
            //score update
            data.addScore();
            // wave.born(baby.x,baby.y,"white");
        }
    }

}