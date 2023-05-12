import ApiRequestFactory from "../Utils/ApiRequestFactory";

const newVehicle = async (data, onSuccessCallBack, onErrorCallBack) => {
    ApiRequestFactory
        .post(`/vehicle/saveVehicle`, data)
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

const getVehicles = async (onSuccessCallBack, onErrorCallBack) => {
    ApiRequestFactory
        .get(`/vehicle/getVehicles`)
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
    newVehicle,
    getVehicles
};