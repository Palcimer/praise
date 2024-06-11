import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { AuthModule } from './auth/auth.module';
import { RewardModule } from './reward/reward.module';

@Module({
  imports: [TodoModule, AuthModule, RewardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
