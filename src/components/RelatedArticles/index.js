import React, {PureComponent} from 'react';
import {LikeOutlined, MessageOutlined} from "@ant-design/icons";

import style from "./style.module.css"


//相关文章
class RelatedArticles extends PureComponent {
    state = {
        list: [
            {id: 1, title: '前端万字面经——基础篇', zan: 123, msg: 456},
            {id: 2, title: '聊聊让人头疼的正则表达式', zan: 283, msg: 386},
            {id: 3, title: '手摸手带你肝nodejs (一)', zan: 257, msg: 863},
            {id: 4, title: '获取文件blob流地址实现下载功能', zan: 865, msg: 1458},
            {id: 5, title: '前端万字面经——进阶篇', zan: 165, msg: 756},
        ]
    }

    render() {
        return (
            <div className={style.relatedArticles}>
                <header>相关文章</header>
                {
                    this.state.list.map(item => {
                        return (
                            <div className={style.item} key={item.id}>
                                <p>{item.title}</p>
                                <div className={style.data}>
                                    <div>
                                        <LikeOutlined/>
                                        <span style={{marginLeft: '6px'}}>{item.zan}</span>
                                    </div>
                                    <div style={{marginLeft: '30px'}}>
                                        <MessageOutlined/>
                                        <span style={{marginLeft: '6px'}}>{item.msg}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default RelatedArticles;