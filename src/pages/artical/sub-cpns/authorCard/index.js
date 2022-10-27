import React, {PureComponent} from 'react';
import {Avatar} from "antd";
import {LikeOutlined, EyeOutlined} from "@ant-design/icons"
import style from "./style.module.css";
import articalImg from "@/assets/img/sny.jpg";


//文章作者详情，纯展示用纯组件
class AuthorCard extends PureComponent {
    render() {
        return (
            <div className={style.authorCard}>
                <header>关于作者</header>
                <div className={style.authorInfo}>
                    <Avatar style={{marginRight: '12px'}} size={50}
                            src={articalImg}/>
                    <div className={style.author}>
                        <div className={style.authorName}>小鱼哥</div>
                        <div className={style.metaBox} title='前端工程师 小鱼哥'>前端工程师 小鱼哥</div>
                    </div>
                </div>
                <div style={{paddingBottom: '10px'}}>
                    <div className={style.data}>
                        <div className={style.bg}>
                            <LikeOutlined style={{color: '#7BB9FF'}}/>
                        </div>
                        获得点赞 1,145
                    </div>
                    <div className={style.data}>
                        <div className={style.bg}>
                            <EyeOutlined style={{color: '#7BB9FF'}}/>
                        </div>
                        文章被阅读 114,514
                    </div>
                </div>
            </div>
        );
    }
}

export default AuthorCard;