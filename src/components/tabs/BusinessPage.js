import React, { Component } from 'react';
import { StyleSheet,View} from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
export default class BusinessPage extends Component {
  constructor(props){
    super(props);
    this.sendNavigationEvent = this.sendNavigationEvent.bind(this)
  }

  sendNavigationEvent(item){
    this.props.redirectToScreen(item)
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
      <Container style={styles.container}>
            <List dataArray={this.props.businessListData}
              renderRow={(item,i) =>
                <ListItem thumbnail key={item.id}>
                  <Text>{item.first_name}</Text>
                  <Left>
                    <Thumbnail square source={{ uri: item.avatar}} />
                  </Left>
                  <Body>
                    
                  </Body>
                  <Right>
                    <Button>
                      <Text>View</Text>
                    </Button>
                  </Right>
                </ListItem>
              }
              keyExtractor={item => `key-${item.id}`}>
            </List>
      </Container>
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
  }
});