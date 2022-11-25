import { applyDecorators, Controller } from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger"

export const UserDecorator  =() =>{
    return applyDecorators(
        //ApiBearerAuth(),
        ApiTags('Logon') ,
        Controller('logon'),
        //UseGuards(JwtAuthGuard),
    )
}