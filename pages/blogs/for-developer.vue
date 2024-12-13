<template>
    <div class="blog page-container gradient-bottom">
        <div class="banner-box">
            <div class="universal_container">
                <h1 class="title">
                    Ramping Up
                    <br>
                    <span>
                        Blog
                        <br>
                        For Developer
                    </span>
                </h1>
                <div class="desc">
                    Discover tips, skills, and success
                    <br>
                    stories from our expert developers
                </div>
                <div class="btns">
                    <div class="rampingBtn" @click="$router.push('/contact')">Get Started</div>
                    <div class="rampingBtn right" @click="$router.push('/about')">About Us</div>
                </div>
            </div>
        </div>
        <div class="list-box">
            <div class="universal_container">
                <ul>
                    <li @click="viewInfo(item.attributes.short_url)" v-for="item in blogsList" :key="item.id">
                        <img :src="`https://strapi.runworld.com.cn${item.attributes.cover.data.attributes.url}`" alt="">
                        <div class="title">{{item.attributes.title}}</div>
                        <div class="desc">{{item.attributes.subtitle}}</div>
                        <div class="line"></div>
                        <div class="read-more-btn">
                            Read more
                        </div>
                    </li>
                    <div class="icon" v-if="!blogsList">
                        <i class="iconfont icon-loading"></i>
                    </div>
                </ul>
            </div>
        </div>
        <div class="started">
            <div class="title">Ready to Ramp Up your business?</div>
            <div class="rampingBtn" @click="$router.push('/contact')">
                Get Started
				<img src="@/assets/images/btn_icon.png" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default({
    head() {
		return {
			title: 'Blogs for Employer | Ramping Up'
		}
	},
    data () {
        return {
            blogsList: null
        }
    },
    mounted() {
        this.getList()
    },
    methods: {
        viewInfo(id) {
            this.$router.push(`/blogs/${id}`)
        },
        getList() {
            const url = 'https://strapi.runworld.com.cn/api/blogs?pagination[pageSize]=100&populate=authors,cover&filters[type][$eq]=for developer'
            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then((res) => {
                this.blogsList = res.data
            })
            .finally(() => {
            })
        }
    }
})
</script>


<style scoped>
@media (max-width: 600px) {
    .blog {
        background-color: #101010;
        color: #fff;
    }
    .blog .banner-box {
        padding: 62px 0;
        height: 365px;
        background-image: url('@/assets/images/blogs_banner_back2_h5.png');
		background-repeat: no-repeat;
		background-size: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .blog .banner-box .title {
        font-size: 36px;
        line-height: 45px;
        font-weight: 700;
        letter-spacing: 2px;
        position: relative;
        color: #47FC22;
    }
    .blog .banner-box .title span {
        color: #fff;
    }
    .blog .banner-box .desc {
        font-size: 13px;
        line-height: 16.25px;
        font-weight: 400;
        margin-top: 16px;
        opacity: 0.8;
    }
    .blog .banner-box .btns {
        margin-top: 24px;
        display: flex;
        align-items: center;
    }
    .blog .banner-box .rampingBtn {
        height: 40px;
    }
    .blog .banner-box .right {
        border: 1px solid #47FC22;
        color: #47FC22;
        background-color: unset;
        margin-left: 8px;
    }
    .blog .list-box ul {
        padding: 32px 0;
    }
    .blog .list-box ul li {
        margin-bottom: 24px;
        border-radius: 16px;
    }
    .blog .list-box ul li img {
        width: 100%;
        border-radius: 16px;
    }
    .blog .list-box ul li .title {
        padding: 0 10px;
        font-size: 18px;
        line-height: 22.5px;
        font-weight: 600;
        padding-top: 20px;
    }
    .blog .list-box ul li .desc {
        padding: 0 10px;
        font-size: 14px;
        line-height: 17.5px;
        opacity: 0.6;
        margin-top: 8px;

        overflow: hidden; /* 超出部分隐藏 */
        text-overflow: ellipsis; /* 显示省略号 */
        display: -webkit-box; /* 使用旧的 WebKit 语法 */
        -webkit-line-clamp: 3; /* 限制显示的行数 */
        -webkit-box-orient: vertical; /* 垂直方向排列 */
    }
    .blog .list-box ul li .line {
        height: 1px;
        background-color: #D9D9D9;
        margin: 20px 10px;
    }
    .blog .list-box ul li .read-more-btn {
        padding: 0 10px;
        font-size: 14px;
        letter-spacing: -0.4px;
        padding-bottom: 20px;
    }
    .blog .list-box ul .icon {
        width: 60px;
        height: 60px;
        margin: 60px auto;
    }
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    .blog .list-box ul .icon .icon-loading {
        display: block;
        animation: spin 2s linear infinite;
        transform-origin: center center;
        font-size: 60px;
    }
}
@media (min-width: 600px) {
    .blog {
        position: relative;
        z-index: 101;
    }
    .banner-box {
        padding: 100px 0;
        background-image: url('@/assets/images/blogs_banner_back2.png');
		background-repeat: no-repeat;
		background-size: 100%;
    }
    .banner-box .title {
        text-align: right;
        font-size: 52px;
        line-height: 62.5px;
        font-weight: 700;
        letter-spacing: 2px;
        color: #47FC22;
    }
    .banner-box .title span {
        color: #fff;
    }
    .banner-box .desc {
        text-align: right;
        font-size: 18px;
        line-height: 22.5px;
        font-weight: 400;
        margin-top: 44px;
        color: #fff;
        opacity: 0.8;
        margin-top: 16px;
    }
    .banner-box .btns {
        margin-top: 54px;
        display: flex;
        justify-content: flex-end;
    }
    .banner-box .rampingBtn {
        height: 52px;
        font-size: 18px;
    }
    .banner-box .rampingBtn.right {
        border: 1px solid #47FC22;
        color: #47FC22;
        background-color: unset;
        margin-left: 16px;
    }
    .list-box {
        padding: 100px 0;
    }
    .list-box ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .list-box ul li {
        flex-shrink: 0;
        margin: 10px 0;
        border-radius: 16px;
        overflow: hidden;
        width: 570px;
        height: 497px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
    }
    .list-box ul li:hover {
        box-shadow: 0 0 20px #737373;
    }
    .list-box ul li img {
        width: 100%;
        height: 322px;
    }
    .list-box ul li .title {
        width: 530px;
        font-size: 22px;
        line-height: 27.5px;
        font-weight: 600;
    }
    .list-box ul li .desc {
        width: 530px;
        height: 36px;
        font-size: 14px;
        line-height: 17.5px;
        color: #999;

        overflow: hidden; /* 超出部分隐藏 */
        text-overflow: ellipsis; /* 显示省略号 */
        display: -webkit-box; /* 使用旧的 WebKit 语法 */
        -webkit-line-clamp: 2; /* 限制显示的行数 */
        -webkit-box-orient: vertical; /* 垂直方向排列 */
    }
    .list-box ul li .line {
        width: 530px;
        height: 1px;
        background-color: #D9D9D9;
    }
    .list-box ul li .read-more-btn {
        width: 530px;
        font-size: 14px;
        letter-spacing: -0.4px;
        padding-bottom: 20px;
    }
    .list-box ul .icon {
        width: 60px;
        height: 60px;
        margin: 60px;
        color: #fff;
    }
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    .list-box ul .icon .icon-loading {
        display: block;
        animation: spin 2s linear infinite;
        transform-origin: center center;
        font-size: 60px;
    }
}
</style>