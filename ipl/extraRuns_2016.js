function extraRuns_2016(matches,deliveries)
{
    let mat=[];
    let teams=[];
    let result={};
    for(let match of matches)
    {
         if(match.season === "2016")
         {
                mat.push(match.id);
                teams.push(match.team1);
                teams.push(match.team2);
         }
    }
    teams=Array.from(new Set(teams));
    for(let t of teams)
    {
        for(let del of deliveries)
        {
            if(+(del.match_id)>=+(mat[0]) && +(del.match_id)<=+(mat[mat.length-1]))
            {
                if(del.bowling_team === t)
                {
                 if(result[t])
                 {
                         result[t]+=+(del.extra_runs);
                 }
                 else
                 {
                     result[t]=+(del.extra_runs);
                 }
                }
            }
        }
    }
    return result;
}

module.exports = extraRuns_2016;