import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons'
import { Card, Col, ConfigProvider, Flex, Row, Statistic, Table, TableProps, Typography } from 'antd'
import LineChartDashboard from './LineChartDashboard'

interface statisticProps {
  title: String
  value: number
  precision?: number
  valueStyle?: {
    color: string
  }
  prefix?: any
  suffix?: string
}

interface agentActivityProps {
  agentName: string,
  sold: number,
  rented: number,
  salePrice: number,
  totalCommission: number
}

const columns: TableProps<agentActivityProps>['columns'] = [
  {
    title: 'Agent Name',
    dataIndex: 'agentName',
    key: 'name'
  },
  {
    title: 'Properties Sold',
    dataIndex: 'sold',
    key: 'sold',
    align: 'center'
  },
  {
    title: 'Properties Rented',
    dataIndex: 'rented',
    key: 'rented',
    align: 'center'
  },
  {
    title: 'Total Sales',
    dataIndex: 'salePrice',
    key: 'salePrice',
    align: 'center'
  },
  {
    title: 'Commission Earned',
    dataIndex: 'totalCommission',
    key: 'totalCommission',
    align: 'center'
  },
];

const data = [
  {
    agentName: 'agent1',
    sold: 2,
    rented: 4,
    salePrice: 60000,
    totalCommission: 900
  },
  {
    agentName: 'agent2',
    sold: 6,
    rented: 8,
    salePrice: 620000,
    totalCommission: 1900
  }
]

const CustomStatistic = (props: statisticProps) => {
  return (<ConfigProvider
    theme={{
      components: {
        Statistic: {
          contentFontSize: 18
        },
      },
    }}
  >
    <Statistic
      {...props}
    />
  </ConfigProvider>)
}

const HomePage = () => {
  return (
    <>
      <Typography.Title level={3}>Overview</Typography.Title>
      <Row gutter={[16, 16]} style={{marginBottom: 30}}>
        <Col span={12}>
          <Card bordered={false}>
            <Row gutter={[24, 24]}>
              <Col span={12}>
                <Flex gap={20} vertical>
                  <CustomStatistic
                    title="Agents"
                    value={500000}
                  />
                  <CustomStatistic
                    title="Clients"
                    value={4000}
                  />
                  <CustomStatistic
                    title="Properties"
                    value={504000}
                  />
                </Flex>
              </Col>
              <Col span={12}>
                <Flex gap={20} vertical>
                  <CustomStatistic
                    title="Property Sold Income"
                    value={500000}
                    precision={2}
                    valueStyle={{
                      color: '#3f8600',
                    }}
                    prefix={<ArrowUpOutlined />}
                    suffix="$"
                  />
                  <CustomStatistic
                    title="Property Rented Income"
                    value={4000}
                    precision={2}
                    valueStyle={{
                      color: 'orange',
                    }}
                    prefix={<ArrowDownOutlined />}
                    suffix="$"
                  />
                  <CustomStatistic
                    title="Total Revenue"
                    value={504000}
                    precision={2}
                    suffix="$"
                  />
                </Flex>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={12}>
            <LineChartDashboard />
        </Col>
      </Row>
      <Typography.Title level={3}>Top Agent Activity</Typography.Title>
      <Table columns={columns} dataSource={data} />
    </>
  )
}

export default HomePage