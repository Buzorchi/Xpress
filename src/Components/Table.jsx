// import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './Service';


export default function BasicDemo() {
    
    const [products, setProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);

    useEffect(() => {
        ProductService.getProductsMini().then(data => setProducts(data));
    }, []);

    return (
        <div className="card">
            <DataTable value={products} tableStyle={{ minWidth: '50rem' }} selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)} >
                <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
                <Column field="firstName" header="First Name"></Column>
                <Column field="lastName" header="Last Name"></Column>
                <Column field="phoneNumber" header="Phone Number"></Column>
                <Column field="location" header="Location"></Column>
                <Column field="status" header="Status"></Column>
                <Column field="action" header="Action"></Column>
            </DataTable>
        </div>
    );
}

