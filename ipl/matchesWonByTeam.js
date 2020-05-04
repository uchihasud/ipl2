function matchesWonByTeam(matches)
{
let result={};

for(let match of matches)
{
    const year=match.season;
    if(result[year])
    {
        let winner=match.winner;
        if(result[year][winner])
        {
            result[year][winner]++;
        }
        else{
            result[year][winner]=1;
        }
    }
    else
    {
        result[year]={};
        let winner=match.winner;
        
        result[year][winner]=1;
        
    }
}
return result;
}

module.exports = matchesWonByTeam;