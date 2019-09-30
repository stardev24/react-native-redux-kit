import axios from 'axios';

const base_url= 'https://jsonplaceholder.typicode.com'
//Post loading action
export function businessPostsLoading(bool){
    return {
        type:'BUSINESS_POSTS_LOADING',
        isLoading:bool,
        hasError:false,


    }
}

//Post success action
export function businessPostsDataSuccess(bool,businessPosts){
    return {
        type:'BUSINESS_POSTS_SUCCESS',
        businessPosts,
        hasError:bool,
        isLoading:false
    }
}


export function businessPostDataError(bool,error){
    return {
        type:'BUSINESS_POSTS_ERROR',
        hasError:bool,
        error:error,
        isLoading:false
    }
}

export function fetchBusinessPosts(url){
    return (dispatch) => {
        dispatch(businessPostsLoading(true));
       return axios.get(url)
        .then((response) =>{
            if(response.status != 200){
                throw Error(response.statusText);
            }
            dispatch(businessPostsLoading(false));

            return response
        })
        .then((response) => dispatch(businessPostsDataSuccess(false,response.data?response.data.data:[])))
        .catch((err) => dispatch(businessPostDataError(true,err)))

    } 

}