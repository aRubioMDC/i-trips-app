import React, { useState } from 'react';
import OperatorForm from '../Components/OperatorForm';
import VehicleForm from '../Components/VehicleForm';

const CatalogForms = () => {

    const [catalogForm, setCatalogForm] = useState(0);

    return (
      <div class="container-fluid p-3">
        <div class="row">
            <div class="col-md-3">
                <select class="form-select" value={catalogForm} onChange={(event) => setCatalogForm(event.target.value)}>
                    <option value="0" selected>Seleccione</option>
                    <option value="1">Operador</option>
                    <option value="2">Vehiculo</option>
                    <option value="3">Cliente</option>
                </select>
            </div>
        </div>
        <div class="row">
            {(() => {
                switch (catalogForm) {
                case '0':
                    return <></>;
                case '1':
                    return <OperatorForm/>;
                case '2':
                    return <VehicleForm />;
                default:
                    return null;
            }
            })()}
        </div>
      </div>
    )
}

export default CatalogForms;
