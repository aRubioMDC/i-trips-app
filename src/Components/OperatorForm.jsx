import React, { useEffect, useState } from 'react';
import { Button, Form, Accordion } from 'react-bootstrap';
import { newOperator, getOperators } from '../Services/operatorService';
import MaterialTable from 'material-table';
import "../CSS/Forms.css";

const OperatorForm = () => {

    const [dataTable, setDataTable] = useState();

    const [operator, setOperator] = useState({
        operatorFGivenName: '',
        operatorSGivenName: '',
        operatorFLastName: '',
        operatorSLastName: '',
        licence: '',
        phoneNumber: '',
        status: '',
        vehicleId: '',
    });

    const handleSetOperator = (state) => {
        setOperator(state);
    };

    const handleClickSaveBtn = async () => {

        const operatorObj = (
            {
                operatorFGivenName: operator.operatorFGivenName,
                operatorSGivenName: operator.operatorSGivenName,
                operatorFLastName: operator.operatorFLastName,
                operatorSLastName: operator.operatorSLastName,
                licence: operator.licence,
                phoneNumber: operator.phoneNumber,
                status: operator.status,
                vehicleId: operator.vehicleId
            }
        );
        
        newOperator(
            operatorObj,
            (data) => {
                SearchOperator();
            }, 
            (error) => {
                console.error(error);
            },
        );

    };

    const SearchOperator = async (e) => {
        getOperators(
            (data) => {
                setDataTable(data);
                console.log(data)
            }, 
            (error) => {
                console.error(error);
            },
        );
    }

    return (
        <div className="container-fluid p-3">
            <Accordion defaultActiveKey="0" alwaysOpen>
            <Accordion.Item eventKey="0" className='mb-3'>
                <Accordion.Header>Buscar</Accordion.Header>
                <Accordion.Body>
                    <div className='row'>
                        <div className='col-md-2 offset-md-10'>
                            <Button variant='secondary' size='defautl' onClick={SearchOperator}>Buscar</Button>
                        </div>
                    </div>
                    tabla
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className='mb-3'>
                <Accordion.Header>Formulario</Accordion.Header>
                <Accordion.Body>
                    <Form id='operator-form' >
                        <div class="row">
                            <div class="col-md-3">
                                <label for="operatorId" class="form-label">Id de Operador</label>
                                <input class="form-control form-control-default" id='operatorId' type="text" disabled />
                            </div>
                            <div class="col-md-3">
                                <label for="operatorFisrtName" class="form-label">Primer Nombre</label>
                                <input 
                                    class="form-control form-control-default" 
                                    id='operatorFisrtName' 
                                    type="text" 
                                    placeholder="Escribe" 
                                    value={operator.operatorFGivenName}
                                    onChange={(e) => { handleSetOperator({ ...operator, operatorFGivenName: e.target.value }) }}
                                />
                            </div>
                            <div class="col-md-3">
                                <label for="operatorSecondName" class="form-label">Segundo Nombre</label>
                                <input 
                                    class="form-control form-control-default" 
                                    id='operatorSecondName' 
                                    type="text" 
                                    value={operator.operatorSGivenName}
                                    onChange={(e) => { handleSetOperator({ ...operator, operatorSGivenName: e.target.value }) }}
                                />
                            </div>
                            <div class="col-md-3">
                                <label for="operatorFLastName" class="form-label">Primer Apellido</label>
                                <input 
                                    class="form-control form-control-default" 
                                    id='operatorFLastName' 
                                    type="text" 
                                    value={operator.operatorFLastName}
                                    onChange={(e) => { handleSetOperator({ ...operator, operatorFLastName: e.target.value }) }}
                                />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3">
                                <label for="operatorSLastName" class="form-label">Segundo Apellido</label>
                                <input 
                                    class="form-control form-control-default" 
                                    id='operatorSLastName' 
                                    type="text" 
                                    value={operator.operatorSLastName}
                                    onChange={(e) => { handleSetOperator({ ...operator, operatorSLastName: e.target.value }) }}
                                />
                            </div>
                            <div class="col-md-3">
                                <label for="operatorLicence" class="form-label">Licencia</label>
                                <input 
                                    class="form-control form-control-default" 
                                    id='operatorLicence' 
                                    type="text" 
                                    placeholder="Escribe" 
                                    value={operator.licence}
                                    onChange={(e) => { handleSetOperator({ ...operator, licence: e.target.value }) }}
                                />
                            </div>
                            <div class="col-md-3">
                                <label for="operatorTelNumber" class="form-label">No. Telefono</label>
                                <input 
                                    class="form-control form-control-default" 
                                    id='operatorTelNumber' 
                                    type="text" 
                                    placeholder="Ingrese" 
                                    value={operator.phoneNumber}
                                    onChange={(e) => { handleSetOperator({ ...operator, phoneNumber: e.target.value }) }}
                                />
                            </div>
                            <div class="col-md-3">
                                <label for="operatorStatus" class="form-label">Estatus del Operador</label>
                                <input 
                                    class="form-control form-control-default" 
                                    id='operatorId' 
                                    type="text" 
                                    value={operator.status}
                                    onChange={(e) => { handleSetOperator({ ...operator, status: e.target.value }) }}
                                />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3">
                                <label for="vehicleId" class="form-label">Id de Vehiculo</label>
                                <input 
                                    class="form-control form-control-default" 
                                    id='operatorId' 
                                    type="text" 
                                    value={operator.vehicleId}
                                    onChange={(e) => { handleSetOperator({ ...operator, vehicleId: e.target.value }) }}
                                />
                            </div>
                        </div>
                        <div class="row">
                            <div class='col-md-3 offset-md-9'>
                                <div className='d-grid'>
                                    <Button variant='secondary' size='defautl' onClick={handleClickSaveBtn}>Guardar</Button>
                                </div>
                            </div>
                        </div>
                    </Form>
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
            
        </div>
    );
};

export default OperatorForm;