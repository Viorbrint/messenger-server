import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { TestModule } from './test/test.module';

@Module({
  imports: [PrismaModule, UsersModule, TestModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
