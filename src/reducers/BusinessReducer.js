const initialState = {
    error:null,
    isLoading:false,
    businessPosts:[],
    hasError:false   
}


export function businessNewsLoading(state=initialState,action){
    switch(action.type){
        case 'BUSINESS_POSTS_LOADING':
            return {...state,isLoading:action.isLoading,error:action.hasError}
        default:
            return state
    }
}

export function businessNewsSuccess(state=initialState,action){
    switch(action.type){
        case 'BUSINESS_POSTS_SUCCESS':
            return {...state,businessPosts:action.businessPosts,hasError:action.hasError,isLoading:action.isLoading}
        default:
            return state
    }
}

export function businessNewsFailure(state=initialState,action){
    switch(action.type){

        case 'BUSINESS_POSTS_ERROR':
            return {...state,error:action.error,hasError:action.hasError,isLoading:action.isLoading}
        default:
            return state
    }
}