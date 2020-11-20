import React, { Component } from 'react';

class News_detail extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    /**
     * 详情页面获取路径中传递过来的id，或者说上一个页面传递过来的id
     */
    componentDidMount() {
        let id = localStorage.getItem("id");
        console.log("我获取到了id====>"+id);
        localStorage.removeItem("id");
    }
    render() {
        return (
            <div>我是新闻详情</div>
        );
    }
}

export default News_detail;