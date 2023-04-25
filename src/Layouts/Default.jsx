import React from "react";
import { Row, Tabs, Tab } from "react-bootstrap";
import CatalogForms from "./CatalogForms";
import Toggle from "../Components/Toggle";
import "bootstrap/dist/css/bootstrap.min.css"
import "../CSS/NavTab.css"


const Default = () => {
    
    return (
        <div className="p-3 m-0" >
            <Row className="justify-content-center m-0">
                <Tabs justify variant="tabs" defaultActiveKey="newOrder" className="m-0 p-0">
                    <Tab eventKey="newOrder" title="Nueva Orden">
                        Nueva Orden
                    </Tab>
                    <Tab eventKey="report" title="Reportes">
                        Reportes
                    </Tab>
                    <Tab eventKey="catalogs" title="Catalogos">
                        <CatalogForms/>
                    </Tab>
                </Tabs>
            </Row>
        </div>
    )
}

export default Default;