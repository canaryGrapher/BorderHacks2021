import React, {useRef} from 'react';
import { Card, Table, Tag, Collapse } from 'antd';
import { Doughnut } from 'react-chartjs-2';

function ColorTraitsCard(props) {
    const { Panel } = Collapse;
    const tags=["Sanguine", "Choleric", "Melancholic", "Phlegmatic"]
    const ColorSummary = [
    {
      key:"1",
      type: "Sanguine",
      summary: "They tend to be highly talkative, enthusiastic, active, social, more extroverted and enjoy being part of a crowd; they find that being social, outgoing, and charismatic is easy to accomplish.",
    }, 
    {
      key:"2",
      type: "Choleric",
      summary: "They tend to be more extroverted, independent, decisive, goal-oriented, and ambitious. These combined with their dominant, result-oriented outlook make them natural leaders. ",
    },
    {
      key:"3",
      type: "Melancholic",
      summary: "They tend to be analytical, detail-oriented, deep thinkers and feelers. Often introverted, shy,  and self-reliant individuals who are thoughtful, reserved, and often anxious. ",
    }, {
      key:"4",
      type: "Phlegmatic",
      summary: "They tend to be relaxed, peaceful, quiet, and easy-going. They are sympathetic and care about others, yet they try to hide their emotions. Often are good at generalising ideas or problems to the world and making compromises",
    }]

    const getColor =(tag) => {
      if (tag === 'Sanguine') {
        return 'rgba(255, 99, 132, 1)';
      } 
      else if (tag === 'Choleric') {
        return 'rgba(54, 162, 235, 1)';
      }
      else if (tag === 'Melancholic') {
        return 'rgba(255, 206, 86, 1)';
      }
      else if (tag === 'Phlegmatic') {
        return 'rgba(75, 192, 192, 1)';
      }
    }

    const columns = [
      {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
        render: (type) => (
          <Tag color={getColor(type)} key={type}>
            {type.toUpperCase()}
          </Tag>
        )},
      {
        title: 'Summary',
        dataIndex: 'summary',
        key: 'summary',
      },
    ];

    const data = {
      labels: ['Sanguine', 'Choleric', 'Melancholic', 'Phlegmatic'],
      datasets: [
        {
          data: [props.sanguine, props.choleric, props.melancholic, props.phlegmatic],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };

    return (
        <Card
          style={{ width: '100%' }}
          title="Color Traits"
          className="p-1"
        >
          <Doughnut 
          data={data} 
          className="mb-4"/>
          <Collapse ghost>
          <Panel header="Learn about what it means">
            <Table dataSource={ColorSummary} columns={columns} />
          </Panel>
          </Collapse>
        </Card>
    );
}

export default ColorTraitsCard;