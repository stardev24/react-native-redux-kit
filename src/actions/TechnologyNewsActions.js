import axios from 'axios';

const base_url= 'https://jsonplaceholder.typicode.com'
//Post loading action
export function technologyPostsLoading(bool){
    return {
        type:'TECHNOLOGY_POSTS_LOADING',
        isLoading:bool,
        hasError:false,


    }
}

//Post success action
export function technologyPostsDataSuccess(bool,technologyPosts){
    return {
        type:'TECHNOLOGY_POSTS_SUCCESS',
        technologyPosts,
        hasError:bool,
        isLoading:false
    }
}


export function technologyPostDataError(bool,error){
    return {
        type:'TECHNOLOGY_POSTS_ERROR',
        hasError:bool,
        error:error,
        isLoading:false
    }
}

export function fetchTechnologyPosts(url){
    return (dispatch) => {
        dispatch(technologyPostsLoading(true));
       return axios.get(url)
        .then((response) =>{
            if(response.status != 200){
                throw Error(response.statusText);
            }
            dispatch(technologyPostsLoading(false));

            return response
        })
        .then((response) => dispatch(technologyPostsDataSuccess(false,response.data?response.data.data:[])))
        .catch((err) => dispatch(technologyPostDataError(true,err)))

    } 

}