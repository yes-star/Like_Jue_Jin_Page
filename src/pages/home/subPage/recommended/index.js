import React, {PureComponent} from 'react';
import style from "./recommended.module.css";
import {getArticalList} from '@/services/articalList';

import ArticalItem from "../../sub-cpns/ArticalItem";

class Recommended extends PureComponent {
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

    toArticalPage = (id) => {
        window.open(`http://localhost:3000/artical?id=${id}`)
    }

    render() {
        return (
            <div className={style.recommended}>
                {
                    this.state.articalList.map(item => <ArticalItem key={item.id} data={item}
                                                                    onClick={() => this.toArticalPage(item.id)}/>)
                }
            </div>
        );
    }
}

export default Recommended;