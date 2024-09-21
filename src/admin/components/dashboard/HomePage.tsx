import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons'
import { Card, Col, ConfigProvider, Flex, Row, Skeleton, Statistic, Table, TableProps, Typography } from 'antd'
import LineChartDashboard from './LineChartDashboard'
import { AgentActivity, DashboardData, useGetDashboardDataQuery } from '../../../services/admin/api/dashboardApi'

interface statisticProps {
  title: String
  value?: number
  precision?: number
  valueStyle?: {
    color: string
  }
  prefix?: any
  suffix?: string
}

const columns: TableProps<AgentActivity>['columns'] = [
  {
    title: 'Agent Name',
    dataIndex: 'agentName',
    key: 'name'
  },
  {
    title: 'Properties Sold',
    dataIndex: 'sellProperty',
    key: 'sellProperty',
    align: 'center'
  },
  {
    title: 'Properties Rented',
    dataIndex: 'rentedProperty',
    key: 'rentedProperty',
    align: 'center'
  },
  {
    title: 'Total Sales',
    dataIndex: 'totalSales',
    key: 'totalSales',
    align: 'center'
  },
  {
    title: 'Commission Earned',
    dataIndex: 'commissionEarned',
    key: 'commissionEarned',
    align: 'center'
  },
];

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
  const { isFetching, data } = useGetDashboardDataQuery();

  const dashboardData: DashboardData = data?.data?? {};

  const {overview, weeklyActivity, agentActivity } = dashboardData;

  return (
    <>
      <Typography.Title level={3}>Overview</Typography.Title>
      <>
        {
          isFetching ? <Skeleton /> : <>
            <Row gutter={[16, 16]} style={{ marginBottom: 30 }}>
              <Col span={12}>
                <Card bordered={false}>
                  <Row gutter={[24, 24]}>
                    <Col span={12}>
                      <Flex gap={20} vertical>
                        <CustomStatistic
                          title="Agents"
                          value={overview[0]?.agents}
                        />
                        <CustomStatistic
                          title="Clients"
                          value={overview[0]?.clients}
                        />
                        <CustomStatistic
                          title="Properties"
                          value={overview[0]?.properties}
                        />
                      </Flex>
                    </Col>
                    <Col span={12}>
                      <Flex gap={20} vertical>
                        <CustomStatistic
                          title="Property Sold Income"
                          value={overview[0]?.propertySoldIncome}
                          precision={2}
                          valueStyle={{
                            color: '#3f8600',
                          }}
                          prefix={<ArrowUpOutlined />}
                          suffix="$"
                        />
                        <CustomStatistic
                          title="Property Rented Income"
                          value={overview[0]?.propertyRentedIncome}
                          precision={2}
                          valueStyle={{
                            color: 'orange',
                          }}
                          prefix={<ArrowDownOutlined />}
                          suffix="$"
                        />
                        {/* <CustomStatistic
                          title="Total Revenue"
                          value={}
                          precision={2}
                          suffix="$"
                        /> */}
                      </Flex>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col span={12}>
                <LineChartDashboard data={weeklyActivity ?? []} />
              </Col>
            </Row>
            <Typography.Title level={3}>Top Agent Activity</Typography.Title>
            <Table columns={columns} dataSource={agentActivity} />
          </>
        }
      </>
    </>
  )
}

export default HomePage