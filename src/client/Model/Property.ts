import { Agent } from "./Agent";

// types.ts
export interface PropertyImage {
    url: string;
    description: string;
  }
  
  export interface Property {
    id: string;
    agent_id: number;
    address: string;
    city_id: string;
    state_id: string;
    zipCode: string;
    propertyType: string;
    price: number;
    size: number;
    numberOfBedrooms: number;
    numberOfBathrooms: number;
    yearBuilt: number;
    description: string;
    status: string;
    dateListed: string; // or Date if you plan to convert it to a Date object
    images: PropertyImage[];
  }
  
  export interface HomeGroupProps {
    properties: Property[];
    propertyTypes: string[];
    agents:Agent[]
  }
  