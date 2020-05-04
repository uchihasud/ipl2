function strikeRatesPerYear(matches,deliveries)
{
let batman=[];
let strikeRate=[];
let balls=0;
let runs=0;
let matchid=[];
let players=['V Kohli','CH Gayle','RG Sharma','MS Dhoni'];
let result={};



let seas=['2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019'];

for(let x of seas)
{
    result[x]={};
}

let i=0;
    
while(i<seas.length)  // obtaining match id per year
    {
        let arr=[];
        for(let m of matches)
    {
        if(m.season === seas[i])
        {
       arr.push(m.id);
    }
    }
    matchid.push(arr);
    arr=[];
    i++;
    }



    for(let i=0;i<matchid.length;i++)  // batsman per year
{     
    let arr=[];
    for(let d of deliveries)
    {
        if(+(d.match_id)>=matchid[i][0] && +(d.match_id)<=matchid[i][matchid[i].length-1])
        {
            arr.push(d.batsman);
        }
    }
    batman.push(Array.from(new Set(arr)));
    arr=[];
}


for(let k=0;k<seas.length;k++) // calculating strike rate
{
    let arr=[];
    for(let j=0;j<batman[k].length;j++)
    {
     
     for(let d of deliveries)
     {
         if(d.batsman===batman[k][j] && +(d.match_id)>=matchid[k][0] && +(d.match_id)<=matchid[k][matchid[k].length-1])
         {
             ++balls;
             runs+=+(d.batsman_runs);

         }
     }
    
     let sr=((runs/balls)*100).toFixed(3);
     arr.push(sr);
     runs=0;
     balls=0;
     }
     strikeRate.push(arr);
     arr=[];
}

for(let x of players)
{
    
for(let i=0;i<batman.length;i++)
{
        if(batman[i].includes(x))
        { 
            result[seas[i]][x]=strikeRate[i][batman[i].indexOf(x)]
            
        }
            
}
    
}

return result;





/*let strikeRate2=[];
for(let i=0;i<strikeRate.length;i++)
    {
        strikeRate2.push([]);
        for(let j=0;j<strikeRate[i].length;j++)
        {

        strikeRate2[i].push(strikeRate[i][j]);
        }       
    }
    for(let i=0;i<strikeRate2.length;i++)
    {
        strikeRate2[i].sort((x,y)=>x-y).reverse();
    }
    console.log(strikeRate2);
    console.log(strikeRate);*/
}
module.exports=strikeRatesPerYear;