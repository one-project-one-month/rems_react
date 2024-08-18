export interface Review {
  reviewId: number;
  userId: number;
  propertyId: number;
  rating: number;
  comments: string;
  dateCreated: Date;
}

export interface ClientData {
  data: {
    dataLst: Client[];
  };
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

export interface AgentData {
  data: Agent[];
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
  transactionId: number;
  transactionDate: Date;
  salePrice: number;
  commission: number;
  status: string;
}

export interface Transactions {
  transaction: Transaction;
  property: Property;
  client: Client;
}

export interface transactionResponse {
  isSuccess: string;
  isError: string;
  data: Object;
  message: string;
}

interface Images {
  imageId: number;
  propertyId: number;
  imageUrl: string;
  description: string;
  dateUploaded: string;
}

export interface Properties {
  property: Property;
  images: Images[];
  reviews: Review[];
}

export interface Property {
  propertyId: number;
  agent?: Agent;
  agentId?: number;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  propertyType: string;
  price: number;
  size: number;
  numberOfBedrooms: number;
  numberOfBathrooms: number;
  yearBuilt: number;
  description: string;
  status: string;
  availiablityType: string;
  minrentalPeriod: number;
  approvedby: string;
  adddate: Date;
  editdate: Date;
}
