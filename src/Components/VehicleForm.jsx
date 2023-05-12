import React, { useEffect, useState } from 'react';
import { Button, Form, Accordion } from 'react-bootstrap';
import { newOperator, getOperators } from '../Services/operatorService';
import MaterialTable from 'material-table';
import "../CSS/Forms.css";
import { getVehicles, newVehicle } from '../Services/vehicleService';

const VehicleForm = () => {

    const [dataTable, setDataTable] = useState();

    const [vehicle, setVehicle] = useState({
        vehiclePlates: '',
        VehicleBranch: '',
        VehicleModell: '',
        VehicleModelYear: '',
        VehicleStatus: '',
    });

    const handleSetVehicle = (state) => {
        setVehicle(state);
    };

    const handleClickSaveBtn = async () => {

        const vehicleObj = (
            {
                vehiclePlates: vehicle.vehiclePlates,
                VehicleBranch: vehicle.VehicleBranch,
                VehicleModell: vehicle.VehicleModell,
                VehicleModelYear: vehicle.VehicleModelYear,
                VehicleStatus: vehicle.VehicleStatus
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
                                <label for="vehicleId" class="form-label">Id de vehiculo</label>
                                <input class="form-control form-control-default" id='vehiculoId' type="text" disabled />
                            </div>
                            <div class="col-md-3">
                                <label for="vehiclePlates" class="form-label">Placas</label>
                                <input 
                                    class="form-control form-control-default" 
                                    id='vehiclePlates' 
                                    type="text" 
                                    placeholder="Escribe" 
                                    value={vehicle.vehiclePlates}
                                    onChange={(e) => { handleSetVehicle({ ...vehicle, vehiclePlates: e.target.value }) }}
                                />
                            </div>
                            <div class="col-md-3">
                                <label for="vehicleBranch" class="form-label">Marca</label>
                                <input 
                                    class="form-control form-control-default" 
                                    id='vehicleBranch' 
                                    type="text" 
                                    value={vehicle.VehicleBranch}
                                    onChange={(e) => { handleSetVehicle({ ...vehicle, VehicleBranch: e.target.value }) }}
                                />
                            </div>
                            <div class="col-md-3">
                                <label for="vehicleModelYear" class="form-label">Año </label>
                                <input 
                                    class="form-control form-control-default" 
                                    id='vehicleModelYear' 
                                    type="text" 
                                    value={vehicle.VehicleModelYear}
                                    onChange={(e) => { handleSetVehicle({ ...vehicle, VehicleModelYear: e.target.value }) }}
                                />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3">
                            <label for="vehicleModell" class="form-label">Modelo</label>
                                <input 
                                    class="form-control form-control-default" 
                                    id='vehicleModell' 
                                    type="text" 
                                    value={vehicle.VehicleModell}
                                    onChange={(e) => { handleSetVehicle({ ...vehicle, VehicleModell: e.target.value }) }}
                                />
                            </div>
                            <div class="col-md-3">
                                <label for="vehicleStatus" class="form-label">Status</label>
                                <input 
                                    class="form-control form-control-default" 
                                    id='vehicleStatus' 
                                    type="text" 
                                    placeholder="Escribe" 
                                    value={vehicle.VehicleStatus}
                                    onChange={(e) => { handleSetVehicle({ ...vehicle, VehicleStatus: e.target.value }) }}
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

export default VehicleForm;