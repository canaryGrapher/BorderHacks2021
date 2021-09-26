import React from 'react';
import './EmployeeDashboard.css';
import { Layout, PageHeader, Card, Tag, Row, Col } from 'antd';
import {WorkingGeniusCard, MBTICard, ColorTraitsCard, ProgramCard, SkillSetCard} from '../../components/components'

function EmployeeDashboard() {
    const { Content } = Layout;

    return (
    <Layout>
      <PageHeader
      title="John Doe"
      className="employee-dashboard-page-header bg-gray-400"
      subTitle="Department, position"
      tags={<Tag color="blue">Employee ID</Tag>}
      avatar={{
        size: 100,
        style: {
          color: '#f56a00',
          backgroundColor: '#fde3cf',
        },
        src: "https://avatars1.githubusercontent.com/u/8186664?s=460&v=4"
      }}
      />
      <Content className="employee-dashboard-main-content">
        <Row gutter={[10, 10]}>
          <Col span={10} className="gutter-row">
            <MBTICard mbtiType="ISTJ"/>
          </Col>
          <Col span={14} className="gutter-row">
            <WorkingGeniusCard genius={["W", "T"]} competency={["E", "G"]} frustration={["D", "I"]}/>
          </Col>
          <Col span={14} className="gutter-row">
            <Row gutter={[10, 10]}>
            <SkillSetCard />
            <ProgramCard/>
            </Row>
          </Col>
        <Col span={10} className="gutter-row">
          <ColorTraitsCard sanguine={94} choleric={91} melancholic={86} phlegmatic={87}/>
        </Col>
      </Row>
      </Content>
    </Layout>
        
    );
}

export default EmployeeDashboard;