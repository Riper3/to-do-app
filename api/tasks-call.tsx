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

export {getAll, insert, update};