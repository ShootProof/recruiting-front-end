import { FETCH_DATA } from '../actions/ExpandingListActions';

export default function expandingListReducer(state = [], action) {
    switch (action.type) {
        case FETCH_DATA: 
            return action.data;
        default:
            return state;
    }
}