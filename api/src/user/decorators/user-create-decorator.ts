import { applyDecorators, Post } from "@nestjs/common"

export const UserCreateDecorator  =() =>{
    return applyDecorators(
        Post(),
    )
}