"use client";
import React from 'react'; 
import { Card } from 'primereact/card';

import "primereact/resources/themes/lara-light-cyan/theme.css";

export default function GaCard() {
    return (

        <div className="card">
            <Card title="GA Sale">
                <p className="m-0">
                   Order tickets for this cool event!
                </p>
            </Card>
        </div>
    )
}
        