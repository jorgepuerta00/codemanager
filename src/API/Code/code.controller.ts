import { Controller, Get, HttpException, Query } from '@nestjs/common';
import { ValidResponse } from '@src/Utils/CustomExceptions/CustomException';
import { Code } from '../../Domain/Code/code';
import { CodeService } from './code.service';
import { CodeDTO } from './dto/codeDTO';

@Controller('code')
export class CodeController {
  constructor(private readonly codeService: CodeService) {}

  @Get()
  getCodeInfo(@Query() params: CodeDTO): ValidResponse | HttpException {
    return this.codeService.getCodeInfo(params.code);
  }
}
