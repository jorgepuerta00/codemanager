import { Controller, Get, HttpException, Query } from '@nestjs/common';
import { IValidResponse } from '../../Utils/CustomExceptions/CustomException';
import { CodeService } from './code.service';
import { CodeDTO } from './dto/codeDTO';

@Controller('code')
export class CodeController {
  constructor(private readonly codeService: CodeService) {}

  @Get()
  getCodeInfo(@Query() params: CodeDTO): IValidResponse | HttpException {
    return this.codeService.getCodeInfo(params.code);
  }
}
