import React, { Component } from 'react';
import { StyleSheet,View} from 'react-native';
import { Container, Header, Content, Thumbnail, Tabs,Left, Body, Right, Button, Icon, Title,List,ListItem,Text  } from 'native-base';
import BusinessPage from './tabs/BusinessPage';
import TechnologyPage from './tabs/TechnologyPage';
import MarketPage from './tabs/MarketPage';
import HeaderComponent from './HeaderComponent'



export default class BusinessTabDetailComponent extends Component {

  constructor(props){
    super(props);
    this.navigate = this.navigate.bind(this);
  }
  navigate(item){
    this.props.redirectToScreen(item);
  }
  render() {
    return (

            <List dataArray={this.props.businessPosts}
              renderRow={(item,i) =>
                <ListItem thumbnail key={item.id}>
                  
                  <Left>
                    <Thumbnail square source={{ uri: item.avatar}} />
                  </Left>
                  <Body>
                     <Text>{item.first_name}</Text>
                  </Body>
                  <Right>
                    <Button onPress={() => this.navigate(item)} style={styles.btnColor}>
                      <Text>Details</Text>
                    </Button>
                  </Right>
                </ListItem>
              }
              keyExtractor={item => `key-${item.id}`}>
            </List>
 
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1
  },
  btnColor:{
    backgroundColor:'#673ab7'
  }
});
