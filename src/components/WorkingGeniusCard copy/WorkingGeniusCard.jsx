import React, {useState} from 'react';
import './WorkingGeniusCard.css';
import { Card, Tag, Divider } from 'antd';
import { UserOutlined } from '@ant-design/icons';

function WorkingGeniusCard(props) {
    const [selectedTab, setSelectedTab] = useState('genius')
    const tabList = [
      {
        key: 'genius',
        tab: 'Working Genius',
      },
      {
        key: 'competency',
        tab: 'Working Competency',
      },{
        key: 'frustration',
        tab: 'Working Frustration',
      },
    ];

    const geniusSummary = {
      "W" : {
        genius: "Wonder",
        definition: "The gift of pondering the possibility of greater potential and opportunity in a given situation.",
        category: "Ideation",
        type: "Responsive"
      },
      "I" : {
        genius: "Invention",
        definition: "The gift of creating original and novel ideas and solutions.",
        category: "Ideation",
        type: "Disruptive"
      },
      "D" : {
        genius: "Discernment",
        definition: "The gift of intuitively and instinctively evaluating ideas and situations",
        category: "Activation",
        type: "Responsive"
      },
      "G" : {
        genius: "Galvanizing",
        definition: "The gift of rallying, inspiring and organizing others to take action.",
        category: "Activation",
        type: "Disruptive"
      },
      "E" :{
        genius: "Enablement",
        definition: "The gift of providing encouragement and assistance for an idea or project.",
        category: "Implementation",
        type: "Responsive"
      },
      "T" : {
        genius: "Tenacity",
        definition: "The gift of pushing projects or tasks to completion to achieve results.",
        category: "Implementation",
        type: "Disruptive"
      }
    }

    const getTagColor = (category) => {
      switch (category) {
        case "Ideation":
          return "magenta"
        case "Activation":
          return "volcano"
        case "Implementation":
          return "gold"
        case "Responsive":
          return "green"
        case "Disruptive":
          return "geekblue";
        default:
          return "#d3d3d3"
      }
    }

    // Input: "W", "I", "D", "G", "E", "T"
    const getGeniusSummary = (input) => {
      return (
        <div>
          <h1 className="text-xl mb-1 mt-1 font-semibold">{geniusSummary[input]["genius"]}</h1>
          <div className="mb-2">  
            <Tag color={getTagColor(geniusSummary[input]["category"])}>{geniusSummary[input]["category"]}</Tag>
            <Tag color={getTagColor(geniusSummary[input]["type"])}>{geniusSummary[input]["type"]}</Tag>
          </div>
          <p className="mb-3">{geniusSummary[input]["definition"]}</p>
        </div>
      )
    }

    const getCardContent = (inputList) => {
      return(
        inputList.map((input, key) => {
          return getGeniusSummary(input)
        })
      )
    }

    const contentList = {
      genius: getCardContent(props.genius),
      competency: getCardContent(props.competency),
      frustration:getCardContent(props.frustration), 
    };


    return (
      <Card
          style={{ width: '100%' }}
          title="Your Working Genius Profile"
          extra={<a className="text-blue-600" href="https://www.workinggenius.com" target="_blank" rel="noreferrer">Read about Working Genius</a>}
          tabList={tabList}
          activeTabKey={selectedTab}
          onTabChange={key => {
            console.log(key);
            setSelectedTab(key);
          }}
          className="p-1"
        >
          {contentList[selectedTab]}
        </Card>
    );
}

export default WorkingGeniusCard;