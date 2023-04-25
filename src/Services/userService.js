import ApiRequestFactory from '../Utils/ApiRequestFactory';
import Encrypter from '../Utils/crypto-js'

const authentication = async (email, pass, onSuccessCallBack, onErrorCallBack) => {

    ApiRequestFactory
        .get(`/authentication/getUserAuth/params?email=` + email + `&pass=` + pass )
        .then((response) => {
            if (response.status === 200){
                onSuccessCallBack(response);
            }
            else {
                return ('Invalid login attempt');
            }
        }).catch((error) => {
            onErrorCallBack(error);
        });
}

export {
    authentication
};