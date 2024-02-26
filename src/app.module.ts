import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PastelesModule } from './modulos/pasteles/pasteles.module';
import { ClientesModule } from './modulos/clientes/clientes.module';
import { CreadoresModule } from './modulos/creadores/creadores.module';
import { AuthModule } from './modulos/auth/auth.module';
import { UserModule } from './modulos/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DBPORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true
    }),
    PastelesModule,
    ClientesModule,
    CreadoresModule,
    AuthModule,
    UserModule,

  ],  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
