angular.module('cardList', [])

angular.module('cardList').controller('cardCtrl', function($scope){
  $scope.name = "Pokemon List";

  $scope.card = {
    name:'Pikachu',
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-BjyF2HMWR8a-uocWUjEt0FS65HhBtuh2AKkmuBs6Hp_CjhjI",
    stats:{
      hp:50,
      atk:75,
      def:12
    }
  }

  $scope.cards = [
    {name:'Charmander',url:'https://static.giantbomb.com/uploads/scale_small/0/6087/2438704-1202149925_t.png'
    ,type:'fire', stats:{"hp": 213,"atk": 86,"def": 87}},
    {name:'Squirtle',url:'http://www.freepngimg.com/download/pokemon/11-2-pokemon-png.png'
    ,type:'water', stats:{"hp":243,"atk":17,"def":89}},
    {name:'Bulbasaur',url:'http://www.freepngimg.com/download/pokemon/10-2-pokemon-picture.png'
    ,type:'grass poison', stats:{"hp":255,"atk":23,"def":79}},
    {name:'Pikachu',url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-BjyF2HMWR8a-uocWUjEt0FS65HhBtuh2AKkmuBs6Hp_CjhjI'
    ,type:'electric', stats:{"hp":270,"atk":52,"def":34}},
    {name:'Eevee',url:'http://vignette4.wikia.nocookie.net/pokemon/images/2/26/133Eevee_Pokemon_Mystery_Dungeon_Red_and_Blue_Rescue_Teams.png/revision/latest?cb=20150106012220'
    ,type:'normal', stats:{"hp":65,"atk":36,"def":42}},
    {name:'Alakazam',url:'https://pokemon.gameinfo.io/images/pokemon/65.png'
    ,type:'psychic', stats:{"hp":174,"atk":18,"def":51}},
    {name:'Gengar',url:'https://pokemon.gameinfo.io/images/pokemon/94.png'
    ,type:'ghost poison', stats:{"hp":204,"atk":97,"def":25}},
    {name:'Vaporeon',url:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/134.png'
    ,type:'water', stats:{"hp":288,"atk":55,"def":26}},
    {name:'Ekans',url:'http://clipart.toonarific.com/data/media/11/pokemon023.gif'
    ,type:'poison', stats:{"hp":271,"atk":27,"def":44}},
  ]

  $scope.addCard = function(newCard){
    $scope.cards.push(newCard);
    $scope.newCard = {};
  }

})
