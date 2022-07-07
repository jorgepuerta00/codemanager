import { Injectable } from '@nestjs/common';
import { Code } from '../../Domain/Code/code';
import { CodeManagerContext } from '../../Domain/Code/code.strategy';

@Injectable()
export class CodeService {

  getCodeInfo(code: string): any {
    const codeManagerContext = new CodeManagerContext(code);
    const strategy = codeManagerContext.getCodeManagerStrategy();
    return strategy.parseCode();
  }
}
