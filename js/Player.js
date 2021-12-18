class Player {
  constructor(){
    this.index = null;
    this.distance = 150;
    this.name = null;
    this.foodCount = 0;
    this.rank = 0;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance,
      foodCount:this.foodCount,
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
   getPlayerRank(){
    var playerInfoRef = database.ref('rank');
    playerInfoRef.on("value",(data)=>{
      player.rank = data.val();
    })
  }
  updatePlayerRank(rank){
    database.ref('/').update({
      rank:rank
    });
  
    }

}
