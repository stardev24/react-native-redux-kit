import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Button
} from 'react-native';



export default class TechnologyTabDetailComponent extends Component {

  constructor(props){
    super(props);
    this.navigate = this.navigate.bind(this);
  }
  navigate(item){
    this.props.redirectToScreen(item);
  }
  render() {
    return (
        <View style={styles.container}>
          <FlatList style={styles.list}
            contentContainerStyle={styles.gridContainer}
            data={this.props.technologyPosts}
            extraData={this.props}
            horizontal={false}
            numColumns={2}
            keyExtractor= {(item) => {
              return `key-${item.id}`;
            }}
            renderItem={({item}) => {
              return (
                <TouchableOpacity style={styles.card}>
                  <Image style={styles.profilePic} source={{uri:item.avatar}}/>
                  <View>
                    <View style={{alignItems:"center", justifyContent:"center"}}>
                      <Text style={styles.username}>{item.first_name}</Text>
                      <Button
                        title="Details"
                        color="#673ab7"
                        onPress={()=> this.navigate(item)}
                        />
                    </View>
                  </View>
                </TouchableOpacity>
              )
            }}/>
        </View>
      );
  }
}
const styles = StyleSheet.create({
    container:{
      flex:1,
      marginTop:20,
    },
    list: {
      paddingHorizontal: 5,
    },
    btnColor:{
        backgroundColor:'#18ffff'
    },
    gridContainer:{
     alignItems:'center'
    },
    card:{
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,
      elevation: 12,
  
      marginVertical: 5,
      backgroundColor:"white",
      flexBasis: '56%',
      marginHorizontal: 5,
    },
    profilePic:{
      height: 100,
      width: 100,
      borderRadius:60,
      alignSelf:'center',
      borderColor:"#DCDCDC",
      borderWidth:3,
    },
    username:{
      fontSize:16,
      flex:1,
      alignSelf:'center',
      color:"#18ffff",
      fontWeight:'bold'
    }
  });     