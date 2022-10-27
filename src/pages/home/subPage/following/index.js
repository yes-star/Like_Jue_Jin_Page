import React, {PureComponent} from 'react';
import style from "./following.module.css";
import {getArticalList} from '@/services/articalList';
import ArticalItem from "../../sub-cpns/ArticalItem";

class Following extends PureComponent {
    state = {
        articalList: []
    }

    componentDidMount() {
        this.getArticalList()
    }

    getArticalList = () => {
        getArticalList().then(res => {
            this.setState({
                articalList: res.data
            })
        })
    }

    render() {
        return (
            <div className={style.following}>
                {
                    this.state.articalList.map(item => <ArticalItem key={item.id} data={item}/>)
                }
            </div>
        );
    }
}

export default Following;