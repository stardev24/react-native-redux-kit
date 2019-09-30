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
import {fetchTechnologyPosts} from '../actions/TechnologyNewsActions'
import {connect} from 'react-redux'
import TechnologyTabDetailComponent from '../components/TechnologyTabDetailComponent'
import {TECH_POSTS_URL} from '../constants/constants'
import{HeaderBarItem} from 'react-navigation'



class TechnologyPostsContainer extends Component {

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

            <TechnologyTabDetailComponent technologyPosts={this.props.posts} redirectToScreen={this.redirectToScreen} />

        )
    }

}


const mapStateToProps = (state) => {
    return{
        posts:state.technologyNewsData.technologyPosts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPostData : (url) => dispatch(fetchTechnologyPosts(TECH_POSTS_URL))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(TechnologyPostsContainer)