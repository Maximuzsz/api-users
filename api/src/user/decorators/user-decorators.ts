import { applyDecorators, Controller } from "@nestjs/common"

export const UserDecorator  =() =>{
    return applyDecorators(
        //ApiBearerAuth(),
        //ApiTags('Logon') ,
        Controller('logon'),
        //UseGuards(JwtAuthGuard),
    )
}