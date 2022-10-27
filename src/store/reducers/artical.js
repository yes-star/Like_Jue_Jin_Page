import {ADD_ARTICAL} from '../constant';

//初始化状态
let initState;

if (localStorage.getItem('store')) {
    initState = JSON.parse(localStorage.getItem('store')).artical;
} else {
    initState = [];
}

export default function articalReducer(preState = initState, action) {
    const {type, data} = action;
    switch (type) {
        case ADD_ARTICAL:
            return [...preState, data]
        default:
            return preState
    }
}