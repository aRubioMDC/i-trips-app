import React from 'react'
import { Button, Form } from 'react-bootstrap';
import "../CSS/Forms.css";

const VehicleForm = () => {

    

    return (
        <div className="container-fluid p-3">
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
                        <label for="vehicleModel" class="form-label">Modelo de la Unidad</label>
                        <input class="form-control form-control-default" id='vehicleModel' type="text" />
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
        </div>
    );
};

export default VehicleForm;
