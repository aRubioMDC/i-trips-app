import React from 'react'
import { CalendarPicker } from '@mui/lab'

const NewOrden = () => {
    return (
        <div class="container-fluid p-3">
            <div class="row">
                <div class="col-md-3">
                    <label for="operatorFisrtName" class="form-label">Operador</label>
                    <input 
                        class="form-control form-control-default" 
                        id='operatorFisrtName' 
                        type="text" 
                        placeholder="Escribe" 
                    />
                </div>
                <div class="col-md-3">
                    <label for="operatorFisrtName" class="form-label">Vehiculo</label>
                    <input 
                        class="form-control form-control-default" 
                        id='operatorFisrtName' 
                        type="text" 
                        placeholder="Escribe"  
                    />
                </div>
                <div class="col-md-3">
                    <label for="operatorFisrtName" class="form-label">Cliente</label>
                    <input 
                        class="form-control form-control-default" 
                        id='operatorFisrtName' 
                        type="text" 
                        placeholder="Escribe" 
                    />
                </div>
            </div>
            <div class="row">
                <div class="col-md-3">
                    <label for="operatorFisrtName" class="form-label">Ingenio</label>
                    <input 
                        class="form-control form-control-default" 
                        id='operatorFisrtName' 
                        type="text" 
                        placeholder="Escribe" 
                    /> 
                </div>
                <div class="col-md-3">
                    <label for="operatorFisrtName" class="form-label">Destino</label>
                    <input 
                        class="form-control form-control-default" 
                        id='operatorFisrtName' 
                        type="text" 
                        placeholder="Escribe" 
                    />
                </div>
            </div>
            <div class="row">
                <div class="col-md-3">
                    <label for="operatorFisrtName" class="form-label">Fecha de Carga</label>
                    <CalendarPicker placeholder="dd/mm/aaaa" showIcon />
                </div>
                <div class="col-md-3">
                    <label for="operatorFisrtName" class="form-label">Fecha de Entrega</label>
                    <CalendarPicker placeholder="dd/mm/aaaa" showIcon />
                </div>
            </div>
        </div>
    );
};

export default NewOrden;