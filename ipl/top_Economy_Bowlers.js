function top_Economy_Bowlers(matches,deliveries)
{
    let mat=[];
    let bowlers=[];
    const economy=[];
    let result={};
    for(let match of matches)
    {
         if(match.season === "2015")
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
        let over=0;
        let runs=0;
        let count=0;
        let aq=0;
    
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
            economy.push((runs/(over)).toFixed(2));
            over=0;
            runs=0;
        }
  
       let economy2=[];
       for(let i=0;i<economy.length;i++)
    {
        economy2.push(economy[i]);
    }
              economy2.sort((x,y)=>x-y);
       
       
        for(let i=0;i<10;i++)
       {
           let a=economy.indexOf(economy2[i]);
           
           result[bowlers[a]]=economy2[i];
           
       }

       return result;
}
module.exports=top_Economy_Bowlers;