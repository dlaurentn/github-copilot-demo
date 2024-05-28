import { v4 as uuid } from 'uuid';
import { Enemy } from './enemy';

export class Player {
  public id: string;
  constructor(
    public name: string,
    public hp: number,
    public damage: number,
    public defense: number,
  ) {
    this.id = uuid();
  }

  attack(target: Enemy): void {
    target.takeDamage(this.damage);
  }

  takeDamage(damage: number): void {
    const reducedDamage = damage - this.defense;
    this.hp -= reducedDamage;
  }

  get isAlive(): boolean {
    return this.hp > 0;
  }
}
