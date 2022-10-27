import React, {PureComponent} from 'react';
import {Viewer} from "@bytemd/react";

// 引入编辑器所需插件
import breaks from "@bytemd/plugin-breaks"; // 支持休息
import footnotes from "@bytemd/plugin-footnotes"; // 支持脚注
import frontmatter from "@bytemd/plugin-frontmatter"; // 解析前题
import gfm from "@bytemd/plugin-gfm"; // 支持GFM(自动链接文字，删除，表，任务列表)
import gemoji from "@bytemd/plugin-gemoji"; // 支持Gemoji短码
import highlight from "@bytemd/plugin-highlight"; // 突出显示代码块
import highlightSSR from "@bytemd/plugin-highlight-ssr"; // 突出显示代码块(与SSR兼容)
import mediumZoom from "@bytemd/plugin-medium-zoom"; // 放大图像，如Medium
import math from "@bytemd/plugin-math"; // 支持数学公式
import mermaid from "@bytemd/plugin-mermaid"; // 支持美人鱼图
import "bytemd/dist/index.min.css";
import "highlight.js/styles/vs.css";
// 主题样式
import "github-markdown-css";

const plugins = [
    gfm(),
    gemoji(),
    highlight(),
    highlightSSR(),
    mediumZoom(),
    math(),
    breaks(),
    footnotes(),
    frontmatter(),
    mermaid()
];

class ArticalViewer extends PureComponent {
    render() {
        return (
            <>
                {/* Viewer解析markdown */}
                <Viewer value={this.props.value} plugins={plugins}/>
            </>
        );
    }
}

export default ArticalViewer;