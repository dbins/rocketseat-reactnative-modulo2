import React, { Component } from "react";
import {
  View,
  Text,
  AsyncStorage,
  ActivityIndicator,
  FlatList
} from "react-native";
import api from "../../services/api";
import Icon from "react-native-vector-icons/FontAwesome";
import Header from "../../components/Header";
import RepositoryItem from "./RepositoryItem";
import styles from "./styles";

export default class Repositories extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="list-alt" size={20} color={tintColor} />
    )
  };

  state = {
    data: [],
    loading: true,
    refreshing: false
  };

  async componentDidMount() {
    //const username = await AsyncStorage.getItem("@Githuber:username");
    //const response = await api.get("/users/" + username + "/repos");
    //this.setState({ data: response.data, loading: false });
    this.loadRepositories();
  }

  renderListItem = ({ item }) => <RepositoryItem repository={item} />;

  loadRepositories = async () => {
    this.setState({ refreshing: true });
    const username = await AsyncStorage.getItem("@Githuber:username");
    const response = await api.get("/users/" + username + "/repos");
    this.setState({ data: response.data, loading: false, refreshing: false });
  };

  renderList = () => {
    const { data, refreshing } = this.state;
    return (
      <FlatList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadRepositories} //Ao arrastar a lista para baixo
        refreshing={refreshing}
      />
    );
  };

  render() {
    const { loading } = this.setState;
    return (
      <View style={styles.container}>
        <Header title="Repositórios" />
        {loading ? (
          <ActivityIndicator style={styles.loading} />
        ) : (
          this.renderList()
        )}
      </View>
    );
  }
}

//Repositories.navigationOptions = {
//  tabBarIcon: ({ tintColor }) => (
//    <Icon name="list-alt" size={20} color={tintColor} />
//  )
//};

//export default Repositories;
