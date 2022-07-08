import { HttpException, Injectable } from '@nestjs/common';
import { ValidResponse, IValidResponse } from '../../Utils/CustomExceptions/CustomException';
import { CodeManagerContext } from '../../Domain/Code/code.strategy';

@Injectable()
export class CodeService {

  getCodeInfo(code: string): IValidResponse | HttpException {
    const codeManagerContext = new CodeManagerContext(code);
    const strategy = codeManagerContext.getCodeManagerStrategy();
    const result = strategy.parseCode();
    return new ValidResponse(result);
  }
}
