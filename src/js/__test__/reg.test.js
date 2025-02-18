import Validator from "../reg";

test.each([
  ['vali1242562__-dator', true],
  ['validator', true],
  ['validator_!2', false],
  ['2validator', false],
  ['_validat*or', false],
  ['-validator', false],
])("testing niknames", (username, expected) => {
    const result = new Validator;
    expect(result.validateUsername(username)).toBe(expected)
})