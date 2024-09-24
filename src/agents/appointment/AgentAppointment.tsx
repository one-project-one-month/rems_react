import { useState } from "react"
import { Table, Tag, Alert } from "antd"
import { LoadingOutlined } from "@ant-design/icons"
import { useGetAppointmentsByAgentIdQuery } from "../../services/agent/api/appointment"

interface Appointment {
  appointmentId: number 
  agentName: string
  clientName: string
  appointmentDate: string
  appointmentTime: string
  agentPhoneNumber: string 
  status: string
  note: string 
  address: string
  city: string
  state: string
  price: number
  size: number
  numberOfBedrooms: number
  numberOfBathrooms: number
}

export default function AgentAppointment() {
  const AGENT_ID = 1
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  
  const { data, error, isLoading } = useGetAppointmentsByAgentIdQuery({
    id: AGENT_ID,
    pageNo: page - 1,
    pageSize: pageSize
  })
  

  const appointmentData = data?.data.appointmentDetails || [];


  const columns = [
    {
      title: "Client Name",
      dataIndex: "clientName",
      key: "clientName",
    },
    {
      title: "Appointment Date",
      dataIndex: "appointmentDate",
      key: "appointmentDate",
      render: (date: string) => new Date(date).toLocaleDateString(),
      sorter: (a: Appointment, b: Appointment) => new Date(a.appointmentDate).getTime() - new Date(b.appointmentDate).getTime(),
    },
    {
      title: "Appointment Time",
      dataIndex: "appointmentTime",
      key: "appointmentTime",
      render: (time: string) => new Date(`1970-01-01T${time}`).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      sorter: (a: Appointment, b: Appointment) => new Date(`1970-01-01T${a.appointmentTime}`).getTime() - new Date(`1970-01-01T${b.appointmentTime}`).getTime(),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => getStatusTag(status),
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
    },
    {
      title: "State",
      dataIndex: "state",
      key: "state",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price: number) => `$${price.toLocaleString()}`,
    },
    {
      title: "Size",
      dataIndex: "size",
      key: "size",
      render: (size: number) => `${size} sq ft`,
    },
    {
      title: "Bedrooms",
      dataIndex: "numberOfBedrooms",
      key: "numberOfBedrooms",
    },
    {
      title: "Bathrooms",
      dataIndex: "numberOfBathrooms",
      key: "numberOfBathrooms",
    },
   
  ]

  const getStatusTag = (status: string) => {
    const statusColors: { [key: string]: string } = {
      Approved: "green",
      pending: "gold",
      FDS: "red",
    }
    return (
      <Tag color={statusColors[status] || "default"} className="text-xs">
        {status}
      </Tag>
    )
  }

  if (isLoading) return <div className="flex justify-center items-center h-screen"><LoadingOutlined className="text-4xl" spin /></div>
  if (error) {
    console.error("API Error:", error)
    return <Alert message="Error loading appointments" type="error" />
  }

  return (
    
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Agent Appointments</h1>
      <Table 
        columns={columns} 
        dataSource={appointmentData} 
    
        pagination={{
          current: page,
          pageSize: pageSize,
          total: data?.data.pageSetting.totalCount,
          onChange: (page, pageSize) => {
            setPage(page)
            setPageSize(pageSize ?? 10)
          }
        }}
        className="w-full"
      />
    </div>
  )
}