import { CloseOutlined } from "@ant-design/icons"
import { useParams } from "react-router"
import { propertyData } from "./data-for-agent/propertyData"
import { reviewsData } from "./data-for-agent/reviewsData"
import PropertyDetails from "./PropertyDetails"
import Reviews from "./Reviews"
import { useState } from "react"

interface DetailPgProp {
  toggle?: () => void
}

const DetailPage: React.FC<DetailPgProp>= ({toggle}) => {

  const [currentPage, setCurrentPage] = useState('home');
  const {id} = useParams();

  const property = propertyData.find(property => property.propertyId.toString() === id);
  const review = reviewsData.filter(review => review.propertyId.toString() === property?.propertyId.toString());

  const renderPage = () => {
    switch (currentPage) {
      case 'propertyDetails':
        return <PropertyDetails property={property} />;
      case 'reviews':
        return <Reviews review={review}/>;
      default:
        return <PropertyDetails property={property}/>;
    }
  };

  console.log(property)

  return (
    <div  className="modal | w-[100vw] h-[100vh] z-[0] top-0 left-0 bottom-0 right-0 fixed">
      <div 
        className='overlay | w-[100vw] h-[100vh] top-0 left-0 bottom-0 z-[0] right-0 fixed bg-[rgba(49,49,49,0.8)]'
        onClick={toggle}
      >
      </div>

      <div className="detail-content | bg-gray-100 w-[100%] h-[100vh] absolute z-[99999999] top-[14%] xl:w-[85%] xl:h-[85vh] xl:left-[7%] overflow-auto rounded-md pt-10 xl:px-9 xl:pt-0">

        <nav className="w-[100%]">
          <ul className="w-[100%]  flex gap-5 justify-center items-center py-5">
            <li>
              <button 
                className={`text-[1.2rem] font-bold ${
                  currentPage === "propertyDetails" ? 'text-blue-400'
                  : 'text-black'
                }`}
                onClick={() => setCurrentPage('propertyDetails')}
              >
                Property
              </button>
            </li>
                |
            <li>
              <button 
                className={`text-[1.2rem] font-bold ${
                  currentPage === "reviews" ? 'text-blue-400'
                  : 'text-black'
                }`}
                onClick={() => setCurrentPage('reviews')}
              >
                Reviews
              </button>
            </li>
          </ul>
        </nav>
        {renderPage()}

        {/* ----------------- */}
        
        {/* close button */}
        <button 
          className=" text-[1.2rem] bg-gray-100 absolute top-[10px] right-[10px]"
        >
          <CloseOutlined className="text-[1.3rem]" onClick={toggle}/>
        </button>
      </div>
    </div>
  )
}

export default DetailPage
