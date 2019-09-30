import React, { Component } from 'react'
import { Container, Header, Content, Card, CardItem,Text, Left, Body, Right } from 'native-base';
import { StyleSheet,View, Image} from 'react-native';
export default class MarketPage extends Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
          <Container>
          <Content>
            <Card>
              <CardItem header>
                <Text>React Native - Nativebase</Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </Text>
                </Body>
              </CardItem>
              <CardItem footer>
                <Text>React Native</Text>
                <Image
                  style={{width: 300, height: 300}}
                  source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png'}}
                />
              </CardItem>
          </Card>
          </Content>
        </Container>
      </View>
    )
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
