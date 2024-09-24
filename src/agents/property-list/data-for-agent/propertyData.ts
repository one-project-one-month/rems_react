export interface Property {
  propertyId: number | string;
  images: image[];
  agentImageUrl: string;
  address: string;
  agentId: number | string;
  agencyName: string;
  city: string;
  state: string;
  zipCode: number | string;
  availiablityType: string;
  propertyType: string;
  price: number;
  size: number;
  numberOfBedrooms: number;
  numberOfBathrooms: number;
  yearBuilt: number;
  description: string;
  status: boolean;
  dateListed: number;
  approvedby: string;
  adddate: string;
  editdate: string;
  minrentalPeriod: number;
}

export interface PropertyDataType {
  property: Property;
  images: image[];
  reviews: Review[];
}

export interface Review {
  reviewId: number,
  userId: number,
  propertyId: number,
  rating: number,
  comments: string,
  dateCreated: string
}

export interface image {
  imgBase64: string;
  description: string;
}

export interface PropertiesResponse {
  properties: PropertyDataType[];
}


 

// export const propertyData:Property[] = [
//   {
//     propertyId: 1,
//     images: [
//       {
//         imgBase64: "https://media.istockphoto.com/id/1442148484/photo/3d-rendering-of-modern-suburban-house-in-the-garden.jpg?s=1024x1024&w=is&k=20&c=i8cd6RNJDjHiU3VGW5LbYxVZehRhZQXaiKrsayQB1l8=",
//         description: "front"
//       },
//       {
//         imgBase64: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
//         description: "back"
//       },
//       {
//         imgBase64: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600",
//         description: "side"
//       }
//     ],
//     agentImageUrl:"" ,
//     address: "No.77, Parami Road, Hlaing Township",
//     agentId: "1",
//     propertyType: "Sale",
//     agencyName: "",
//     city: "Yangon",
//     state: "Yangon",
//     zipCode: "",
//     availiablityType: "Condos",
//     price: 100000000,
//     size: 54,
//     numberOfBedrooms: 5,
//     numberOfBathrooms: 3,
//     yearBuilt: 2014,
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus orci, placerat nec imperdiet sed, sagittis at enim. Donec et dictum ligula. Suspendisse potenti. Vestibulum consectetur pharetra nulla a tempor. In pulvinar lacus in augue condimentum ornare. Sed viverra massa eget magna sollicitudin tempor. Integer efficitur scelerisque nulla et egestas. Donec sit amet ultrices diam, non facilisis sapien. Proin ultricies sapien eget urna tempus, a lacinia mauris euismod. Vivamus mi purus, mollis ac pharetra a, varius in massa. Quisque quis lectus sed nunc luctus maximus vitae et ligula. Fusce venenatis, nisi vitae vulputate condimentum, elit ante blandit nunc, sed consequat purus nisi at diam.",
//     status: false,
//     dateListed: Date.now()
//   },
//   {
//     propertyId: 2,
//     images: [
//       {
//         imgBase64: "https://media.istockphoto.com/id/1442148484/photo/3d-rendering-of-modern-suburban-house-in-the-garden.jpg?s=1024x1024&w=is&k=20&c=i8cd6RNJDjHiU3VGW5LbYxVZehRhZQXaiKrsayQB1l8=",
//         description: ""
//       },
//       {
//         imgBase64: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
//         description: ""
//       },
//       {
//         imgBase64: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600",
//         description: ""
//       }
//     ],
//     agentImageUrl:"" ,
//     address: "No.77, Parami Road, Hlaing Township",
//     agentId: "2",
//     propertyType: "Sold",
//     agencyName: "",
//     city: "Mandalay",
//     state: "Mandalay",
//     zipCode: "",
//     availiablityType: "Townhomes",
//     price: 1000000000,
//     size: 54,
//     numberOfBedrooms: 5,
//     numberOfBathrooms: 4,
//     yearBuilt: 2014,
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus orci, placerat nec imperdiet sed, sagittis at enim. Donec et dictum ligula. Suspendisse potenti. Vestibulum consectetur pharetra nulla a tempor. In pulvinar lacus in augue condimentum ornare. Sed viverra massa eget magna sollicitudin tempor. Integer efficitur scelerisque nulla et egestas. Donec sit amet ultrices diam, non facilisis sapien. Proin ultricies sapien eget urna tempus, a lacinia mauris euismod. Vivamus mi purus, mollis ac pharetra a, varius in massa. Quisque quis lectus sed nunc luctus maximus vitae et ligula. Fusce venenatis, nisi vitae vulputate condimentum, elit ante blandit nunc, sed consequat purus nisi at diam.",
//     status: false,
//     dateListed: Date.now()
//   },
//   {
//     propertyId: 3,
//     images: [
//       {
//         imgBase64: "https://media.istockphoto.com/id/1442148484/photo/3d-rendering-of-modern-suburban-house-in-the-garden.jpg?s=1024x1024&w=is&k=20&c=i8cd6RNJDjHiU3VGW5LbYxVZehRhZQXaiKrsayQB1l8=",
//         description: ""
//       },
//       {
//         imgBase64: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
//         description: ""
//       },
//       {
//         imgBase64: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600",
//         description: ""
//       }
//     ],
//     agentImageUrl:"" ,
//     address: "No.77, Parami Road, Hlaing Township",
//     agentId: "3",
//     propertyType: "Sold",
//     agencyName: "",
//     city: "Mawlamyine",
//     state: "Mon",
//     zipCode: "",
//     availiablityType: "Lands",
//     price: 300000000,
//     size: 54,
//     numberOfBedrooms: 5,
//     numberOfBathrooms: 5,
//     yearBuilt: 2014,
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus orci, placerat nec imperdiet sed, sagittis at enim. Donec et dictum ligula. Suspendisse potenti. Vestibulum consectetur pharetra nulla a tempor. In pulvinar lacus in augue condimentum ornare. Sed viverra massa eget magna sollicitudin tempor. Integer efficitur scelerisque nulla et egestas. Donec sit amet ultrices diam, non facilisis sapien. Proin ultricies sapien eget urna tempus, a lacinia mauris euismod. Vivamus mi purus, mollis ac pharetra a, varius in massa. Quisque quis lectus sed nunc luctus maximus vitae et ligula. Fusce venenatis, nisi vitae vulputate condimentum, elit ante blandit nunc, sed consequat purus nisi at diam.",
//     status: false,
//     dateListed: Date.now()
//   },
//   {
//     propertyId: 4,
//     images: [
//       {
//         imgBase64: "https://media.istockphoto.com/id/1442148484/photo/3d-rendering-of-modern-suburban-house-in-the-garden.jpg?s=1024x1024&w=is&k=20&c=i8cd6RNJDjHiU3VGW5LbYxVZehRhZQXaiKrsayQB1l8=",
//         description: ""
//       },
//       {
//         imgBase64: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
//         description: ""
//       },
//       {
//         imgBase64: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600",
//         description: ""
//       }
//     ],
//     agentImageUrl:"" ,
//     address: "No.77, Parami Road, Hlaing Township",
//     agentId: "4",
//     propertyType: "Sale",
//     agencyName: "",
//     city: "Pyay",
//     state: "Bago",
//     zipCode: "",
//     availiablityType: "Apartments",
//     price: 300000000,
//     size: 54,
//     numberOfBedrooms: 2,
//     numberOfBathrooms: 4,
//     yearBuilt: 2014,
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus orci, placerat nec imperdiet sed, sagittis at enim. Donec et dictum ligula. Suspendisse potenti. Vestibulum consectetur pharetra nulla a tempor. In pulvinar lacus in augue condimentum ornare. Sed viverra massa eget magna sollicitudin tempor. Integer efficitur scelerisque nulla et egestas. Donec sit amet ultrices diam, non facilisis sapien. Proin ultricies sapien eget urna tempus, a lacinia mauris euismod. Vivamus mi purus, mollis ac pharetra a, varius in massa. Quisque quis lectus sed nunc luctus maximus vitae et ligula. Fusce venenatis, nisi vitae vulputate condimentum, elit ante blandit nunc, sed consequat purus nisi at diam.",
//     status: false,
//     dateListed: Date.now()
//   },
//   {
//     propertyId: 5,
//     images: [
//       {
//         imgBase64: "https://media.istockphoto.com/id/1442148484/photo/3d-rendering-of-modern-suburban-house-in-the-garden.jpg?s=1024x1024&w=is&k=20&c=i8cd6RNJDjHiU3VGW5LbYxVZehRhZQXaiKrsayQB1l8=",
//         description: ""
//       },
//       {
//         imgBase64: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
//         description: ""
//       },
//       {
//         imgBase64: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600",
//         description: ""
//       }
//     ],
//     agentImageUrl:"" ,
//     address: "No.77, Parami Road, Hlaing Township",
//     agentId: "5",
//     propertyType: "Rent",
//     agencyName: "",
//     city: "Mawlamyine",
//     state: "Mon",
//     zipCode: "",
//     availiablityType: "Apartments",
//     price: 300000000,
//     size: 54,
//     numberOfBedrooms: 4,
//     numberOfBathrooms: 5,
//     yearBuilt: 2014,
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus orci, placerat nec imperdiet sed, sagittis at enim. Donec et dictum ligula. Suspendisse potenti. Vestibulum consectetur pharetra nulla a tempor. In pulvinar lacus in augue condimentum ornare. Sed viverra massa eget magna sollicitudin tempor. Integer efficitur scelerisque nulla et egestas. Donec sit amet ultrices diam, non facilisis sapien. Proin ultricies sapien eget urna tempus, a lacinia mauris euismod. Vivamus mi purus, mollis ac pharetra a, varius in massa. Quisque quis lectus sed nunc luctus maximus vitae et ligula. Fusce venenatis, nisi vitae vulputate condimentum, elit ante blandit nunc, sed consequat purus nisi at diam.",
//     status: false,
//     dateListed: Date.now()
//   },
//   {
//     propertyId: 6,
//     images: [
//       {
//         imgBase64: "https://media.istockphoto.com/id/1442148484/photo/3d-rendering-of-modern-suburban-house-in-the-garden.jpg?s=1024x1024&w=is&k=20&c=i8cd6RNJDjHiU3VGW5LbYxVZehRhZQXaiKrsayQB1l8=",
//         description: ""
//       },
//       {
//         imgBase64: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
//         description: ""
//       },
//       {
//         imgBase64: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600",
//         description: ""
//       }
//     ],
//     agentImageUrl:"" ,
//     address: "No.77, Parami Road, Hlaing Township",
//     agentId: "6",
//     propertyType: "Sale",
//     agencyName: "",
//     city: "Than Twal",
//     state: "Rakhine",
//     zipCode: "",
//     availiablityType: "Manufactured",
//     price: 15000000000,
//     size: 54,
//     numberOfBedrooms: 4,
//     numberOfBathrooms: 2,
//     yearBuilt: 2014,
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus orci, placerat nec imperdiet sed, sagittis at enim. Donec et dictum ligula. Suspendisse potenti. Vestibulum consectetur pharetra nulla a tempor. In pulvinar lacus in augue condimentum ornare. Sed viverra massa eget magna sollicitudin tempor. Integer efficitur scelerisque nulla et egestas. Donec sit amet ultrices diam, non facilisis sapien. Proin ultricies sapien eget urna tempus, a lacinia mauris euismod. Vivamus mi purus, mollis ac pharetra a, varius in massa. Quisque quis lectus sed nunc luctus maximus vitae et ligula. Fusce venenatis, nisi vitae vulputate condimentum, elit ante blandit nunc, sed consequat purus nisi at diam.",
//     status: false,
//     dateListed: Date.now()
//   },
//   {
//     propertyId: 7,
//     images: [
//       {
//         imgBase64: "https://media.istockphoto.com/id/1442148484/photo/3d-rendering-of-modern-suburban-house-in-the-garden.jpg?s=1024x1024&w=is&k=20&c=i8cd6RNJDjHiU3VGW5LbYxVZehRhZQXaiKrsayQB1l8=",
//         description: ""
//       },
//       {
//         imgBase64: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
//         description: ""
//       },
//       {
//         imgBase64: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600",
//         description: ""
//       }
//     ],
//     agentImageUrl:"" ,
//     address: "No.77, Parami Road, Hlaing Township",
//     agentId: "7",
//     propertyType: "Rent",
//     agencyName: "",
//     city: "Pyay",
//     state: "Bago",
//     zipCode: "",
//     availiablityType: "Houses",
//     price: 7000000000,
//     size: 54,
//     numberOfBedrooms: 5,
//     numberOfBathrooms: 6,
//     yearBuilt: 2014,
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus orci, placerat nec imperdiet sed, sagittis at enim. Donec et dictum ligula. Suspendisse potenti. Vestibulum consectetur pharetra nulla a tempor. In pulvinar lacus in augue condimentum ornare. Sed viverra massa eget magna sollicitudin tempor. Integer efficitur scelerisque nulla et egestas. Donec sit amet ultrices diam, non facilisis sapien. Proin ultricies sapien eget urna tempus, a lacinia mauris euismod. Vivamus mi purus, mollis ac pharetra a, varius in massa. Quisque quis lectus sed nunc luctus maximus vitae et ligula. Fusce venenatis, nisi vitae vulputate condimentum, elit ante blandit nunc, sed consequat purus nisi at diam.",
//     status: false,
//     dateListed: Date.now()
//   },
//   {
//     propertyId: 8,
//     images: [
//       {
//         imgBase64: "https://media.istockphoto.com/id/1442148484/photo/3d-rendering-of-modern-suburban-house-in-the-garden.jpg?s=1024x1024&w=is&k=20&c=i8cd6RNJDjHiU3VGW5LbYxVZehRhZQXaiKrsayQB1l8=",
//         description: ""
//       },
//       {
//         imgBase64: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
//         description: ""
//       },
//       {
//         imgBase64: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600",
//         description: ""
//       }
//     ],
//     agentImageUrl:"" ,
//     address: "No.77, Parami Road, Hlaing Township",
//     agentId: "8",
//     propertyType: "Sale",
//     agencyName: "",
//     city: "Yangon",
//     state: "Yangon",
//     zipCode: "",
//     availiablityType: "Houses",
//     price: 9000000000,
//     size: 54,
//     numberOfBedrooms: 5,
//     numberOfBathrooms: 6,
//     yearBuilt: 2014,
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus orci, placerat nec imperdiet sed, sagittis at enim. Donec et dictum ligula. Suspendisse potenti. Vestibulum consectetur pharetra nulla a tempor. In pulvinar lacus in augue condimentum ornare. Sed viverra massa eget magna sollicitudin tempor. Integer efficitur scelerisque nulla et egestas. Donec sit amet ultrices diam, non facilisis sapien. Proin ultricies sapien eget urna tempus, a lacinia mauris euismod. Vivamus mi purus, mollis ac pharetra a, varius in massa. Quisque quis lectus sed nunc luctus maximus vitae et ligula. Fusce venenatis, nisi vitae vulputate condimentum, elit ante blandit nunc, sed consequat purus nisi at diam.",
//     status: false,
//     dateListed: Date.now()
//   },
//   {
//     propertyId: 9,
//     images: [
//       {
//         imgBase64: "https://media.istockphoto.com/id/1442148484/photo/3d-rendering-of-modern-suburban-house-in-the-garden.jpg?s=1024x1024&w=is&k=20&c=i8cd6RNJDjHiU3VGW5LbYxVZehRhZQXaiKrsayQB1l8=",
//         description: ""
//       },
//       {
//         imgBase64: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
//         description: ""
//       },
//       {
//         imgBase64: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600",
//         description: ""
//       }
//     ],
//     agentImageUrl:"" ,
//     address: "No.77, Parami Road, Hlaing Township",
//     agentId: "9",
//     propertyType: "Rent",
//     agencyName: "",
//     city: "Mandalay",
//     state: "Mandalay",
//     zipCode: "",
//     availiablityType: "Condos",
//     price: 13000000000,
//     size: 54,
//     numberOfBedrooms: 5,
//     numberOfBathrooms: 6,
//     yearBuilt: 2014,
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus orci, placerat nec imperdiet sed, sagittis at enim. Donec et dictum ligula. Suspendisse potenti. Vestibulum consectetur pharetra nulla a tempor. In pulvinar lacus in augue condimentum ornare. Sed viverra massa eget magna sollicitudin tempor. Integer efficitur scelerisque nulla et egestas. Donec sit amet ultrices diam, non facilisis sapien. Proin ultricies sapien eget urna tempus, a lacinia mauris euismod. Vivamus mi purus, mollis ac pharetra a, varius in massa. Quisque quis lectus sed nunc luctus maximus vitae et ligula. Fusce venenatis, nisi vitae vulputate condimentum, elit ante blandit nunc, sed consequat purus nisi at diam.",
//     status: false,
//     dateListed: Date.now()
//   },
//   {
//     propertyId: 10,
//     images: [
//       {
//         imgBase64: "https://media.istockphoto.com/id/1442148484/photo/3d-rendering-of-modern-suburban-house-in-the-garden.jpg?s=1024x1024&w=is&k=20&c=i8cd6RNJDjHiU3VGW5LbYxVZehRhZQXaiKrsayQB1l8=",
//         description: ""
//       },
//       {
//         imgBase64: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
//         description: ""
//       },
//       {
//         imgBase64: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600",
//         description: ""
//       }
//     ],
//     agentImageUrl:"" ,
//     address: "No.77, Parami Road, Hlaing Township",
//     agentId: "10",
//     propertyType: "Sale",
//     agencyName: "",
//     city: "Bago",
//     state: "Bago",
//     zipCode: "",
//     availiablityType: "Houses",
//     price: 500000000,
//     size: 54,
//     numberOfBedrooms: 2,
//     numberOfBathrooms: 1,
//     yearBuilt: 2014,
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus orci, placerat nec imperdiet sed, sagittis at enim. Donec et dictum ligula. Suspendisse potenti. Vestibulum consectetur pharetra nulla a tempor. In pulvinar lacus in augue condimentum ornare. Sed viverra massa eget magna sollicitudin tempor. Integer efficitur scelerisque nulla et egestas. Donec sit amet ultrices diam, non facilisis sapien. Proin ultricies sapien eget urna tempus, a lacinia mauris euismod. Vivamus mi purus, mollis ac pharetra a, varius in massa. Quisque quis lectus sed nunc luctus maximus vitae et ligula. Fusce venenatis, nisi vitae vulputate condimentum, elit ante blandit nunc, sed consequat purus nisi at diam.",
//     status: false,
//     dateListed: Date.now()
//   },
//   {
//     propertyId: 11,
//     images: [
//       {
//         imgBase64: "https://media.istockphoto.com/id/1442148484/photo/3d-rendering-of-modern-suburban-house-in-the-garden.jpg?s=1024x1024&w=is&k=20&c=i8cd6RNJDjHiU3VGW5LbYxVZehRhZQXaiKrsayQB1l8=",
//         description: ""
//       },
//       {
//         imgBase64: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
//         description: ""
//       },
//       {
//         imgBase64: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600",
//         description: ""
//       }
//     ],
//     agentImageUrl:"" ,
//     address: "No.77, Parami Road, Hlaing Township",
//     agentId: "10",
//     propertyType: "Rent",
//     agencyName: "",
//     city: "Bago",
//     state: "Bago",
//     zipCode: "",
//     availiablityType: "Houses",
//     price: 200000000,
//     size: 54,
//     numberOfBedrooms: 2,
//     numberOfBathrooms: 1,
//     yearBuilt: 2014,
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus orci, placerat nec imperdiet sed, sagittis at enim. Donec et dictum ligula. Suspendisse potenti. Vestibulum consectetur pharetra nulla a tempor. In pulvinar lacus in augue condimentum ornare. Sed viverra massa eget magna sollicitudin tempor. Integer efficitur scelerisque nulla et egestas. Donec sit amet ultrices diam, non facilisis sapien. Proin ultricies sapien eget urna tempus, a lacinia mauris euismod. Vivamus mi purus, mollis ac pharetra a, varius in massa. Quisque quis lectus sed nunc luctus maximus vitae et ligula. Fusce venenatis, nisi vitae vulputate condimentum, elit ante blandit nunc, sed consequat purus nisi at diam.",
//     status: false,
//     dateListed: Date.now()
//   },
//   {
//     propertyId: 12,
//     images: [
//       {
//         imgBase64: "https://media.istockphoto.com/id/1442148484/photo/3d-rendering-of-modern-suburban-house-in-the-garden.jpg?s=1024x1024&w=is&k=20&c=i8cd6RNJDjHiU3VGW5LbYxVZehRhZQXaiKrsayQB1l8=",
//         description: ""
//       },
//       {
//         imgBase64: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
//         description: ""
//       },
//       {
//         imgBase64: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600",
//         description: ""
//       }
//     ],
//     agentImageUrl:"" ,
//     address: "No.77, Parami Road, Hlaing Township",
//     agentId: "10",
//     propertyType: "Rent",
//     agencyName: "",
//     city: "Bago",
//     state: "Bago",
//     zipCode: "",
//     availiablityType: "Houses",
//     price: 400000000,
//     size: 54,
//     numberOfBedrooms: 2,
//     numberOfBathrooms: 1,
//     yearBuilt: 2014,
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus orci, placerat nec imperdiet sed, sagittis at enim. Donec et dictum ligula. Suspendisse potenti. Vestibulum consectetur pharetra nulla a tempor. In pulvinar lacus in augue condimentum ornare. Sed viverra massa eget magna sollicitudin tempor. Integer efficitur scelerisque nulla et egestas. Donec sit amet ultrices diam, non facilisis sapien. Proin ultricies sapien eget urna tempus, a lacinia mauris euismod. Vivamus mi purus, mollis ac pharetra a, varius in massa. Quisque quis lectus sed nunc luctus maximus vitae et ligula. Fusce venenatis, nisi vitae vulputate condimentum, elit ante blandit nunc, sed consequat purus nisi at diam.",
//     status: false,
//     dateListed: Date.now()
//   },
//   {
//     propertyId: 13,
//     images: [
//       {
//         imgBase64: "https://media.istockphoto.com/id/1442148484/photo/3d-rendering-of-modern-suburban-house-in-the-garden.jpg?s=1024x1024&w=is&k=20&c=i8cd6RNJDjHiU3VGW5LbYxVZehRhZQXaiKrsayQB1l8=",
//         description: ""
//       },
//       {
//         imgBase64: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
//         description: ""
//       },
//       {
//         imgBase64: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600",
//         description: ""
//       }
//     ],
//     agentImageUrl:"" ,
//     address: "No.77, Parami Road, Hlaing Township",
//     agentId: "10",
//     propertyType: "Sale",
//     agencyName: "",
//     city: "Bago",
//     state: "Bago",
//     zipCode: "",
//     availiablityType: "Houses",
//     price: 300000000,
//     size: 54,
//     numberOfBedrooms: 2,
//     numberOfBathrooms: 1,
//     yearBuilt: 2014,
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus orci, placerat nec imperdiet sed, sagittis at enim. Donec et dictum ligula. Suspendisse potenti. Vestibulum consectetur pharetra nulla a tempor. In pulvinar lacus in augue condimentum ornare. Sed viverra massa eget magna sollicitudin tempor. Integer efficitur scelerisque nulla et egestas. Donec sit amet ultrices diam, non facilisis sapien. Proin ultricies sapien eget urna tempus, a lacinia mauris euismod. Vivamus mi purus, mollis ac pharetra a, varius in massa. Quisque quis lectus sed nunc luctus maximus vitae et ligula. Fusce venenatis, nisi vitae vulputate condimentum, elit ante blandit nunc, sed consequat purus nisi at diam.",
//     status: false,
//     dateListed: Date.now()
//   },
//   {
//     propertyId: 14,
//     images: [
//       {
//         imgBase64: "https://media.istockphoto.com/id/1442148484/photo/3d-rendering-of-modern-suburban-house-in-the-garden.jpg?s=1024x1024&w=is&k=20&c=i8cd6RNJDjHiU3VGW5LbYxVZehRhZQXaiKrsayQB1l8=",
//         description: ""
//       },
//       {
//         imgBase64: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
//         description: ""
//       },
//       {
//         imgBase64: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600",
//         description: ""
//       }
//     ],
//     agentImageUrl:"" ,
//     address: "No.77, Parami Road, Hlaing Township",
//     agentId: "10",
//     propertyType: "Sold",
//     agencyName: "",
//     city: "Bago",
//     state: "Bago",
//     zipCode: "",
//     availiablityType: "Houses",
//     price: 6000000000,
//     size: 54,
//     numberOfBedrooms: 2,
//     numberOfBathrooms: 1,
//     yearBuilt: 2014,
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus orci, placerat nec imperdiet sed, sagittis at enim. Donec et dictum ligula. Suspendisse potenti. Vestibulum consectetur pharetra nulla a tempor. In pulvinar lacus in augue condimentum ornare. Sed viverra massa eget magna sollicitudin tempor. Integer efficitur scelerisque nulla et egestas. Donec sit amet ultrices diam, non facilisis sapien. Proin ultricies sapien eget urna tempus, a lacinia mauris euismod. Vivamus mi purus, mollis ac pharetra a, varius in massa. Quisque quis lectus sed nunc luctus maximus vitae et ligula. Fusce venenatis, nisi vitae vulputate condimentum, elit ante blandit nunc, sed consequat purus nisi at diam.",
//     status: false,
//     dateListed: Date.now()
//   },
//   {
//     propertyId: 15,
//     images: [
//       {
//         imgBase64: "https://media.istockphoto.com/id/1442148484/photo/3d-rendering-of-modern-suburban-house-in-the-garden.jpg?s=1024x1024&w=is&k=20&c=i8cd6RNJDjHiU3VGW5LbYxVZehRhZQXaiKrsayQB1l8=",
//         description: ""
//       },
//       {
//         imgBase64: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
//         description: ""
//       },
//       {
//         imgBase64: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600",
//         description: ""
//       }
//     ],
//     agentImageUrl:"" ,
//     address: "No.77, Parami Road, Hlaing Township",
//     agentId: "10",
//     propertyType: "Sold",
//     agencyName: "",
//     city: "Bago",
//     state: "Bago",
//     zipCode: "",
//     availiablityType: "Land",
//     price: 14000000000,
//     size: 54,
//     numberOfBedrooms: 2,
//     numberOfBathrooms: 1,
//     yearBuilt: 2014,
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus orci, placerat nec imperdiet sed, sagittis at enim. Donec et dictum ligula. Suspendisse potenti. Vestibulum consectetur pharetra nulla a tempor. In pulvinar lacus in augue condimentum ornare. Sed viverra massa eget magna sollicitudin tempor. Integer efficitur scelerisque nulla et egestas. Donec sit amet ultrices diam, non facilisis sapien. Proin ultricies sapien eget urna tempus, a lacinia mauris euismod. Vivamus mi purus, mollis ac pharetra a, varius in massa. Quisque quis lectus sed nunc luctus maximus vitae et ligula. Fusce venenatis, nisi vitae vulputate condimentum, elit ante blandit nunc, sed consequat purus nisi at diam.",
//     status: false,
//     dateListed: Date.now()
//   },
//   {
//     propertyId: 16,
//     images: [
//       {
//         imgBase64: "https://media.istockphoto.com/id/1442148484/photo/3d-rendering-of-modern-suburban-house-in-the-garden.jpg?s=1024x1024&w=is&k=20&c=i8cd6RNJDjHiU3VGW5LbYxVZehRhZQXaiKrsayQB1l8=",
//         description: ""
//       },
//       {
//         imgBase64: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
//         description: ""
//       },
//       {
//         imgBase64: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600",
//         description: ""
//       }
//     ],
//     agentImageUrl:"" ,
//     address: "No.77, Parami Road, Hlaing Township",
//     agentId: "10",
//     propertyType: "Rent",
//     agencyName: "",
//     city: "Bago",
//     state: "Bago",
//     zipCode: "",
//     availiablityType: "Manufactured",
//     price: 800000000,
//     size: 54,
//     numberOfBedrooms: 2,
//     numberOfBathrooms: 1,
//     yearBuilt: 2014,
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus orci, placerat nec imperdiet sed, sagittis at enim. Donec et dictum ligula. Suspendisse potenti. Vestibulum consectetur pharetra nulla a tempor. In pulvinar lacus in augue condimentum ornare. Sed viverra massa eget magna sollicitudin tempor. Integer efficitur scelerisque nulla et egestas. Donec sit amet ultrices diam, non facilisis sapien. Proin ultricies sapien eget urna tempus, a lacinia mauris euismod. Vivamus mi purus, mollis ac pharetra a, varius in massa. Quisque quis lectus sed nunc luctus maximus vitae et ligula. Fusce venenatis, nisi vitae vulputate condimentum, elit ante blandit nunc, sed consequat purus nisi at diam.",
//     status: false,
//     dateListed: Date.now()
//   },
//   {
//     propertyId: 17,
//     images: [
//       {
//         imgBase64: "https://media.istockphoto.com/id/1442148484/photo/3d-rendering-of-modern-suburban-house-in-the-garden.jpg?s=1024x1024&w=is&k=20&c=i8cd6RNJDjHiU3VGW5LbYxVZehRhZQXaiKrsayQB1l8=",
//         description: ""
//       },
//       {
//         imgBase64: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
//         description: ""
//       },
//       {
//         imgBase64: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600",
//         description: ""
//       }
//     ],
//     agentImageUrl:"" ,
//     address: "No.77, Parami Road, Hlaing Township",
//     agentId: "10",
//     propertyType: "Sale",
//     agencyName: "",
//     city: "Bago",
//     state: "Bago",
//     zipCode: "",
//     availiablityType: "Lands",
//     price: 400000000,
//     size: 54,
//     numberOfBedrooms: 2,
//     numberOfBathrooms: 1,
//     yearBuilt: 2014,
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus orci, placerat nec imperdiet sed, sagittis at enim. Donec et dictum ligula. Suspendisse potenti. Vestibulum consectetur pharetra nulla a tempor. In pulvinar lacus in augue condimentum ornare. Sed viverra massa eget magna sollicitudin tempor. Integer efficitur scelerisque nulla et egestas. Donec sit amet ultrices diam, non facilisis sapien. Proin ultricies sapien eget urna tempus, a lacinia mauris euismod. Vivamus mi purus, mollis ac pharetra a, varius in massa. Quisque quis lectus sed nunc luctus maximus vitae et ligula. Fusce venenatis, nisi vitae vulputate condimentum, elit ante blandit nunc, sed consequat purus nisi at diam.",
//     status: false,
//     dateListed: Date.now()
//   },
//   {
//     propertyId: 18,
//     images: [
//       {
//         imgBase64: "https://media.istockphoto.com/id/1442148484/photo/3d-rendering-of-modern-suburban-house-in-the-garden.jpg?s=1024x1024&w=is&k=20&c=i8cd6RNJDjHiU3VGW5LbYxVZehRhZQXaiKrsayQB1l8=",
//         description: ""
//       },
//       {
//         imgBase64: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
//         description: ""
//       },
//       {
//         imgBase64: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600",
//         description: ""
//       }
//     ],
//     agentImageUrl:"" ,
//     address: "No.77, Parami Road, Hlaing Township",
//     agentId: "10",
//     propertyType: "Sale",
//     agencyName: "",
//     city: "Bago",
//     state: "Bago",
//     zipCode: "",
//     availiablityType: "Townhomes",
//     price: 500000000,
//     size: 54,
//     numberOfBedrooms: 2,
//     numberOfBathrooms: 1,
//     yearBuilt: 2014,
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus orci, placerat nec imperdiet sed, sagittis at enim. Donec et dictum ligula. Suspendisse potenti. Vestibulum consectetur pharetra nulla a tempor. In pulvinar lacus in augue condimentum ornare. Sed viverra massa eget magna sollicitudin tempor. Integer efficitur scelerisque nulla et egestas. Donec sit amet ultrices diam, non facilisis sapien. Proin ultricies sapien eget urna tempus, a lacinia mauris euismod. Vivamus mi purus, mollis ac pharetra a, varius in massa. Quisque quis lectus sed nunc luctus maximus vitae et ligula. Fusce venenatis, nisi vitae vulputate condimentum, elit ante blandit nunc, sed consequat purus nisi at diam.",
//     status: false,
//     dateListed: Date.now()
//   },
//   {
//     propertyId: 19,
//     images: [
//       {
//         imgBase64: "https://media.istockphoto.com/id/1442148484/photo/3d-rendering-of-modern-suburban-house-in-the-garden.jpg?s=1024x1024&w=is&k=20&c=i8cd6RNJDjHiU3VGW5LbYxVZehRhZQXaiKrsayQB1l8=",
//         description: ""
//       },
//       {
//         imgBase64: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
//         description: ""
//       },
//       {
//         imgBase64: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600",
//         description: ""
//       }
//     ],
//     agentImageUrl:"" ,
//     address: "No.77, Parami Road, Hlaing Township",
//     agentId: "10",
//     propertyType: "Sale",
//     agencyName: "",
//     city: "Bago",
//     state: "Bago",
//     zipCode: "",
//     availiablityType: "Lands",
//     price: 11000000000,
//     size: 54,
//     numberOfBedrooms: 2,
//     numberOfBathrooms: 1,
//     yearBuilt: 2014,
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus orci, placerat nec imperdiet sed, sagittis at enim. Donec et dictum ligula. Suspendisse potenti. Vestibulum consectetur pharetra nulla a tempor. In pulvinar lacus in augue condimentum ornare. Sed viverra massa eget magna sollicitudin tempor. Integer efficitur scelerisque nulla et egestas. Donec sit amet ultrices diam, non facilisis sapien. Proin ultricies sapien eget urna tempus, a lacinia mauris euismod. Vivamus mi purus, mollis ac pharetra a, varius in massa. Quisque quis lectus sed nunc luctus maximus vitae et ligula. Fusce venenatis, nisi vitae vulputate condimentum, elit ante blandit nunc, sed consequat purus nisi at diam.",
//     status: false,
//     dateListed: Date.now()
//   },
//   {
//     propertyId: 20,
//     images: [
//       {
//         imgBase64: "https://media.istockphoto.com/id/1442148484/photo/3d-rendering-of-modern-suburban-house-in-the-garden.jpg?s=1024x1024&w=is&k=20&c=i8cd6RNJDjHiU3VGW5LbYxVZehRhZQXaiKrsayQB1l8=",
//         description: ""
//       },
//       {
//         imgBase64: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
//         description: ""
//       },
//       {
//         imgBase64: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600",
//         description: ""
//       }
//     ],
//     agentImageUrl:"" ,
//     address: "No.77, Parami Road, Hlaing Township",
//     agentId: "10",
//     propertyType: "Sold",
//     agencyName: "",
//     city: "Bago",
//     state: "Bago",
//     zipCode: "",
//     availiablityType: "Apartments",
//     price: 500000000,
//     size: 54,
//     numberOfBedrooms: 2,
//     numberOfBathrooms: 1,
//     yearBuilt: 2014,
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus orci, placerat nec imperdiet sed, sagittis at enim. Donec et dictum ligula. Suspendisse potenti. Vestibulum consectetur pharetra nulla a tempor. In pulvinar lacus in augue condimentum ornare. Sed viverra massa eget magna sollicitudin tempor. Integer efficitur scelerisque nulla et egestas. Donec sit amet ultrices diam, non facilisis sapien. Proin ultricies sapien eget urna tempus, a lacinia mauris euismod. Vivamus mi purus, mollis ac pharetra a, varius in massa. Quisque quis lectus sed nunc luctus maximus vitae et ligula. Fusce venenatis, nisi vitae vulputate condimentum, elit ante blandit nunc, sed consequat purus nisi at diam.",
//     status: false,
//     dateListed: Date.now()
//   },
// ]