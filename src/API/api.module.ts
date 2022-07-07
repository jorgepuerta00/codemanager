import { Module } from '@nestjs/common';
import { CodeController } from './Code/code.controller';
import { CodeService } from './Code/code.service';

@Module({
  imports: [],
  controllers: [CodeController],
  providers: [CodeService],
})
export class ApiModule {}