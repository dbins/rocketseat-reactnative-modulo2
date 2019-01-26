import React, { Component } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { View, AsyncStorage, FlatList, ActivityIndicator } from "react-native";
import api from "../../services/api";
import OrganizationItem from "./OrganizationItem";
import Header from "../../components/Header";
import styles from "./styles";

export default class Organization extends Component {
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
    this.loadOrganizations();
  }

  renderListItem = ({ item }) => <OrganizationItem organization={item} />;

  loadOrganizations = async () => {
    this.setState({ refreshing: true });
    const username = await AsyncStorage.getItem("@Githuber:username");
    const response = await api.get("/users/" + username + "/orgs");
    this.setState({ data: response.data, loading: false, refreshing: false });
  };

  renderList = () => {
    const { data, refreshing } = this.state;
    return (
      <FlatList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadOrganizations} //Ao arrastar a lista para baixo
        refreshing={refreshing}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
      />
    );
  };

  render() {
    const { loading } = this.setState;
    return (
      <View style={styles.container}>
        <Header title="Organizações" />
        {loading ? (
          <ActivityIndicator style={styles.loading} />
        ) : (
          this.renderList()
        )}
      </View>
    );
  }
}
