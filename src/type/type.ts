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

interface PageSetting {
	totalCount: number;
	pageSize: number;
	isEndOfPage: boolean;
}

export interface CTransactionResponse{
  transaction: {
    transactionId: number,
    propertyId: number,
    clientId: number,
    transactionDate: string,
    salePrice: number,
    commission: number,
    status: string
  },
  client: {
      clientId: number,
      userId: number,
      firstName: string,
      lastName: string,
      phone: string,
      email: string,
      address: string,
      role: string
  },
  property: {
      propertyId: number,
      agentId: number,
      address: string,
      city: string,
      state: string,
      zipCode: string,
      propertyType: string,
      price: number,
      size: number,
      numberOfBedrooms: number,
      numberOfBathrooms: number,
      yearBuilt: number,
      description: string,
      status: string,
      availiablityType: string,
      minrentalPeriod: number,
      approvedby: null,
      adddate: string,
      editdate: string
  }
}
// export interface TransApiResponse {
//   isSuccess:boolean,
//   isError: boolean,
//   data: {
//       pageSetting: {
//           totalCount: number,
//           pageSize: number,
//           isEndOfPage:boolean
//       },
//       lstTransaction: CTransactionResponse[];
//   };
// }

export interface Transactions {
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

export interface TAppointment {
	appointmentDate: string;
	appointmentTime: string;
	rawAppointmentTime: Date | null;
	status: "pending" | "done";
	notes?: string;
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

export interface HomeGroupProps {
	properties: Property[];
	propertyTypes: string[];
	agents: Agent[];
}

export interface State {
	id: number;
	name: string;
}

export interface PropertyResponse{
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

export interface ChangeStatus {
    propertyId: number,
    propertyStatus: string,
    approvedBy: string
}

export interface TResponse<T, D> {
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
