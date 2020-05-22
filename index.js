const csv=require('csvtojson');//including library csvtojson
const matches_File_Path="./csv_data/matches.csv";
const deliveries_File_Path="./csv_data/deliveries.csv";
const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");//importing matchesPlayedPerYear.js
const fs=require("fs");
const JSON_OUTPUT_FILE_PATH="./public/data.json";
const matchesWonByTeam = require("./ipl/matchesWonByTeam");
const extraRuns_2016 = require("./ipl/extraRuns_2016");
const top_Economy_Bowlers = require("./ipl/top_Economy_Bowlers");
const strikeRatesPerYear = require("./ipl/strikeRatesPerYear");
const customEconomicalBowlers = require("./ipl/customEconomicalBowlers");
let jsonData;

function main() {
    csv()
.fromFile(matches_File_Path)
.then((matches)=>{
    let result=matchesPlayedPerYear(matches);
    saveMatchesPlayedPerYear(result)    
});

csv()
.fromFile(matches_File_Path)
.then((matches)=>{let result2 = matchesWonByTeam(matches);
    saveMatchesWonByTeam(result2)
});

csv()
.fromFile(matches_File_Path)
.then((matches)=>{ csv()
  .fromFile(deliveries_File_Path)
.then((deliveries)=>{let result=extraRuns_2016(matches,deliveries);
saveExtraRuns_2016(result);})});

csv()
.fromFile(matches_File_Path)
.then((matches)=>{ csv()
  .fromFile(deliveries_File_Path)
.then((deliveries)=>{let result=top_Economy_Bowlers(matches,deliveries);
  savetop_Economy_Bowlers(result);
})});

csv()
.fromFile(matches_File_Path)
.then((matches)=>{ csv()
  .fromFile(deliveries_File_Path)
.then((deliveries)=>{let result=strikeRatesPerYear(matches,deliveries);
  savestrikeRatesPerYear(result);
})});

csv()
.fromFile(matches_File_Path)
.then((matches)=>{ csv()
  .fromFile(deliveries_File_Path)
.then((deliveries)=>{let result=custom_Top_Bowlers(matches,deliveries);
  savecustom_Top_Bowlers(result);
})});
    
}

function saveMatchesPlayedPerYear(result) { // this function is for to save data in a file which is accessible to browser,soe it must be in public.
    jsonData = {
      matchesPlayedPerYear: result
    };
    const jsonString = JSON.stringify(jsonData);
    fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
      if (err) {
        console.error(err);
      }
    });
  }

  function saveMatchesWonByTeam(result) { // this function is for to save data in a file which is accessible to browser,soe it must be in public.
    jsonData['matchesWonByTeam']=result;
       
    
    const jsonString = JSON.stringify(jsonData);
    fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
      if (err) {
        console.error(err);
      }
    });
  }

  function saveExtraRuns_2016(result)
  {
    
    jsonData["extraRuns"]=result;
    
    
    const jsonString = JSON.stringify(jsonData);
    fs.writeFile(JSON_OUTPUT_FILE_PATH,jsonString, "utf8", err=> {
      if (err) {
      console.error(err);}
    });
  }

  function savetop_Economy_Bowlers(result)
  {
    
    jsonData["economicalBowler"]=result;
    
    
    const jsonString = JSON.stringify(jsonData);
    fs.writeFile(JSON_OUTPUT_FILE_PATH,jsonString, "utf8", err=> {
      if (err) {
      console.error(err);}
    });
  }

  function savestrikeRatesPerYear(result)
  {
    
    jsonData["strikeRate"]=result;
    
    
    const jsonString = JSON.stringify(jsonData);
    fs.writeFile(JSON_OUTPUT_FILE_PATH,jsonString, "utf8", err=> {
      if (err) {
      console.error(err);}
    });
  }


  function savecustom_Top_Bowlers(result) { // this function is for to save data in a file which is accessible to browser,soe it must be in public.
    jsonData = {
      customEconomy: result
    };
    const jsonString = JSON.stringify(jsonData);
    fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
      if (err) {
        console.error(err);
      }
    });
  }

  

main();
