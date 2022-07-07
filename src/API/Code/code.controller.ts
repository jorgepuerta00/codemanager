import { Controller, Get, Query } from '@nestjs/common';
import { Code } from '../../Domain/Code/code';
import { CodeService } from './code.service';
import { CodeDTO } from './dto/codeDTO';

@Controller('code')
export class CodeController {
  constructor(private readonly codeService: CodeService) {}

  @Get()
  getCodeInfo(@Query() params: CodeDTO): any {
    return this.codeService.getCodeInfo(params.code);
  }
}
