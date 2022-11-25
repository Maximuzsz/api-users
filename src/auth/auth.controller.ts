import { Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDecorator } from './decorators/auth-decorator';
import { AuthDecoratorLogin } from './decorators/auth-decorator-login';
import { AuthRequest } from './models/AuthRequest';

@AuthDecorator()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @AuthDecoratorLogin()
  async login(@Request() req: AuthRequest) {
    return this.authService.login(req.user);
  }
}