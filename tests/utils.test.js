const { add, formatDate } = require('../src/utils');

describe('Utils', () => {
  describe('add function', () => {
    test('adds two positive numbers correctly', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('handles negative numbers', () => {
      expect(add(-1, 5)).toBe(4);
      expect(add(-3, -7)).toBe(-10);
    });
  });

  describe('formatDate function', () => {
    test('formats date correctly', () => {
      const date = new Date(2023, 0, 15); // January 15, 2023
      expect(formatDate(date)).toBe('2023-01-15');
    });

    test('pads single digit month and day with zero', () => {
      const date = new Date(2023, 5, 7); // June 7, 2023
      expect(formatDate(date)).toBe('2023-06-07');
    });
  });
});
