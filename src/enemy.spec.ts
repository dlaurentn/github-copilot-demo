import { Enemy } from './enemy';
import { Player } from './player';

describe('Enemy', () => {
  const player = { takeDamage: jest.fn() };
  const enemy = new Enemy('Morgoth', 100, 10);

  it('should set a name, HPs and attack', () => {
    expect(enemy.name).toBe('Morgoth');
    expect(enemy.hp).toBe(100);
    expect(enemy.damage).toBe(10);
  });

  it('should attack a player', () => {
    enemy.attack(player as unknown as Player);
    expect(player.takeDamage).toHaveBeenCalledWith(10);
  });

  it('should take damage', () => {
    enemy.takeDamage(10);
    expect(enemy.hp).toBe(90);
  });

  it('should be dead when having no HP', () => {
    enemy.hp = 0;
    expect(enemy.isAlive).toBeFalsy();
  });

  it('should be alive when having remaining HP', () => {
    enemy.hp = 10;
    expect(enemy.isAlive).toBeTruthy();
  });
});
