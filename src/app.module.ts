import { Module } from '@nestjs/common';
import { ApiModule } from './API/api.module';

@Module({
  imports: [ApiModule],
})
export class AppModule {}
