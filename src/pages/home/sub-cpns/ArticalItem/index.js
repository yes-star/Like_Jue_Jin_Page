import React, {PureComponent} from 'react';

// import img from "@/assets/img/2.gif"
import style from './style.module.css'
import {Divider, Popover, Avatar, Button} from 'antd';
import {LikeOutlined, EyeOutlined, MessageOutlined} from '@ant-design/icons'

class ArticalItem extends PureComponent {
    content = (data) => {
        return (
            <div className={style.popover}>
                <div className={style.user}>
                    <Avatar style={{marginRight: '6px'}} size={60}
                            src={data.user.avatar}/>
                    <div>
                        <p className={style.nikeName}>{data.user.nickName}</p>
                        <p className={style.subName}>{data.user.signature}</p>
                    </div>
                </div>
                <div className={style.gzInfo}>
                    <div>
                        <strong>{data.user.focus}</strong>
                        <p style={{color: '#8f969c'}}>关注</p>
                    </div>
                    <div>
                        <strong>{data.user.followers}</strong>
                        <p style={{color: '#8f969c'}}>关注者</p>
                    </div>
                    <div>
                        <Button>关注+</Button>
                    </div>
                </div>
            </div>
        )
    };

    render() {
        const {data} = this.props;
        return (
            <div className={style.articalItem} onClick={this.props.onClick}>
                {/*头部*/}
                <div className={style.headInfo}>
                    <Popover content={this.content(data)} trigger="hover">
                        <p className={style.userName}>{data.user.nickName}</p>
                    </Popover>
                    <Divider type="vertical" style={{borderColor: 'hsla(0,0%,59.2%,.2)', height: '16px'}}/>
                    <p className={style.time}>14小时前</p>
                    <Divider type="vertical" style={{borderColor: 'hsla(0,0%,59.2%,.2)', height: '16px'}}/>
                    <p className={style.classfly}>前端</p>
                    <p style={{margin: '0px 7px'}}>·</p>
                    <p className={style.classfly}>React.js</p>
                </div>
                {/*文章简介部分*/}
                <div className={style.contentWrapper}>
                    <div className={style.contantMain}>
                        <p className={style.articalTitle}>{data.artical.title}</p>
                        <p className={style.abstract}>
                            {data.artical.abstract}
                        </p>
                        {/*文章数据详情*/}
                        <ul className={style.articalData}>
                            <li className={style.data}>
                                <EyeOutlined style={{fontSize: '16px'}}/>
                                <span>{data.artical.look}</span>
                            </li>
                            <li className={style.data}>
                                <LikeOutlined style={{fontSize: '16px'}}/>
                                <span>{data.artical.giveLike}</span>
                            </li>
                            <li className={style.data}>
                                <MessageOutlined style={{fontSize: '16px'}}/>
                                <span>{data.artical.comments}</span>
                            </li>
                        </ul>
                    </div>
                    <img src={data.artical.img} alt="超硬核详细学习系列第四天——深入浅出IO的知识点，值得你学习收藏必备" className={style.articalImg}/>
                </div>
            </div>
        );
    }
}

export default ArticalItem;