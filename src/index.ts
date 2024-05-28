import { Enemy } from './enemy';
import { Player } from './player';

const MAX_ROUNDS = 50;

const player: Player = new Player('Gandalf', 100, 10, 5);
const enemy: Enemy = new Enemy('Sauron', 200, 12);

let round = 0;

while (player.isAlive && enemy.isAlive && round < MAX_ROUNDS) {
  player.attack(enemy);
  enemy.attack(player);
  round++;
}

if (!player.isAlive) {
  console.log(`${enemy.name} has defeated ${player.name}!`);
} else if (!enemy.isAlive) {
  console.log(`${player.name} has defeated ${enemy.name}!`);
} else {
  console.log('The fight was a draw!');
}
