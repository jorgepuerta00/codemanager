import { CodeSpecificationException } from '../../Utils/CustomExceptions/CustomException';
import { Code } from './code';
import { CodeManagerContext, Codetype } from './code.strategy';

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
    const context: CodeManagerContext = new CodeManagerContext(givingcode);
    const result: Code = context.getCodeManagerStrategy();
    expect(result.parseCode()).toMatchObject(resultOne);
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
    const context: CodeManagerContext = new CodeManagerContext(givingcode);
    const result: Code = context.getCodeManagerStrategy();
    expect(result.parseCode()).toMatchObject(resultTwo);
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

  it('should return object CodeBulk with properties code 24 digits', () => {
    const givingcode = "230036490033000165000542";
    const context: CodeManagerContext = new CodeManagerContext(givingcode);
    const result: Code = context.getCodeManagerStrategy();
    expect(result.parseCode()).toMatchObject(resultThree);
  });

  /* 
    Example: 240036490033000165000542
    - 24 -> Preffix
    - 0 -> Clearance mark
    - 03649 -> Merca code
    - 00330 -> Weight (g)
    - 00165 -> PVP
    - 00054 -> Price in cents
    - 2 -> Control digit
  */

  it('should return CodeSpecificationException', () => {
    const givingcode = "240036490033000165000542";
    const context: CodeManagerContext = new CodeManagerContext(givingcode);
    try {
      context.getCodeManagerStrategy()
    } catch (err) {
      expect(err instanceof CodeSpecificationException).toBe(true);
    }
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