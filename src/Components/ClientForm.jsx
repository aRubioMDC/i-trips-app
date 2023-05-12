import React, { useEffect, useState } from 'react';
import { Button, Form, Accordion } from 'react-bootstrap';
import { newOperator, getOperators } from '../Services/operatorService';
import MaterialTable from 'material-table';
import "../CSS/Forms.css";
import { getClients, newClient } from '../Services/clientService';

const ClientForm = () => {

    const [dataTable, setDataTable] = useState();

    const [client, setClient] = useState({
        clientFGivenName: '',
        clientSGivenName: '',
        clientFLastName: '',
        clientSLastName: '',
    });

    const handleSetClient = (state) => {
        setClient(state);
    };

    const handleClickSaveBtn = async () => {

        const clientObj = (
            {
                clientFGivenName: client.clientFGivenName,
                clientSGivenName: client.clientSGivenName,
                clientFLastName: client.clientFLastName,
                clientSLastName: client.clientSLastName
            }
        );
        
        newClient(
            clientObj,
            (data) => {
                SearchClient();
            }, 
            (error) => {
                console.error(error);
            },
        );

    };

    const SearchClient = async (e) => {
        getClients(
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
                            <Button variant='secondary' size='defautl' onClick={SearchClient}>Buscar</Button>
                        </div>
                    </div>
                    tabla
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className='mb-3'>
                <Accordion.Header>Formulario</Accordion.Header>
                <Accordion.Body>
                    <Form id='client-form' >
                        <div class="row">
                            <div class="col-md-3">
                                <label for="clientId" class="form-label">Id de Client</label>
                                <input class="form-control form-control-default" id='operatorId' type="text" disabled />
                            </div>
                            <div class="col-md-3">
                                <label for="clienteFisrtName" class="form-label">Primer Nombre</label>
                                <input 
                                    class="form-control form-control-default" 
                                    id='clienteFisrtName' 
                                    type="text" 
                                    placeholder="Escribe" 
                                    value={client.clientFGivenName}
                                    onChange={(e) => { handleSetClient({ ...client, clientFGivenName: e.target.value }) }}
                                />
                            </div>
                            <div class="col-md-3">
                                <label for="clientSecondName" class="form-label">Segundo Nombre</label>
                                <input 
                                    class="form-control form-control-default" 
                                    id='clientSecondName' 
                                    type="text" 
                                    value={client.clientSGivenName}
                                    onChange={(e) => { handleSetClient({ ...client, clientSGivenName: e.target.value }) }}
                                />
                            </div>
                            <div class="col-md-3">
                                <label for="clientFLastName" class="form-label">Primer Apellido</label>
                                <input 
                                    class="form-control form-control-default" 
                                    id='clientFLastName' 
                                    type="text" 
                                    value={client.clientFLastName}
                                    onChange={(e) => { handleSetClient({ ...client, clientFLastName: e.target.value }) }}
                                />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3">
                                <label for="clientSLastName" class="form-label">Segundo Apellido</label>
                                <input 
                                    class="form-control form-control-default" 
                                    id='clientSLastName' 
                                    type="text" 
                                    value={client.clientSLastName}
                                    onChange={(e) => { handleSetClient({ ...client, clientSLastName: e.target.value }) }}
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

export default ClientForm;