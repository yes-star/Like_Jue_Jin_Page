import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {BackTop, Anchor, Avatar, Button} from 'antd';

import ArticalViewer from "../../components/ArticalViewer";
import style from "./style.module.css";
import LeftBar from "./sub-cpns/leftBar";
import articalImg from "@/assets/img/3.png";
import articalImg1 from "@/assets/img/sny.jpg";
import AuthorCard from "./sub-cpns/authorCard";
import Juejin from "../../components/Juejin";
import myCode from "@/assets/img/my.png";
import RelatedArticles from "../../components/RelatedArticles";

const {Link} = Anchor;

class Artical extends PureComponent {
    state = {
        // 文章目录栈
        AnchorStack: [],
    }

    componentDidMount() {
        let h1 = document.querySelectorAll('.markdown-body h1');
        let h2 = document.querySelectorAll('.markdown-body h2');
        let h3 = document.querySelectorAll('.markdown-body h3');
        let h4 = document.querySelectorAll('.markdown-body h4');
        let h5 = document.querySelectorAll('.markdown-body h5');
        let h6 = document.querySelectorAll('.markdown-body h6');
        let anchorList = [...h1, ...h2, ...h3, ...h4, ...h5, ...h6];
        // 设置锚点
        anchorList.forEach((item, index) => item.setAttribute('id', `heading-${index}`));
        this.setState({
            AnchorStack: anchorList
        })
    }

    render() {
        let id = this.props.location.search.split('=')[1];
        return (
            <div className={style.artical}>
                {/*左侧布局*/}
                <div className={style.articalLeftWrapper}>
                    <LeftBar/>
                </div>
                {/*中间*/}
                <div className={style.articalMiddleWrapper}>
                    {/*作者信息*/}
                    <div className={style.author}>
                        <Avatar style={{marginRight: '12px', cursor: 'pointer'}} size={40}
                                src={articalImg1}/>
                        <div className={style.authorInfo}>
                            <div className={style.authorName}>小鱼哥</div>
                            <div className={style.metaBox}>2022年08月13日 阅读 520</div>
                        </div>
                        <Button>关注</Button>
                    </div>
                    {/*文章配图*/}
                    <img className={style.articalImg} src={articalImg} alt="文章配图"/>
                    {/* Viewer解析markdown */}
                    <ArticalViewer ref={e => this.viewer = e} value={this.props?.value[id]?.text}/>
                </div>
                {/*右侧布局*/}
                <div className={style.articalRightWrapper}>
                    <AuthorCard/>
                    <Juejin/>
                    <img className={style.mycode} src={myCode} alt="小鱼哥"/>
                    <RelatedArticles/>
                    {/*文章目录*/}
                    <p>目录</p>
                    <Anchor offsetTop={80} showInkInFixed targetOffset={62}>
                        {
                            //这里只简单解析一下目录
                            this.state.AnchorStack.map((item, index) => {
                                return (
                                    <Link key={index} href={`#heading-${index}`} title={item?.innerText}/>
                                )
                            })
                        }
                    </Anchor>
                </div>
                {/*回到顶部*/}
                <BackTop visibilityHeight={800}/>
            </div>
        );
    }
}


export default connect(state => ({
    value: state.artical
}))(Artical);