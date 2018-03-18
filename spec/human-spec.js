import { Human } from '../src/human.js';

describe('Human', function() {
  it('should test whether or not a Human has its properties', function() {
    let testHuman = new Human("Rick Sanchez", ("1800-06-06"));
    expect(testHuman.name).toEqual("Rick Sanchez");
    expect(testHuman.birthDate).toEqual("1800-06-06");
  });
});
