import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView,
    FlatList,
  } from 'react-native';
import store from '../store/store'
import {fetchBusinessPosts} from '../actions/BusinessNewsActions'
import {connect} from 'react-redux'
import BusinessTabDetailComponent from '../components/BusinessTabDetailComponent'
import {BUSINESS_POSTS_URL} from '../constants/constants'
import{HeaderBarItem} from 'react-navigation'



class BusinessPostsContainer extends Component {

    constructor(props){
        super(props)
        this.state = {posts:[],selectedPost:{}}
        this.redirectToScreen = this.redirectToScreen.bind(this)

    }

    componentDidMount(){
        debugger
        this.props.fetchPostData(this.state.url).then((data)=>{
            console.log("Posts call completed ->",data)
        })
    }
  
    //Navigate to details page
    redirectToScreen(item){
        this.props.navigation.navigate('Details',{item});
    }
  
    render() {
        return (
        <View>
            <BusinessTabDetailComponent businessPosts={this.props.posts} redirectToScreen={this.redirectToScreen}/>
        </View>
        )
    }

}


const mapStateToProps = (state) => {
    return{
        posts:state.businesnsNewsData.businessPosts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPostData : (url) => dispatch(fetchBusinessPosts(BUSINESS_POSTS_URL))
    }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      marginTop:20,
    },
    list: {
      paddingHorizontal: 5,
      backgroundColor:"#E6E6E6",
    },
    listContainer:{
     alignItems:'center'
    },
    /******** card **************/
    card:{
      shadowColor: '#00000021',
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,
      elevation: 12,
  
      marginVertical: 5,
      backgroundColor:"white",
      flexBasis: '46%',
      marginHorizontal: 5,
    },
    cardFooter: {
      paddingVertical: 17,
      paddingHorizontal: 16,
      borderTopLeftRadius: 1,
      borderTopRightRadius: 1,
      flexDirection: 'row',
      alignItems:"center", 
      justifyContent:"center"
    },
    cardContent: {
      paddingVertical: 12.5,
      paddingHorizontal: 16,
    },
    cardHeader:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: 12.5,
      paddingBottom: 25,
      paddingHorizontal: 16,
      borderBottomLeftRadius: 1,
      borderBottomRightRadius: 1,
    },
    userImage:{
      height: 120,
      width: 120,
      borderRadius:60,
      alignSelf:'center',
      borderColor:"#DCDCDC",
      borderWidth:3,
    },
    name:{
      fontSize:18,
      flex:1,
      alignSelf:'center',
      color:"#008080",
      fontWeight:'bold'
    },
    position:{
      fontSize:14,
      flex:1,
      alignSelf:'center',
      color:"#696969"
    },
    followButton: {
      marginTop:10,
      height:35,
      width:100,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:30,
      backgroundColor: "#00BFFF",
    },
    followButtonText:{
      color: "#FFFFFF",
      fontSize:20,
    },
    icon:{
      height: 20,
      width: 20, 
    }
  });

export default connect(mapStateToProps,mapDispatchToProps)(BusinessPostsContainer)