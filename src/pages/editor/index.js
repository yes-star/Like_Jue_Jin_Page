import React, {PureComponent} from 'react';
import {Editor} from "@bytemd/react";
// 引入编辑器所需插件
import breaks from "@bytemd/plugin-breaks"; // 支持休息
import footnotes from "@bytemd/plugin-footnotes"; // 支持脚注
import frontmatter from "@bytemd/plugin-frontmatter"; // 解析前题
import gfm from "@bytemd/plugin-gfm"; // 支持GFM(自动链接文字，删除，表，任务列表)
import gfmzhHans from "@bytemd/plugin-gfm/lib/locales/zh_Hans.json";
import gemoji from "@bytemd/plugin-gemoji"; // 支持Gemoji短码
import highlight from "@bytemd/plugin-highlight"; // 突出显示代码块
import highlightSSR from "@bytemd/plugin-highlight-ssr"; // 突出显示代码块(与SSR兼容)
import mediumZoom from "@bytemd/plugin-medium-zoom"; // 放大图像，如Medium
import math from "@bytemd/plugin-math"; // 支持数学公式
import mathzhHans from "@bytemd/plugin-math/lib/locales/zh_Hans.json"
import mermaid from "@bytemd/plugin-mermaid"; // 支持美人鱼图
import mermaidzhHans from "@bytemd/plugin-mermaid/lib/locales/zh_Hans.json"
import zhHans from "bytemd/lib/locales/zh_Hans.json";  //默认是英文版，我们替换成中文的
import "bytemd/dist/index.min.css";
import "highlight.js/styles/vs.css";

import {Button, message} from 'antd'
import {SwapOutlined} from '@ant-design/icons'
import AvatarDropDownList from "../../components/AvatarDropDownList";
import style from './style.module.css'
//引入action
import {
    addArtical
} from '../../store/actions/artical'
//引入connect用于连接UI组件与redux
import {connect} from 'react-redux'

const plugins = [
    gfm({locale: gfmzhHans}),
    gemoji(),
    highlight(),
    highlightSSR(),
    mediumZoom(),
    math({locale: mathzhHans}),
    breaks(),
    footnotes(),
    frontmatter(),
    mermaid({locale: mermaidzhHans})
];

class MdEditor extends PureComponent {
    state = {
        value: ''
    }

    componentWillUnmount() {
        // let res = window.confirm("请发布文章");
        // res && this.submit();
    }

    setValue = (v) => {
        this.setState({
            value: v
        })
    }

    submit = () => {
        this.props.addArtical({id: this.props.store.artical.length, text: this.state.value});
        message.info("发布成功")
    }

    render() {
        // 自动保存到草稿箱
        localStorage.setItem("store", JSON.stringify(this.props.store));
        (this.autoSaveRef) && (this.autoSaveRef.innerText = '保存成功');
        const {value} = this.state;
        return (
            <div className={style.editor}>
                <header className={style.header}>
                    <div className={style.headerLeft}>
                        <input type="text" placeholder='输入文章标题...'/>
                    </div>
                    <div className={style.headerRight}>
                        <div ref={(e) => this.autoSaveRef = e} className={style.warnSave}>文章将自动保存至草稿箱</div>
                        <div className={style.mx8}>
                            <Button>草稿箱</Button>
                        </div>
                        <div className={style.mx8}>
                            <Button type='primary' onClick={this.submit}>发布</Button>
                        </div>
                        <div className={style.mx8}>
                            <SwapOutlined style={{color: '#909090', fontSize: '20px'}}/>
                        </div>
                        <div className={style.mx8}>
                            <AvatarDropDownList/>
                        </div>
                    </div>
                </header>
                {/*编辑器部分*/}
                <div className={style.editorWrapper}>
                    <Editor locale={zhHans}
                            value={value}
                            plugins={plugins}
                            onChange={(v) => {
                                this.setValue(v)
                            }}
                            uploadImages={async (files) => {
                                // 在这里进行图片上传，最后将图片名称和url返回
                                console.log("files", files);
                                return [
                                    {
                                        title: files.map((i) => i.name),
                                        url: "http",
                                    },
                                ];
                            }}/>
                    {/* Viewer解析markdown */}
                    {/*<Viewer value={value} plugins={plugins}/>*/}
                </div>
            </div>
        );
    }
}


//使用connect()()创建并暴露一个Count的容器组件
export default connect(
    state => ({
        value: state.value,
        store: state
    }),
    {addArtical}
)(MdEditor);
