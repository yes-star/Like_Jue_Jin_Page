import React, {PureComponent} from 'react';
import {NavLink, Link, withRouter} from 'react-router-dom'

import style from "./Header.module.css"
import logo from "../../assets/img/logo.svg"
import notifyIcon from '../../assets/img/notify.svg'
import Search from "../Search";
import DropDownBtn from "../DropDownBtn";
import AvatarDropDownList from "../AvatarDropDownList";
import SubNav from "../SubNav";


class Header extends PureComponent {
    state = {
        navList: [
            {
                id: 1, name: '首页', path: '/home', subMenuList: [
                    {id: 1, name: '推荐', path: '/home/recommended', tags: []},
                    {id: 2, name: '关注', path: '/home/following', tags: []},
                    {
                        id: 3, name: '前端', path: '/home/backend', tags: [
                            {
                                id: 3.1, name: '前端'
                            },
                            {
                                id: 3.2, name: 'JavaScript'
                            },
                            {
                                id: 3.3, name: 'Vue.js'
                            },
                            {
                                id: 3.4, name: 'React.js'
                            },
                            {
                                id: 3.5, name: 'CSS'
                            },
                            {
                                id: 3.6, name: 'TypeScript'
                            },
                            {
                                id: 3.7, name: 'Node.js'
                            },
                            {
                                id: 3.8, name: '微信小程序'
                            },
                            {
                                id: 3.9, name: 'Flutter'
                            },
                            {
                                id: 3.11, name: 'Webpack'
                            }
                        ]
                    },
                    {id: 4, name: '后端', path: '/home/frontend', tags: []},
                    {id: 5, name: 'Android', path: '/home/android', tags: []},
                    {id: 6, name: 'iOS', path: '/home/ios', tags: []},
                    {id: 7, name: '人工智能', path: '/home/ai', tags: []},
                    {id: 8, name: '开发工具', path: '/home/freebie', tags: []},
                    {id: 9, name: '代码人生', path: '/home/career', tags: []},
                    {id: 10, name: '阅读', path: '/home/article', tags: []},
                ]
            },
            {
                id: 2, name: '沸点', path: '/pins', subMenuList: [
                    {id: 1, name: '推荐', path: '/home/recommended', tags: []},
                    {id: 2, name: '关注', path: '/home/following', tags: []},
                    {
                        id: 3, name: '前端', path: '/home/backend', tags: [
                            {
                                id: 3.1, name: '前端'
                            },
                            {
                                id: 3.2, name: 'JavaScript'
                            },
                            {
                                id: 3.3, name: 'Vue.js'
                            },
                            {
                                id: 3.4, name: 'React.js'
                            },
                            {
                                id: 3.5, name: 'CSS'
                            },
                            {
                                id: 3.6, name: 'TypeScript'
                            },
                            {
                                id: 3.7, name: 'Node.js'
                            },
                            {
                                id: 3.8, name: '微信小程序'
                            },
                            {
                                id: 3.9, name: 'Flutter'
                            },
                            {
                                id: 3.11, name: 'Webpack'
                            }
                        ]
                    },
                    {id: 4, name: '后端', path: '/home/frontend', tags: []},
                    {id: 5, name: 'Android', path: '/home/android', tags: []},
                    {id: 6, name: 'iOS', path: '/home/ios', tags: []},
                    {id: 7, name: '人工智能', path: '/home/ai', tags: []},
                    {id: 8, name: '开发工具', path: '/home/freebie', tags: []},
                    {id: 9, name: '代码人生', path: '/home/career', tags: []},
                    {id: 10, name: '阅读', path: '/home/article', tags: []},
                ]
            },
            {
                id: 3, name: '资讯', path: '/news', subMenuList: [
                    {id: 1, name: '全部', path: '/news/all', tags: []},
                    {id: 2, name: '行业动态', path: '/news/category', tags: []},
                    {id: 4, name: '软件更新', path: '/news/softwareUpdates', tags: []},
                    {id: 5, name: '编程语言', path: '/news/language', tags: []},
                ]
            },
            {
                id: 4, name: '小册', path: '/books', subMenuList: [
                    {id: 1, name: '全部', path: '/books/all', tags: []},
                    {id: 3, name: '前端', path: '/books/backend', tags: []},
                    {id: 4, name: '后端', path: '/books/frontend', tags: []},
                    {id: 5, name: 'Android', path: '/books/android', tags: []},
                    {id: 6, name: 'iOS', path: '/books/ios', tags: []},
                    {id: 7, name: '人工智能', path: '/books/ai', tags: []},
                    {id: 8, name: '开发工具', path: '/books/freebie', tags: []},
                    {id: 9, name: '代码人生', path: '/books/career', tags: []},
                    {id: 10, name: '阅读', path: '/books/article', tags: []},
                ]
            },
            {
                id: 5, name: '活动', path: '/events', subMenuList: [
                    {id: 1, name: '全部活动', path: '/events/all', tags: []},
                    {id: 2, name: '北京', path: '/events/beijing', tags: []},
                    {id: 3, name: '上海', path: '/events/shanghai', tags: []},
                    {id: 4, name: '广州', path: '/events/guangzhou', tags: []},
                    {id: 5, name: '深圳', path: '/events/shenzhen', tags: []},
                    {id: 6, name: '杭州', path: '/events/hangzhou', tags: []},
                    {id: 7, name: '其他', path: '/events/other', tags: []},
                ]
            }
        ],
        isShowBtnGroup: true,
        currentPathIndex: 0
    }

    showBtnGroup = () => {
        this.setState({
            isShowBtnGroup: true
        })
    }

    hideBtnGroup = () => {
        this.setState({
            isShowBtnGroup: false
        })
    }

    componentDidUpdate() {
        const index = this.state.navList.findIndex(item => {
            if (this.props.location.pathname === '/home' || this.props.location.pathname === '/home/recommended') {
                return item.path === '/home'
            } else {
                return item.path === this.props.location.pathname
            }
        });
        if (index > -1) {
            this.setState({
                currentPathIndex: index
            })
        }
    }

    render() {
        const {navList, currentPathIndex} = this.state;
        return (
            <div className={style.header}>
                <div className={style.container}>
                    {/*logo*/}
                    <a href="/">
                        <img src={logo} alt="掘金"/>
                    </a>
                    {/*nav*/}
                    <div className={style.nav}>
                        <ul className={style.mainNavList}>
                            {this.state.navList.map(item => {
                                return <NavLink to={item.path}
                                                exact
                                                activeClassName={style.linkActive}
                                                key={item.id}>
                                    {item.name}
                                </NavLink>
                            })}
                        </ul>
                        {/*搜索部分*/}
                        <div className={style.searchWrapper}>
                            <div className={style.searchBox}
                                 style={{overflow: this.state.isShowBtnGroup ? '' : 'hidden'}}>
                                <div className={style.searchInput}>
                                    <Search showBtnGroup={this.showBtnGroup} hideBtnGroup={this.hideBtnGroup}/>
                                </div>
                                <div className={this.state.isShowBtnGroup ? style.searchBtnBox : style.hide}>
                                    <div className={style.creatorsCenter}>创作者中心</div>
                                    <DropDownBtn list={['发布沸点', '发布小册', '回答问题', '发布资讯']}/>
                                </div>
                            </div>
                            <div className={style.notify}>
                                <Link to='/notification'>
                                    <img src={notifyIcon} alt="通知"/>
                                </Link>
                            </div>
                            <div className={style.avatar}>
                                <AvatarDropDownList/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.subNav} style={{display: this.props.showSubNav ? 'block' : 'none'}}>
                    <SubNav subMenuList={navList[currentPathIndex].subMenuList}/>
                </div>
            </div>
        );
    }
}

export default withRouter(Header);