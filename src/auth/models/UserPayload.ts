export interface UserPayload{
  sub: string;
  cpf: string;
  iat?: number;
  exp?: number;
}