function custom_Top_Bowlers(matches,deliveries)
{
    let result={};
    for(let i=2008;i<=2019;i++)
    {
        result[i]=ecoThisYear(matches,deliveries,i);
    }
    return result;
}

ecoThisYear(matches,deliveries,year)
{
    let mat=[];
    let bowlers=[];
    let boweco={};
    let topeco;

    for(let match of matches)
    {
         if(match.season == i)
         {
                mat.push(match.id);
               
         }
    }
    for(let del of deliveries)
        {
            if(+(del.match_id)>=+(mat[0]) && +(del.match_id)<=+(mat[mat.length-1]))
            {
                bowlers.push(del.bowler);
            }
        }
        bowlers=Array.from(new Set(bowlers));

        for(let b of bowlers) 
        {
            for(let del of deliveries)
            {
                if(+(del.match_id)>=+(mat[0]) && +(del.match_id)<=+(mat[mat.length-1]))
                {
                    if(del.bowler === b)
                    {
                        ++count;
                        
                        if(+(del.ball) === 6)
                           {
                               if(count === 6)
                               {
                               ++over;
                               count=0;
                               }
                               else
                               {
                                   over=over+count/6;
                                   count=0;
                                   
                               }
                           }
                           else if(+(del.ball)>6)
                           {
                               count=0;
                           }
                           runs+=+(del.total_runs);
                        } 
 
                }   
        
            }
             count=0;
            boweco[bowlers]=(runs/(over)).toFixed(2);
            over=0;
            runs=0;
        }
        topeco=(Object.entries(boweco).sort((a,b)=>a[1]-b[1])).slice(0, 10);
        return topeco;
}

module.exports = custom_Top_Bowlers;