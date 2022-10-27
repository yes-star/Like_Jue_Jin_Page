import {SHOW_HEADER} from '../constant';

//初始化状态
const initState = {
    showHeader: true
}

export default function appConfigReducer(preState = initState, action) {
    const {type, data} = action;
    switch (type) {
        case SHOW_HEADER:
            return {...preState, showHeader: data.showHeader}
        default:
            return preState
    }
}