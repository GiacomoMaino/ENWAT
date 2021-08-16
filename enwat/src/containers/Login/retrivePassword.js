import React from 'react';

import useForm from './useForm';

import RetreivePasswordUI from '../../layout/Login/retrivePassword';

const RetrivePasswordContainer = () =>{

    return(
        <RetreivePasswordUI form={useForm()}/>
    )
};

export default RetrivePasswordContainer;