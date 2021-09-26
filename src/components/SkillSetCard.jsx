import React, {useState} from 'react';
import { Card } from 'antd';

function SkillSetCard(props) {
    return (
      <Card
          style={{ width: '100%' }}
          title="Skill Set"
          className="p-1"
        >
          <p className="text-lg mb-3 tracking-wide" > Skil set</p>
        </Card>
    );
}

export default SkillSetCard;