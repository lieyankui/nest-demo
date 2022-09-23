import { v4 as uuidv4, V4Options } from 'uuid';

// get uuid
export function getUuid(options?: V4Options) {
    return uuidv4(options || {});
}