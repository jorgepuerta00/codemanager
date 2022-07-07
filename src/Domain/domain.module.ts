import { Module } from '@nestjs/common';
import { CodeModule } from './Code/code.module';

@Module({
	imports: [
		CodeModule,
	],
	exports: [
		CodeModule,
	],
})
export class DomainModule {}
