### Dice Game Battle Royale
This is a student project for [devCodeCamp](https://devCodeCamp.com) using JavaScript.

#### Rules
* 10 players roll dice multiple times in a 6-round game.
* In the first three rounds, the lowest two players each round are removed from the game (until 4 players remain).
* In rounds 4 and 5, the lowest player is removed from the game (2 players remain).
* In the 6th and final round, a shootout occurs between the final two players.
* Each player will roll a __set__ of dice consisting of (1 each):  
   * 4-sides
   * 6-sides
   * 8-sides
   * 10-sides
   * 12-sides
   * 20-sides  

##### Dice Shootout:  
Each player rolls a `d20` four times, recording each result, and then rolls a `d4` to determine which of the four `d20` results they get to use. The higher result is the winner of the Battle Royale. In the event of a tie, repeat this process.


#### Features
* Display the current round, score from the round and remaining players.
* Able to click a button to start round and prompt to play again. 
