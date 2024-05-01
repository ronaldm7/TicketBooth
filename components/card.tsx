"use client";
import React from "react";
import {Card, CardHeader, CardBody, } from "@nextui-org/react";
import Image from "next/image";
import title from "../img/img_2414.jpg";

import "primereact/resources/themes/lara-light-cyan/theme.css";

export default function BasicCard() {
    return (

        <Card className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">General Admisson</p>
          <small className="text-default-500">$10.00 (3.18 Service Fee)</small>
          <h4 className="font-bold text-large">Pre-Sale</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={title}
            width={270}
          />
        </CardBody>
      </Card>
    )
}
        