import React, {PureComponent} from 'react';
import {Badge} from 'antd';
import {LikeOutlined, MessageOutlined, StarOutlined, WarningOutlined, QqOutlined, WeiboOutlined, WechatOutlined} from "@ant-design/icons"
import style from "./style.module.css"


//文章左边框
class LeftBar extends PureComponent {
    render() {
        return (
            <div className={style.leftBar}>
                <Badge count={85} color='#b2bac2'>
                    <div className={style.item}>
                        <LikeOutlined style={{fontSize: '16px'}}/>
                    </div>
                </Badge>
                <Badge count={85} color='#b2bac2'>
                    <div className={style.item}>
                        <MessageOutlined style={{fontSize: '16px'}}/>
                    </div>
                </Badge>
                <div className={style.item}>
                    <StarOutlined style={{fontSize: '16px'}}/>
                </div>
                <div className={style.item}>
                    <WarningOutlined style={{fontSize: '16px'}}/>
                </div>
                <div className={style.share}>分享</div>
                <div className={style.item}>
                    <WeiboOutlined style={{fontSize: '16px'}}/>
                </div>
                <div className={style.item}>
                    <QqOutlined style={{fontSize: '16px'}}/>
                </div>
                <div className={style.item}>
                    <WechatOutlined style={{fontSize: '16px'}}/>
                </div>
            </div>
        );
    }
}

export default LeftBar;