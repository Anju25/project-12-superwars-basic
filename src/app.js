const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
var detailedPlayers=[];
const initPlayers = (players) => {
   
for(var  i=0;i<players.length;i++)
{
    var play=
    {
        name:players[i],
        strength:getRandomStrength(),
        image:"./images/super-1.png",
        type:'hero|Villan'
    }
    detailedPlayers.push(play);
}
    // Create players using for loop
    // Type your code here
return detailedPlayers;
   
}

// getting random strength
const getRandomStrength = () => {
    let stren=Math.random();
    return stren;
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
}

 /*  const buildPlayers = (players, type) => {
    let fragment ='';
     for(var i=0;i<players.length;i++)
     {
         fragment=
         <div class="player">
             <img src='${players[i].image}' alt ="photo"></img>
             <h3>${players[i].name} </h3>
             <h4>${players[i].strength} </h4>
         </div>
         
     } 
     return fragment;
    }   */ 
    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here
    
// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
   function buildPlayers(players,type)
   { let arr=[];
        for(var i=0;i<players.length;i++)
        {
            if(players[i].type==type)
            {
                arr.push(players[i])
            }
        }
        return arr;
   }
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
    function buildPlayers(players,type)
    {
        let arr=[];
        for(var i=0;i<players.length;i++)
        {
            if(players[i].type==type)
            {
                arr.push(players[i])
            }
        }
        return arr;

    }
}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}