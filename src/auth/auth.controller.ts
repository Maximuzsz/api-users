import { Request } from '@nestjs/common';
import { User } from '@prisma/client';
import { AuthService } from './auth.service';
import { AuthDecorator } from './decorators/auth-decorator';
import { AuthDecoratorLogin } from './decorators/auth-decorator-login';
import { CurrentUser } from './decorators/current-user.decorator';
import { AuthRequest } from './models/AuthRequest';

@AuthDecorator()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @AuthDecoratorLogin()
  async login(@Request() req: AuthRequest, @CurrentUser() user: User) {
    const token = this.authService.login(req.user);
    return {
      token,
      user
    };
  }
}