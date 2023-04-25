import ApiRequestFactory from "../Utils/ApiRequestFactory";

const newOperator = async (data, onSuccessCallBack, onErrorCallBack) => {
    ApiRequestFactory
        .post(`/operator/saveOperator`, data)
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

const getOperators = async (onSuccessCallBack, onErrorCallBack) => {
    ApiRequestFactory
        .get(`/operator/getOperators`)
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
    newOperator,
    getOperators
};