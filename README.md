# Angular Day1

We are going to create a list that will display cards of pokemon.  We will be able to see a list of cards (hard coded into our code because we're not doing HTTP calls till tomorrow) Add new cards.  And filter cards based on the type of pokemon they are.  

We may add additional filters/functionality if we have time.

CDN for base angular that we are using.  
 ```
 <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.5/angular.js" charset="utf-8"></script>
 ```


 # General outline

 Create HTML File

 Add Angular scripts
 Add css link

 Create cardVierwer app and attach it to the html

 Create listCtrl controller and attach it to the body

 Put existing card array onto the $scope Object as cards

 ng-repeat over the cards array and display each individual card. (class: card, name, picture, stats, stat)

add filter to select types (class filters)

add new card form (class addNew)

ng-select for url image

add new card previewer
