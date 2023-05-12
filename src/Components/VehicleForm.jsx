import React, { useEffect, useState } from 'react';
import { Button, Form, Accordion } from 'react-bootstrap';
import { newVehicle, getVehicle, getVehicles } from '../Services/vehicleService';
import MaterialTable from 'material-table';
import "../CSS/Forms.css";

const VehicleForm = () => {

    const [dataTable, setDataTable] = useState();

    const [vehicle, setVehicle] = useState({
        vehiclePlates: '',
        vehicleBranch: '',
        vehicleModell: '',
        vehicleModelYear: '',
        vehicleStatus: '',
    });

    const handleSetVehicle = (state) => {
        setVehicle(state);
    };

    const handleClickSaveBtn = async () => {

        const vehicleObj = (
            {
                vehiclePlates: vehicle.vehiclePlates,
                vehicleBranch: vehicle.vehicleBranch,
                vehicleModell: vehicle.vehicleModell,
                vehicleModelYear: vehicle.vehicleModelYear,
                vehicleStatus: vehicle.vehicleStatus
            }
        );
        
        newVehicle(
            vehicleObj,
            (data) => {
                SearchVehicle();
            }, 
            (error) => {
                console.error(error);
            },
        );

    };

    const SearchVehicle = async (e) => {
        getVehicles(
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
                            <Button variant='secondary' size='defautl' onClick={SearchVehicle}>Buscar</Button>
                        </div>
                    </div>
                    tabla
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className='mb-3'>
                <Accordion.Header>Formulario</Accordion.Header>
                <Accordion.Body>
            <Form id='vehicle-form' >
                <div class="row">
                    <div class="col-md-3">
                        <label for="vehicleId" class="form-label">Id de Unidad</label>
                        <input class="form-control form-control-default" id='vehicleId' type="text" disabled />
                    </div>
                    <div class="col-md-3">
                        <label for="vehiclesPlates" class="form-label">Placas de la Unidad</label>
                        <input class="form-control form-control-default" id='vehiclesPlates' type="text" placeholder="Escribe" />
                    </div>
                    <div class="col-md-3">
                        <label for="vehicleBranch" class="form-label">Marca de la Unidad</label>
                        <input class="form-control form-control-default" id='vehicleBranch' type="text" />
                    </div>
                    <div class="col-md-3">
                        <label for="vehicleModell" class="form-label">Modelo de la Unidad</label>
                        <input class="form-control form-control-default" id='vehicleModell' type="text" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3">
                        <label for="vehicleModelYear" class="form-label">Año de la Unidad</label>
                        <input class="form-control form-control-default" id='vehicleModelYear' type="text" />
                    </div>
                    <div class="col-md-3">
                        <label for="vehicleStatus" class="form-label">Estatus de la Unidad</label>
                        <input class="form-control form-control-default" id='vehicleStatus' type="text" placeholder="Escribe" />
                    </div>
                </div>
                <div class="row">
                    <div class='col-md-3 offset-md-9'>
                        <div className='d-grid'>
                            <Button variant='secondary' size='defautl' onClick={'return 0;'}>Guardar</Button>
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

export default VehicleForm;
