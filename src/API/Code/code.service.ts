import { HttpException, Injectable } from '@nestjs/common';
import { ValidResponse } from '@src/Utils/CustomExceptions/CustomException';
import { Code } from '../../Domain/Code/code';
import { CodeManagerContext } from '../../Domain/Code/code.strategy';

@Injectable()
export class CodeService {

  getCodeInfo(code: string): ValidResponse | HttpException {
    const codeManagerContext = new CodeManagerContext(code);
    const strategy = codeManagerContext.getCodeManagerStrategy();
    const result = strategy.parseCode();
    return new ValidResponse(result);
  }
}
