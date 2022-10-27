import React, {PureComponent} from 'react';
import {nanoid} from "nanoid";

import style from "./style.module.css"

class LeftMenu extends PureComponent {
    state = {
        btnList: [
            {id: nanoid(), name: '推荐'},
            {id: nanoid(), name: '热门'},
            {id: nanoid(), name: '关注'},
            {id: nanoid(), name: '上班摸鱼'},
            {id: nanoid(), name: '树洞一下'},
            {id: nanoid(), name: '内推招聘'},
            {id: nanoid(), name: '今天学到了'},
            {id: nanoid(), name: '一图胜千言'},
            {id: nanoid(), name: '今日算法题'},
            {id: nanoid(), name: '开发工具推荐'},
            {id: nanoid(), name: '更多话题+'},
        ],
        defaultSelected: 0,
    }

    btnClick = (index) => {
        this.setState({
            defaultSelected: index
        })
    }

    render() {
        const {btnList, defaultSelected} = this.state;
        return (
            <div className={style.leftMenu}>
                <ul className={style.list}>
                    {
                        btnList.map((item, index) => {
                            return <li key={item.id}
                                       className={defaultSelected === index ? style.active : null}
                                       onClick={e => this.btnClick(index)}>
                                {item.name}
                            </li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default LeftMenu;