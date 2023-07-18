import * as React from 'react';
import { Container, Content } from './styles';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';

const List: React.FC = () => {
  const options = [
    { value: 'Valtair', label: 'Valtair' },
    { value: 'Victor', label: 'Victor' },
    { value: 'Katia', label: 'Katia' },
    { value: 'Bia', label: 'Bia' },
  ];

  return (
    <Container>
      <ContentHeader title="Saídas" lineColor="#E44c4e">
        <SelectInput options={options} />
      </ContentHeader>

      <Content>
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de Luz"
          subTitle="18/06/2023"
          amount="R$ 125,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de Luz"
          subTitle="18/06/2023"
          amount="R$ 125,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de Luz"
          subTitle="18/06/2023"
          amount="R$ 125,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de Luz"
          subTitle="18/06/2023"
          amount="R$ 125,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de Luz"
          subTitle="18/06/2023"
          amount="R$ 125,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de Luz"
          subTitle="18/06/2023"
          amount="R$ 125,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de Luz"
          subTitle="18/06/2023"
          amount="R$ 125,00"
        />
      </Content>
    </Container>
  );
};

export default List;
