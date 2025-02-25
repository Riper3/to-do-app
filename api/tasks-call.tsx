import standardCall from './standard-call';
import { GetAllResponse } from './interfaces';

const getAll = (): Promise<GetAllResponse> => {
    return standardCall('tasks/get-all', 'GET');
}

const insert = (): any => {
    return standardCall('tasks/insert', 'POST');
}

const update = (id: number): any => {
    return standardCall(`tasks/update/${id}`, 'PUT');
}

const newDevice = (deviceId: string): any => {
    return standardCall('auth/new-device', 'POST', {device_id: deviceId});
}

export {getAll, insert, update, newDevice};