"use client";
import React from 'react'; 
import { Card } from 'primereact/card';

import "primereact/resources/themes/lara-light-cyan/theme.css";

export default function BasicCard() {
    return (

        <div className="card">
            <Card title="Pre-sale">
                <p className="m-0">
                   Order tickets for this cool event!
                </p>
            </Card>
        </div>
    )
}
        