export interface Property {
  address: string;
  city: string;
  state: string;
  zip_code: string;
  price: number;
}

export interface Client {
  userId: number;
  clientId: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  role: string;
}

export interface Agent {
  agentId: number;
  userId: number;
  agencyName: string;
  licenseNumber: string;
  email: string;
  phoneNumber: string;
  address: string;
  role: string;
}

export interface Transaction {
  transaction_id: number;
  transaction_date: Date;
  sale_price: number;
  commission: number;
  status: string;
  property: Property;
  client: Client;
  agent: Agent;
}

export interface Properties {
  property_id: number;
  agent: Agent;
  address: string;
  city: string;
  state: string;
  zip_code: string;
  property_type: string;
  price: number;
  size: number;
  number_of_bedrooms: number;
  number_of_bathrooms: number;
  year_built: number;
  description: string;
  status: string;
  availability_type: string;
  min_rental_period: number;
  approved_by: string;
  add_date: Date;
  edit_date: Date;
}
