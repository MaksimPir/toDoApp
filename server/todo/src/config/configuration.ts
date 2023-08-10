import { EnumConfig } from './enumConfig/enumConfig';
import { registerAs } from '@nestjs/config';
import { pgConfig } from './postgres.config';
export const databaseConfig= registerAs(EnumConfig.DATABASE,()=>({
    pg:{
        ...pgConfig()
    }
}));