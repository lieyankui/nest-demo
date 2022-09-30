import { Injectable } from "@nestjs/common";
import { UserService } from "../../../modules/user/user.service";

@Injectable()
export class AuthService {
    constructor(private userService: UserService) {}

    async validateUser(name: string, pwd: string) {
        const user = await this.userService.findOneByUsername(name);
        if (!!user && user.pwd === pwd) {
            const {pwd, ...rslt} = user;
            return rslt;
        }
        return null;
    }
}