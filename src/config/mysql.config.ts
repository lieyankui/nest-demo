import { getEnvConfig } from '../utils';
import { EnvConfig } from './interfaces';

export default () => {
    const envConfig = getEnvConfig<EnvConfig>();
    return envConfig;
}