import React, { setState } from 'react';
import { Text, View, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';
import Pokedex from './Component/Pokedex'
import axios from 'axios'



/*function App() {
  return <Main />;
}
export default App;
*/


export default class App extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      loading: false,
      pokemon: [],
      url: 'https://pokeapi.co/api/v2/pokemon',
      busqueda: ''
    }

  }

  componentDidMount() {
    this.getPokemon();
    console.log('soy un componeneteeeeeeee ')
  }

  getPokemon = () => {
    this.setState({ loading: true })
    fetch(this.state.url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          pokemon: res.results,
          url: res.next,
          loading: false,
        })
      });

  };

  handleOnChange = async e => {
    e.persist();
    await this.setState({ busqueda: e.target.value });
    console.log(this.state.busqueda);
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <Pokedex />
          <Text> Descargando Pokemon </Text>
        </View>
      );
    }

    return (
      <View style={styles.Listado}>
        <View style={styles.form}>
          <Text> Listado Pokemon</Text>
          <TextInput
            type="text"
            placeholder='Buscar Pokemon'
            style={styles.input}
            onChange={this.handleOnChange}
            value={this.state.busqueda}
          ></TextInput>
          <TouchableOpacity style={styles.btn}>
            <Text>Buscar Pokemon</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={this.state.pokemon}
          renderItem={
            ({ item }) => <Text>{item.name}</Text>
          }
          keyExtractor={(item, index) => index.toString()}
        ></FlatList>

      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  Listado: {
    flex: 1,
    paddingTop: 50,
    paddingLeft: 5,

  },
  input: {
    borderColor: 'black',
    color: 'black',
    height: 40,
    width: 290,
    margin: 12,
    borderWidth: 1,
    borderRadius: 40,

  },
  btn: {
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00d4ff',
    borderRadius: 40,
  },
  form: {
    borderColor: 'black',
    color: 'black',
    height: 180,
    margin: 12,
    borderWidth: 1,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  }
});


