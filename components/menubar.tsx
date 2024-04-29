"use client";
import React from 'react'; 
import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import "primereact/resources/themes/lara-light-cyan/theme.css";

export default function TAb() {
    const items: MenuItem[] = [
        {
            label: 'Tickets',
            icon: 'pi pi-home'
        },
        {
            label: 'LineUp',
            icon: 'pi pi-star'
        },
        {
            label: 'Info',
            icon: 'pi pi-star'
        },
        
        {
            label: 'Contact',
            icon: 'pi pi-envelope'
        }
    ];
    
    return (
        <div className="card">
            <Menubar model={items} />
        </div>
    )
}
        