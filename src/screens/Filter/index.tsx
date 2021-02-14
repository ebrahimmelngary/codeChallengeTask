import * as React from 'react';
import { SafeAreaView } from 'react-native';
import styles from './styles';
import Modal from 'react-native-modal';
import HorizontalList from './Components/HorizontalList';
import VerticalList from './Components/VerticalList';
import RangeCard from './Components/RangeCard';
import Collapsible from '../../components/molecules/Collapsible';

const Components = {
  Horizontal: HorizontalList,
  Vertical: VerticalList,
  Range: RangeCard,
};

const DaymnicFilter = (selectedItem: any) => {
  if (Components[selectedItem.type]) {
    return React.createElement(Components[selectedItem.type], {
      data: selectedItem,
    });
  }
  return null;
};

const Filter = () => {
  return (
    <Modal style={styles.modal} isVisible={true}>
      <SafeAreaView style={styles.container}>
        <Collapsible title={'Buying Format'}>
          <HorizontalList />
        </Collapsible>
        <Collapsible title={'Condtion'}>
          <HorizontalList />
        </Collapsible>
        <Collapsible title={'Price'}>
          <RangeCard />
        </Collapsible>
        <Collapsible title={'Quantity'}>
          <RangeCard />
        </Collapsible>
        <Collapsible title={'Seller Rate'}>
          <RangeCard />
        </Collapsible>
        <Collapsible title={'Brand'}>
          <VerticalList />
        </Collapsible>
        <Collapsible title={'Matrial'}>
          <VerticalList />
        </Collapsible>
        <Collapsible title={'Size'}>
          <HorizontalList />
        </Collapsible>

      </SafeAreaView>
    </Modal>
  );
};

export default React.memo(Filter);
