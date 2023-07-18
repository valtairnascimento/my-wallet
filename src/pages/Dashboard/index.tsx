import * as React from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  const options = [
    { value: 'Valtair', label: 'Valtair' },
    { value: 'Victor', label: 'Victor' },
    { value: 'Katia', label: 'Katia' },
    { value: 'Bia', label: 'Bia' },
  ];

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#F7931B">
        <SelectInput options={options} />
      </ContentHeader>
    </Container>
  );
};

export default Dashboard;
