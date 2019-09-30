import { combineReducers } from "redux"

import {businessNewsLoading,businessNewsSuccess,businessNewsFailure} from './BusinessReducer.js';
import {technologyNewsLoading,technologyNewsSuccess,technologyNewsFailure} from './TechnologyReducer.js';


export default combineReducers({
    "businesnsNewsData":businessNewsSuccess,
    "businessNewsError":businessNewsFailure,
    "businessNewsLoading":businessNewsLoading,
    "technologyNewsData":technologyNewsSuccess,
    "technologyNewsError":technologyNewsFailure,
    "technologyNewsLoading":technologyNewsLoading
})