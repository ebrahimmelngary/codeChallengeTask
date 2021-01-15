import * as React from 'react';
import { useDispatch,useSelector } from 'react-redux'
import { FlatList, View } from 'react-native';
import MovieCard from '../../components/molecules/MovieCard';
import SearchBox from '../../components/molecules/SearchBox';
import navigateToScreen from '../../navigation/Navigator';
import { makeGetRequest } from '../../services';
import { fetchSearchData } from '../../redux/actions/Search';
import styles from './styles';

const Home = () => {
  const dispatch = useDispatch();
const searchData = useSelector(state=>state.searchData.data)
  const [searchText, setSearchText] = React.useState('');
console.log('searchData',searchData)
  return (
    <View style={styles.container}>
      <SearchBox
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
        onKeyPress={() => dispatch(fetchSearchData(searchText))}
        onPressSearch={() => dispatch(fetchSearchData(searchText))}
      />
      <FlatList
        data={searchData}
        style={styles.listStyle}
        initialNumToRender={5}
        renderItem={({ item }) => (
          <MovieCard
            item={item}
            onPress={() =>
              navigateToScreen({ name: 'MovieDetails', params: { item } })
            }
          />
        )}
        keyExtractor={(item, index) => item + index.toString()}
      />
    </View>
  );
};

export default React.memo(Home);
