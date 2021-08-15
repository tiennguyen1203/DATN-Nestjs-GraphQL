import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';

@Module({
  providers: [JwtStrategy],
  imports: [PassportModule.register({ defaultStrategy: 'jwt' })],
})
export class AuthModule {}
