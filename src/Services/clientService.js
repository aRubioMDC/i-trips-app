import ApiRequestFactory from "../Utils/ApiRequestFactory";

const newClient = async (data, onSuccessCallBack, onErrorCallBack) => {
    ApiRequestFactory
        .post(`/client/saveClient`, data)
        .then((response) => {
            if (response.status === 200){
                onSuccessCallBack(response.data);
            }
            else {
                return ('Invalid login attempt');
            }
        }).catch((error) => {
            onErrorCallBack(error);
        });
};

const getClients = async (onSuccessCallBack, onErrorCallBack) => {
    ApiRequestFactory
        .get(`/client/getClients`)
        .then((response) => {
            if(response.status === 200) {
                onSuccessCallBack(response.data);
            }
            else{
                return('');
            }
        }).catch((error) => {
            onErrorCallBack(error);
        });
};

export {
    newClient,
    getClients
};