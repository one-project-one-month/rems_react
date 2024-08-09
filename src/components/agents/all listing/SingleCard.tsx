import { Card, Carousel } from "antd";
import { Property } from "./data-for-agent/propertyData";
import { formatNumber } from "./PropertyList";
import { Link } from "react-router-dom";


interface SingleCardProp {
  item: Property;
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
        <Link to={`/listing/${item.propertyId.toString()}`} className="hover:text-gray-400" onClick={toggle}>
          <h1>
            <span className="text-[1.125rem] font-bold">${formatNumber(item.price).toLocaleString()}</span> MMK
          </h1>
          <div className="flex gap-2 flex-wrap">
            <p>Ba: {item.numberOfBathrooms} |</p>
            <p>Bds: {item.numberOfBedrooms} |</p>
            <p>{item.size} sqft - </p>
            <p>{item.availiablityType} for {item.propertyType}</p>
          </div>
          <h3>{item.address}</h3>
          <div className="flex gap-2">
            <p>{item.city} | </p>
            <p>{item.state} state</p>
          </div>
        </Link>
      </Card>  
    
  )
}

export default SingleCard;
