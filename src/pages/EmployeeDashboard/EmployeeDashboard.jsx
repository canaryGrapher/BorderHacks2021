import React from 'react';
import './EmployeeDashboard.css';
import { Layout, PageHeader, Card, Tag } from 'antd';
import {WorkingGeniusCard, MBTICard} from '../../components/components'

function EmployeeDashboard() {
    const { Content } = Layout;

    return (
    <Layout>
      <PageHeader
      title="John Doe"
      className="employee-dashboard-page-header"
      subTitle="Department, position"
      tags={<Tag color="blue">Employee ID</Tag>}
      avatar={{
        size: 40,
        style: {
          color: '#f56a00',
          backgroundColor: '#fde3cf',
        },
        src: "https://avatars1.githubusercontent.com/u/8186664?s=460&v=4"
      }}
      />
      <Content className="employee-dashboard-main-content">
      <MBTICard mbtiType="ISTJ"/>
      <WorkingGeniusCard genius={["W", "T"]} competency={["E", "G"]} frustration={["D", "I"]}/>
      <Card title="Skill Set" style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Card title="Colour Traits" style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Card title="Program Efficiency" style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      </Content>
    </Layout>
        
    );
}

export default EmployeeDashboard;