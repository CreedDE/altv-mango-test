import { Module } from '@altv-mango/client';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [AuthModule],
})
export class RootModule {}
