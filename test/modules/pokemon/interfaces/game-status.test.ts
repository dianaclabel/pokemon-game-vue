import { GameRoundStatus } from '@/modules/pokemon/interfaces';

describe('GameStatus enum', () => {
  test("Should have a value of 'Playing'", () => {
    expect(GameRoundStatus.Playing).toBe('playing');
  });
  test("Should have a value of 'won'", () => {
    expect(GameRoundStatus.Won).toBe('won');
  });
  test("Should have a value of 'lost'", () => {
    expect(GameRoundStatus.Lost).toBe('Lost');
  });
});
