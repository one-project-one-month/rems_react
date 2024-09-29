import { Button, Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "../../../login/login-context/AuthContext";
import { useGetAllPropertiesQuery } from "../../../services/admin/api/propertiesApi";
import { useGetClientUserIdQuery } from "../../../services/client/api/userIdApi";
import { updateClientId } from "../../../services/client/features/idSlice";
import { HomeProperties, PropertyResponse } from "../../../type/type";
import PropertyCard from "./PropertyCard";


const Home: React.FC = () => {
	const [propertyTypes] = useState<string[]>([
		"All",
		"Condominium",
		"Apartment",
		"Townhouses",
	]);
	const [page, setPage] = useState({ pageNumber: 1, pageSize: 10 });
	const [activeType, setActiveType] = useState("All");

	const dispatch = useDispatch();
	const { user } = useAuth();
	const userId = user?.UserId;

	const { data: userIdData } = useGetClientUserIdQuery({ userId })
	const clientData = userIdData?.data || null;

	useEffect(() => {
		dispatch(updateClientId(clientData))
	}, [clientData])

	const params = {
		...page,
		propertyType: activeType === "All" ? "" : activeType
	}

	const { isFetching, data: PropertyData } = useGetAllPropertiesQuery<PropertyResponse>(params);

	const properties: HomeProperties = PropertyData?.data ?? [];

	const nextPage = () => {
		setPage({ ...page, pageNumber: page.pageNumber + 1 });
	}

	const prevPage = () => {
		setPage({ ...page, pageNumber: page.pageNumber - 1 });
	}

	return (
		<div className='relative min-h-screen w-full overflow-hidden bg-orange-50'>
			{/* Fixed Background Image */}
			<div
				className='fixed inset-0 bg-cover bg-center'
				style={{
					backgroundImage:
						"url(https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvbWV8ZW58MHx8MHx8fDA%3D)",
				}}
			></div>

			{/* Black Overlay */}
			<div className='fixed inset-0 bg-black bg-opacity-30 z-10'></div>

			{/* Scrollable Content */}
			<div className='relative z-20 w-full pt-20 text-white'>
				<div className='w-full mx-auto'>
					<div className='mt-20'>
						<header className='text-center mb-8'>
							<h1 className='text-7xl font-bold mb-20'>
								Find Your Dream Home
							</h1>
							<p className='text-2xl'>
								We are a real estate agency that will help you{" "}
								<br /> find the best residence you dream of,
								let’s discuss your dream house?
							</p>
						</header>
						<div className='left-0 right-0 w-full max-w-[1600px] bg-white text-black'>
							<div className="px-10 py-10">
								{
									isFetching ? <Skeleton />
										:
										<>
											<ul className="text-black flex items-center justify-center gap-5 mb-5">
												{propertyTypes?.map((type, index) => (
													<li
														key={index}
														onClick={() => setActiveType(type)}
														className={`px-6 py-2 text-[16px] cursor-pointer rounded-md ${activeType === type
															? "bg-blue-500 text-white"
															: "border border-blue-500 text-blue-500"
															}`}
													>
														{type}
													</li>
												))}
											</ul>
											<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
												{properties.properties?.map((property) => (
													<PropertyCard key={property.property.propertyId} property={property} />
												))}
											</div>
											<div className="flex justify-center align-center mt-5">
												<Button
													disabled={page.pageNumber === 1}
													onClick={prevPage}
												>
													Prev
												</Button>
												<Button>{page.pageNumber}</Button>
												<Button
													disabled={properties.pageSetting.isEndOfPage}
													onClick={nextPage}
												>
													Next
												</Button>
											</div>
										</>
								}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
