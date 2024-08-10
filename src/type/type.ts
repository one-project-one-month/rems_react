export interface Property {
    address: string,
    city: string,
    state: string,
    zip_code: string,
    price: number
}

export interface Client {
    first_name: string,
    last_name: string,
    phone: string,
    email: string
}

export interface Agent {
    agency_name: string,
    license_number: string,
    phone: string,
    email: string
}

export interface Transaction {
    transactionId: number,
    transactionDate: Date,
    salePrice: number,
    commission: number,
    status: string,
    property: number,
    buyerId: Client,
    sellerId: null,
    agentId: null,
}

export interface transactionResponse {
    isSuccess: string,
    isError: string,
    data: Object
    message: string
}

export interface Properties {
    property_id: number,
    agent: Agent,
    address: string,
    city: string,
    state: string,
    zip_code: string,
    property_type: string,
    price: number,
    size: number,
    number_of_bedrooms: number,
    number_of_bathrooms: number,
    year_built: number,
    description: string,
    status: string,
    availability_type: string,
    min_rental_period: number,
    approved_by: string,
    add_date: Date,
    edit_date: Date
}