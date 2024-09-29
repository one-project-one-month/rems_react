import { Card, Carousel } from "antd";
import { Property, PropertyDataType } from "./data-for-agent/propertyData";
import { formatNumber } from "./AgentPropertyList";
import { Link } from "react-router-dom";


interface SingleCardProp {
  item: PropertyDataType;
  key: number;
  toggle?: () => void;
}

const SingleCard: React.FC<SingleCardProp> = ({item, key, toggle}) => {

  const imgs = item.images.map(img => (
    <img className="object-cover w-[100%] h-[200px]" src={img.imgBase64} />
  ))

  return (
    
      <Card
        className="shadow-lg w-[100%] col-span-3 lg:col-span-1 hover:shadow-2xl transition-all z-[0] ease-in-out duration-300 rounded-sm cursor-pointer"
        cover={
          <Carousel arrows infinite={false}>
            {imgs}
          </Carousel> 
        }
        
        key={key}
      >
        <Link to={`${item.property.propertyId.toString()}`} className="hover:text-gray-400" onClick={toggle}>
          <h1>
            <span className="text-[1.125rem] font-bold">${formatNumber(item.property.price).toLocaleString()}</span> MMK
          </h1>
          <div className="space-y-2">
            <div className="flex gap-2 flex-wrap">
              <p className="font-bold font-lato text-[1rem] ">Ba: {item.property.numberOfBathrooms} |</p>
              <p className="font-bold font-lato text-[1rem] ">Bds: {item.property.numberOfBedrooms} |</p>
              <p className="font-bold font-lato text-[1rem] ">{item.property.size} sqft - </p>
              <p className="font-bold font-lato text-[1rem] ">{item.property.propertyType} for {item.property.availiablityType}</p>
            </div>
            <h3 className="font-raleWay font-bold">{item.property.address}</h3>
            <div className="flex gap-2">
              <p className="font-bold font-lato text-[1rem] ">{item.property.city} | </p>
              <p className="font-bold font-lato text-[1rem] ">{item.property.state} state</p>
            </div>
          </div>
        </Link>
      </Card>  
    
  )
}

export default SingleCard;