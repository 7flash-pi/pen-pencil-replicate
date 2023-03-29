

export class BaseService {

    httpClient;

    constructor(httpClient) {
        this.httpClient = httpClient;
    }

    isEmpty(obj) {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    }
}

