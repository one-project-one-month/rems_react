import { useState } from "react"
import { Table, Tag, message, Popconfirm, Alert, Button, Space } from "antd"
import { CheckOutlined, CloseOutlined, LoadingOutlined } from "@ant-design/icons"
import { useGetAppointmentsByAgentIdQuery, useUpdateAppointmentsStatusMutation } from "../../services/agent/api/appointment"

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
  
  const [updateAppointmentsStatus] = useUpdateAppointmentsStatusMutation()
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
    {
      title: "Action",
      key: "action",
      render: (_: any, record: Appointment) => {
        console.log("Record:", record);  
        return checkStatus(record.status, record.appointmentId);
      },
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
  const checkStatus = (status: string, appointmentId: number) => {
 
    if (status) {
      
        return (
          <Space>
            <Popconfirm
              title="Approve Appointment?"
              description="Are you sure you want to approve this appointment?"
              onConfirm={async () => {
                try {
                  await updateAppointmentsStatus({
                    id: AGENT_ID,
                    // appointmentId,
                    data: { status: "Approved" },
                    appointmentId: 0
                  }).unwrap()
                  message.success("Appointment approved")
                } catch (error) {
                  message.error("Failed to approve appointment")
                  console.error("Approval error:", error)
                }
              }}
              onCancel={() => {
                message.error("Approval aborted")
              }}
              okText="Yes"
              cancelText="No"
            >
              <Button type="primary" icon={<CheckOutlined />} size="small">
                Approve
              </Button>
            </Popconfirm>
            <Popconfirm
              title="Cancel Appointment?"
              description="Are you sure you want to cancel this appointment?"
              onConfirm={async () => {
                try {
                  await updateAppointmentsStatus({
                    id: AGENT_ID,
                    appointmentId,
                    data: { status: "FDS" },
                  }).unwrap()
                  message.success("Appointment cancelled")
                } catch (error) {
                  message.error("Failed to cancel appointment")
                  console.error("Cancellation error:", error)
                }
              }}
              onCancel={() => {
                message.error("Cancellation aborted")
              }}
              okText="Yes"
              cancelText="No"
            >
              <Button danger icon={<CloseOutlined />} size="small">
                Cancel
              </Button>
            </Popconfirm>
          </Space>
        )
    }
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
        rowKey="appointmentId"
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