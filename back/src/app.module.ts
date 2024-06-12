import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { AuthModule } from './auth/auth.module';
import { RewardModule } from './reward/reward.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [TodoModule, AuthModule, RewardModule, MongooseModule.forRoot(`mongodb://${process.env.db_user}:${process.env.db_pwd}@localhost/nest`)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
