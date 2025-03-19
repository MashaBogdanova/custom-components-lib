import { describe, expect, it } from '@jest/globals';

import { capitalize } from '../../utils/capitalize-string';

describe('capitalize', () => {
  it('should capitalize the first letter of a string', () => {
    expect(capitalize('test')).toBe('Test');
  });

  it('should return an empty string unchanged', () => {
    expect(capitalize('')).toBe('');
  });

  it('should leave a string unchanged if the first letter is already capitalized', () => {
    expect(capitalize('Test')).toBe('Test');
  });
});
