import {
    applyDecorators, Post,
    UseGuards
} from '@nestjs/common';
import { ApiBody, ApiOperation } from '@nestjs/swagger';
import { LocalAuthGuard } from '../guards/local-auth.guard';
import { IsPublic } from './is-public.decorator';
  
  export const AuthDecoratorLogin = () => {
    return applyDecorators(
      IsPublic(),
      Post('login'),
      ApiBody({
        schema: {
          type: 'object',
          properties: {
            cpf: {
              type: 'string',
              description: 'Chave/Nome do documento na AWS-S3.',
              example: '00011100011',
            },
            password: {
              type: 'string',
              description: 'Chave/Nome do documento na AWS-S3.',
              example: 'Você@123',
            },
          },
        },
      }),
      UseGuards(LocalAuthGuard),
      ApiOperation({ summary: 'autentica o  usuário.' }),
    );
  };