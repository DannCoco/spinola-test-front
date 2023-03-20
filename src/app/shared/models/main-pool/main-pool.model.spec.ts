import { MainPool } from './main-pool.model';

describe('MainPool', () => {
  it('should create an instance', () => {
    expect(new MainPool(48, 6)).toBeTruthy();
  });
});
