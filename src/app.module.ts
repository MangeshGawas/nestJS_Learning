import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestapiModule } from './restapi/restapi.module';
import { CryptapiModule } from './cryptapi/cryptapi.module';
import { CryptoapiModule } from './cryptoapi/cryptoapi.module';

@Module({
  imports: [RestapiModule, CryptapiModule, CryptoapiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
