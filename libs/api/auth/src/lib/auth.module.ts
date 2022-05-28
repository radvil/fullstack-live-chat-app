import { Module } from "@nestjs/common";
import { ApiUserModule } from "@radvil/api/user";

import { AuthController } from "./controller";
import { AuthService } from "./service/auth.service";

@Module({
  providers: [AuthService],
  exports: [AuthService],
  controllers: [AuthController],
  imports: [ApiUserModule],
})
export class ApiAuthModule {}
