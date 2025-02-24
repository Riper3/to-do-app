interface RequestModel {
    method: string,
    headers: any,
    body?: any
}

const standardCall = async (endpoint: string, method: string, body: object = {}): Promise<any> => {
    try {
       const requestModel: RequestModel = {
            method: method,
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            }
        };

        if(method !== 'GET') requestModel.body = JSON.stringify(body);

        const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/api/${endpoint}`, requestModel);

        const json = await response.json();

        return json.data;
    } catch (error) {
        console.error(error);
    }
};

export default standardCall;