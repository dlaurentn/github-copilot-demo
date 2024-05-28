import { Player } from './player';

export class Enemy {
  constructor(
    public name: string,
    public hp: number,
    public damage: number,
  ) {}

  attack(target: Player): void {
    target.takeDamage(this.damage);
  }

  takeDamage(damage: number): void {
    this.hp -= damage;
  }

  get isAlive(): boolean {
    return this.hp > 0;
  }
}
