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
    pageSetting: PageSetting;
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
  data: {
    agentList: Agent[];
    pageSetting: PageSetting;
  };
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
  contractDate: string;
  transactionId: number;
  transactionDate: Date;
  salePrice: number;
  commission: number;
  status: string;
}

export interface PageSetting {
  totalCount: number;
  pageSize: number;
  isEndOfPage: boolean;
}

export interface CTransactionResponse {
  transaction: {
    transactionId: number;
    propertyId: number;
    clientId: number;
    transactionDate: string;
    salePrice: number;
    commission: number;
    status: string;
  };
  client: {
    clientId: number;
    userId: number;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    address: string;
    role: string;
  };
  property: {
    propertyId: number;
    agentId: number;
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
    approvedby: null;
    adddate: string;
    editdate: string;
  };
}

export interface Transactions {
  status: any;
  transaction: Transaction;
  property: Property;
  client: Client;
}

export interface TransApiResponse {
  isFetching: boolean;
  data: {
    isSuccess: boolean;
    isError: boolean;
    data: {
      pageSetting: PageSetting;
      lstTransaction: Transactions[];
    };
  };
}
interface LabelAndValue {
  label: string;
  content: string;
}
export interface TransDetailByID {
  data: {
    userData: LabelAndValue[];
    transData: LabelAndValue[];
  };
}

interface Images {
  imageId: number;
  propertyId: number;
  imageUrl: string;
  description: string;
  dateUploaded: string;
}

export interface Appointment {
	clientName: string;
	agentName: string;
	appointmentDate: string;
	appointmentTime: string;
	status: string;
	notes: string | null;
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

export interface TAppointment {
  appointmentId: number;
  agentName: string;
  clientName: string;
  appointmentDate: string;
  appointmentTime: string;
  notes?: string;
  address: string,
  city: string,
  state: string,
  price: 0.00,
  size: 0.00,
  numberOfBedrooms: 0,
  numberOfBathrooms: 0
}

export interface Agent {
  agent_id: number;
  agentName: string;
}

export interface City {
  id: number;
  name: string;
  state_id: number;
}

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

export interface HomeProperties{
	properties: Properties[];
	pageSetting: PageSetting
}

export interface HomeGroupProps {
  properties: HomeProperties;
  propertyTypes: string[];
  agents: Agent[];
  pagination: () => void;
}

export interface State {
  id: number;
  name: string;
}


export interface PropertyResponse {
  isFetching: boolean;
  data: {
    isSuccess: boolean;
    isError: boolean;
    data: {
      pageSetting: PageSetting;
      properties: Properties[];
    };
  };
}

export interface PropertyIdResponse{
	isFetching: boolean;
	data: {
		isSuccess: boolean;
		isError: boolean;
		data: Properties
	};
}

export interface ChangeStatus {
  propertyId: number;
  propertyStatus: string;
  approvedBy: string;
}

export interface TResponse<T> {
  isSuccess: boolean;
  isError: boolean;
  data: {
    pageSetting: {
      totalCount: number;
      pageSize: number;
      isEndOfPage: boolean;
    };
    appointmentDetails: T[];
  };
}

