import { CodeSpecificationException } from "../../Utils/CustomExceptions/CustomException";
import { Dictionary } from "lodash";
import { Code, CodeBulk, CodeMercadona, CodeVariableWeight } from "./code";

export enum Codetype {
  mercadona = 'mercadona',
  variable_weight = 'variable_weight',
  bulk = 'bulk'
}

export class CodeManagerContext {
  private strategy: Dictionary<Code>;
  private code: string;
  private preffix: string;

  constructor(code: string) {
    this.strategy = {};
    this.code = code;
    this.preffix = code.toString().substring(0, 2);
    this.createStrategy(code);
  }

  private createStrategy(code: string) {
    this.strategy[Codetype.mercadona] = new CodeMercadona(code);
    this.strategy[Codetype.variable_weight] = new CodeVariableWeight(code);
    this.strategy[Codetype.bulk] = new CodeBulk(code);
  }

  public getCodeManagerStrategy(): Code {
    const type: string = checkIsMercadonaProduct(this.preffix, this.code);
    return this.strategy[type];
  }

}

const checkIsMercadonaProduct = (preffix: string, code: string) => {
  return (preffix == '84') ? Codetype.mercadona : checkIsVariableWeightProduct(preffix, code);
}

const checkIsVariableWeightProduct = (preffix: string, code: string) => {
  return (preffix == '23' && code.length == 13) ? Codetype.variable_weight : checkIsBulkProduct(preffix, code);
}

const checkIsBulkProduct = (preffix: string, code: string) => {
  if(preffix == '23' && code.length == 24) {
    return Codetype.bulk;
  }
  throw new CodeSpecificationException();
}