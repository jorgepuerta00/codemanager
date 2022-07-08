import { Test, TestingModule } from '@nestjs/testing';
import { CodeSpecificationException, IValidResponse } from '../../Utils/CustomExceptions/CustomException';
import { CodeService } from './code.service';

describe('AppController', () => {
  let service: CodeService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [CodeService],
    }).compile();

    service = app.get<CodeService>(CodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  /*
    Example: 8480000278623
    - 84 -> Spain preffix
    - 80000 -> Made by Mercadona
    - 27862 -> Merca code
    - 3 -> Control digit
  */

  it('should return object CodeMercadona with properties code 13 digits', () => {
    const givingcode = "8480000278623";
    const result: any = service.getCodeInfo(givingcode);
    expect(result).toMatchObject(resultOne);
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
    const result: any = service.getCodeInfo(givingcode);
    expect(result).toMatchObject(resultTwo);
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
    const result: any = service.getCodeInfo(givingcode);
    expect(result).toMatchObject(resultThree);
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
    try {
      service.getCodeInfo(givingcode);
    } catch (err) {
      expect(err instanceof CodeSpecificationException).toBe(true);
    }
  });

});

const resultOne: IValidResponse = {
  result: {
    mercacode: "27862",
  }
}

const resultTwo: IValidResponse = {
  result: {
    mercacode: "69664",
    price: "00199",
  }
}

const resultThree: IValidResponse = {
  result: {
    mercacode: "03649",
    weight: "00330",
    pvp: "00165",
    price: "00054",
  }
}