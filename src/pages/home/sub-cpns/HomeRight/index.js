import React, {PureComponent} from 'react';
import {Button, Avatar} from 'antd';
import {CalendarOutlined, RightOutlined} from '@ant-design/icons';
import articalImg from '@/assets/img/sny.jpg';
import style from './style.module.css'
import qrCode from '../../../../assets/img/1.png'

//右边栏介绍
class HomeRight extends PureComponent {
    render() {
        return (
            <div>
                <div className={style.card1}>
                    <div className={style.qiandao}>
                        <div className={style.date}>
                            <CalendarOutlined style={{color: '#fcc06c', fontSize: 20}}/>
                            <p className={style.title}>下午好！</p>
                        </div>
                        <Button type="primary" shape="round" ghost>去签到</Button>
                    </div>
                    <p className={style.secondLine}>连续签到赢掘金惊喜好礼</p>
                </div>
                <div className={style.card2}>
                    <div className={style.qrcode}>
                        <img src={qrCode} alt="二维码"/>
                    </div>
                    <div>
                        <p className={style.headline}>关注一个宝藏up</p>
                        <p className={style.desc}>一个努力学习的前端开发</p>
                    </div>
                </div>
                <div className={style.card3}>
                    <header className={style.userBlockHeader}>🎖️作者榜</header>
                    <div className={style.list}>
                        <div className={style.item}>
                            <div className={style.avatar}>
                                <Avatar style={{marginRight: '6px'}} size={46}
                                        src={articalImg}/>
                            </div>
                            <div>
                                <p className={style.userName}>小鱼哥</p>
                                <p className={style.position}>
                                    前端工程师 小鱼哥
                                </p>
                            </div>
                        </div>
                        <div className={style.item}>
                            <div className={style.avatar}>
                                <Avatar style={{marginRight: '6px'}} size={46}
                                        src={articalImg}/>
                            </div>
                            <div>
                                <p className={style.userName}>小鱼哥</p>
                                <p className={style.position}>
                                    前端工程师 小鱼哥
                                </p>
                            </div>
                        </div>
                        <div className={style.item}>
                            <div className={style.avatar}>
                                <Avatar style={{marginRight: '6px'}} size={46}
                                        src={articalImg}/>
                            </div>
                            <div>
                                <p className={style.userName}>小鱼哥</p>
                                <p className={style.position}>
                                    前端工程师 小鱼哥
                                </p>
                            </div>
                        </div>
                        <div className={style.more}>
                            <span>完整榜单</span>
                            <RightOutlined style={{marginLeft: '5px'}}/>
                        </div>
                    </div>
                </div>
                <div className={style.card4}>
                    <div className={style.item} style={{height: '60px'}}>
                        <div className={style.avatar}>
                            <Avatar style={{marginRight: '6px'}} size={36} shape="square"
                                    src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/juejin-tutu.d58819c.png"/>
                        </div>
                        <span className={style.title2}>掘金社区漫游指南</span>
                    </div>
                    <div className={style.item} style={{height: '60px'}}>
                        <div className={style.avatar}>
                            <Avatar style={{marginRight: '6px'}} size={36} shape="square"
                                    src="	https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/juejin-extension-icon.4b79fb4.png"/>
                        </div>
                        <span className={style.title2}>下载掘金浏览器插件</span>
                    </div>
                    <div className={style.item} style={{height: '60px'}}>
                        <div className={style.avatar}>
                            <Avatar style={{marginRight: '6px'}} size={36} shape="square"
                                    src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/juejin-miner.b78347c.png"/>
                        </div>
                        <span className={style.title2}>前往掘金翻译计划</span>
                    </div>
                </div>
                <div className={style.siteInfo}></div>
            </div>
        );
    }
}

export default HomeRight;