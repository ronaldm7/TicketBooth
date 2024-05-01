"use client";

import React from 'react';
import "/node_modules/primeflex/primeflex.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { Fieldset } from 'primereact/fieldset';
import { Card } from 'primereact/card';

import { Divider } from 'primereact/divider';

export default function Descriptioncard() {
    return (
        <div className="card">
        <Card title=" Welcome to the Essence of Soul Fest!">
        <div className="card flex justify-content-center">
            <p>
            Get ready to experience a night filled with Soulful House, Deep House, Afro House, and Amapiano music with delicious food and good vibes. Join us on Sat, Aug 17, 2024 at 8:00 PM at the Hofheimer Building on ALL 3 FLOORS for a night to remember. 
            </p>
            <Divider layout="vertical" />
            <p>
            Let the music move your soul and dance the night away with friends and loved ones. Don't miss out on this opportunity to immerse yourself in the Essence of soul!
            </p>
          
        </div>
        </Card>
    </div>
    )
}
        