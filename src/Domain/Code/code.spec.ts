import { CodeMercadona, CodeVariableWeight, CodeBulk } from './code';

describe('Code Model testing', () => {

  /*
    Example: 8480000278623
    - 84 -> Spain preffix
    - 80000 -> Made by Mercadona
    - 27862 -> Merca code
    - 3 -> Control digit
  */

  it('should return object CodeMercadona with properties code 13 digits', () => {
    const givingcode = "8480000278623";
    const code: CodeMercadona = new CodeMercadona(givingcode);
    expect(code.parseCode()).toMatchObject(resultOne);
  });

  it('should return object CodeMercadona with properties code 13 digits', () => {
    const givingcode = "8480000278623";
    const code: CodeMercadona = new CodeMercadona(givingcode);
    expect(code.isValidCode()).toBe(true);
  });

  it('should return object CodeMercadona with properties code 13 digits', () => {
    const givingcode = "848000027862";
    const code: CodeMercadona = new CodeMercadona(givingcode);
    expect(code.isValidCode()).toBe(false);
  });

  /*
    Example: 2369664001999
    - 23 -> Preffix
    - 69664 -> Merca code
    - 00199 -> Price in cents
    - 9 -> Control digit
  */

  it('should return object CodeVariableWeight with properties code 13 digits', () => {
    const givingcode = "2369664001999";
    const code: CodeVariableWeight = new CodeVariableWeight(givingcode);
    expect(code.parseCode()).toMatchObject(resultTwo);
  });

  it('should return object CodeVariableWeight with properties code 13 digits', () => {
    const givingcode = "2369664001999";
    const code: CodeVariableWeight = new CodeVariableWeight(givingcode);
    expect(code.isValidCode()).toBe(true);
  });

  it('should return object CodeVariableWeight with properties code 13 digits', () => {
    const givingcode = "236966400199";
    const code: CodeVariableWeight = new CodeVariableWeight(givingcode);
    expect(code.isValidCode()).toBe(false);
  });

  /* 
    Example: 230036490033000165000542
    - 23 -> Preffix
    - 0 -> Clearance mark
    - 03649 -> Merca code
    - 00330 -> Weight (g)
    - 00165 -> PVP
    - 00054 -> Price in cents
    - 2 -> Control digit
  */

  it('should return object CodeBulk with properties code 13 digits', () => {
    const givingcode = "230036490033000165000542";
    const code: CodeBulk = new CodeBulk(givingcode);
    expect(code.parseCode()).toMatchObject(resultThree);
  });

  it('should return object CodeBulk with properties code 24 digits', () => {
    const givingcode = "230036490033000165000542";
    const code: CodeBulk = new CodeBulk(givingcode);
    expect(code.isValidCode()).toBe(true);
  });

  it('should return object CodeBulk with properties code 24 digits', () => {
    const givingcode = "23003649003300016500054";
    const code: CodeBulk = new CodeBulk(givingcode);
    expect(code.isValidCode()).toBe(false);
  });

});

const resultOne = {
  mercacode: "27862",
}

const resultTwo = {
  mercacode: "69664",
  price: "00199",
}

const resultThree = {
  mercacode: "03649",
  weight: "00330",
  pvp: "00165",
  price: "00054",
}