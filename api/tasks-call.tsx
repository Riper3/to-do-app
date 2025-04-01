import standardCall from './standard-call';
import { GetAllResponse } from './interfaces';

const getAll = (): Promise<GetAllResponse> => {
    return standardCall('tasks/get', 'GET');
}

const insert = (dueDate: string, name: string): any => {
    return standardCall('tasks/insert', 'POST', {name: name, due_date: dueDate});
}

const update = (id: number): any => {
    return standardCall(`tasks/update/${id}`, 'PUT');
}

const newDevice = (deviceId: string): any => {
    return standardCall('auth/new-device', 'POST', {device_id: deviceId});
}

export {getAll, insert, update, newDevice};