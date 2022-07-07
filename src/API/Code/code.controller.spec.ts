import { Test, TestingModule } from '@nestjs/testing';
import { CodeController } from './code.controller';
import { CodeService } from './code.service';
import { CodeDTO } from './dto/codeDTO';

describe('AppController', () => {
  let controller: CodeController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CodeController],
      providers: [CodeService],
    }).compile();

    controller = app.get<CodeController>(CodeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return "Hello World!"', () => {
    expect(controller.getCodeInfo(paramsMercadonaProducts)).toMatchObject(resultOne);
  });

  it('should return "Hello World!"', () => {
    expect(controller.getCodeInfo(paramsVariableWeightProducts)).toMatchObject(resultTwo);
  });

  it('should return "Hello World!"', () => {
    expect(controller.getCodeInfo(paramBulkProducts)).toMatchObject(resultThree);
  });

});

const paramsMercadonaProducts: CodeDTO = {
  code: '8480000278623'
}

const paramsVariableWeightProducts: CodeDTO = {
  code: '2369664001999'
}

const paramBulkProducts: CodeDTO = {
  code: '230036490033000165000542'
}

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