import React, {useState} from 'react';
import { Card, List, Rate, Menu, Dropdown, Button, Space } from 'antd';
import { StarTwoTone, DownOutlined } from '@ant-design/icons';

function ProgramCard(props) {
  const [selectedRatingFilter, setSelectedRatingFilter] = useState("All");
  const [selectedSortFilter, setSelectedSortFilter] = useState("");

  const listData = [];
  for (let i = 0; i < 20; i++) {
    listData.push({
      title: (Math.random() + 1).toString(36).substring(5),
      Rate: Math.floor(Math.random() * 3) + 1,
    });
  }

  const getSortedList = (data) => {
    switch(selectedSortFilter) {
      case "A to Z":
        return data.sort((a, b) => a.title.localeCompare(b.title, 'es', { sensitivity: 'base' }));
      case "Z to A":
        return data.sort((a, b) => b.title.localeCompare(a.title, 'es', { sensitivity: 'base' }));
      case "Lowest to Highest":
        return data.sort((a, b) => a.Rate - b.Rate);
      case "Highest to Lowest":
        return data.sort((a, b) => b.Rate - a.Rate);
      default: 
        return data;
    }
  }

  const getFilteredList = () => {
    if (selectedRatingFilter === "All") {
      return getSortedList(listData);
    } else {
      const filteredList = [];
      listData.forEach((data) => {
        if (parseInt(data.Rate) === parseInt(selectedRatingFilter)){
          filteredList.push(data);
        }
      })
      return getSortedList(filteredList);
    }
  }

  // Filter by stars
  const filterMenu = (
    <Menu onClick={(e) => setSelectedRatingFilter(e.key)}>
      <Menu.Item key="1" icon={<StarTwoTone />}>
        Level 1
      </Menu.Item>
      <Menu.Item key="2" icon={<StarTwoTone />}>
        Level 2
      </Menu.Item>
      <Menu.Item key="3" icon={<StarTwoTone />}>
        Level 3
      </Menu.Item>
      <Menu.Item key="All">
        Clear 
      </Menu.Item>
    </Menu>
  );

  // Sort Option
  const sortMenu = (
    <Menu onClick={(e) => setSelectedSortFilter(e.key)}>
      <Menu.Item key="A to Z">
        Skill: A to Z
      </Menu.Item>
      <Menu.Item key="Z to A">
        Skill: Z to A
      </Menu.Item>
      <Menu.Item key="Lowest to Highest">
        Level: Lowest to Highest
      </Menu.Item>
      <Menu.Item key="Highest to Lowest">
       Level: Highest Level
      </Menu.Item>
      <Menu.Item key="">
       Clear
      </Menu.Item>
    </Menu>
  );

    return (
      <Card
          style={{ width: '100%' }}
          title="Program Efficiency"
          className="p-1"
        >
          <Space className="mb-3">
            <Dropdown overlay={filterMenu}>
              <Button>{selectedRatingFilter === "All" ? "Filter by Level" : `Level ${selectedRatingFilter}`}<DownOutlined /> </Button>
            </Dropdown>
            <Dropdown overlay={sortMenu}>
              <Button>{selectedSortFilter === "" ? "Sort by" : selectedSortFilter}<DownOutlined /> </Button>
            </Dropdown>
          </Space>
          <List
          itemLayout="vertical"
          size="small"
          pagination={{
            onChange: page => {
              console.log(page);
            },
            pageSize: 10,
          }}
          dataSource={getFilteredList()}

          renderItem={item => (
            <List.Item
              key={item.title}
              extra={
                <Rate disabled defaultValue={item.Rate} count={3} />
              }
            >
              <p href={item.href}>{item.title}</p>
            </List.Item>
          )}
        />
      </Card>
    );
}

export default ProgramCard;