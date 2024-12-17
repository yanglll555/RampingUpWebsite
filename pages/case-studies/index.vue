<template>
    <div class="case-studies page-container gradient-bottom">
        <div class="universal_container">
            <div class="title">
                Discover the inspiring stories of our incredible clients
            </div>
            <div class="desc">
                See how we have helped revolutionize their hiring, management, and payroll process
            </div>
            <div class="rampingBtn" @click="$router.push('/contact')">
                Ramp Up Now
				<img src="@/assets/images/btn_icon.png" alt="">
            </div>
            <ul>
                <li v-for="item in caseList" :key="item.id" @click="viewInfo(item.attributes.short_url)">
                    <div class="infos">
                        <img :src="`https://strapi.runworld.com.cn${item.attributes.logo.data.attributes.url}`" alt="">
                        <div class="text-box">
                            <div class="title">{{item.attributes.title}}</div>
                            <div class="desc">{{item.attributes.subtitle}}</div>
                        </div>
                    </div>
                    <div class="read-more-btn">
                        Read more
                    </div>
                </li>
                <div class="icon" v-if="!caseList?.length">
                    <i class="iconfont icon-loading"></i>
                </div>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    head() {
		return {
			title: 'Global Hiring Case Studies | Ramping Up'
		}
	},
    data () {
        return {
            caseList: []
        }
    },
    mounted() {
        this.getList()
    },
    methods: {
        viewInfo(id) {
            this.$router.push(`/case-studies/${id}`)
        },
        getList() {
            const url = 'https://strapi.runworld.com.cn/api/case-studies?populate=logo'
            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then((res) => {
                this.caseList = res.data
            })
            .finally(() => {
            })
        }
    }
}
</script>


<style scoped>
@media (max-width: 600px) {
    .case-studies {
        background-color: #101010;
        padding: 32px 0;
        color: #fff;
    }
    .case-studies .universal_container>.title {
        font-size: 36px;
        line-height: 45px;
        font-weight: 700;
        letter-spacing: 2px;
        position: relative;
    }
    .case-studies .universal_container>.title::after {
        content: '';
        position: absolute;
        bottom: -24px;
        left: 0;
        width: 70px;
        height: 4px;
        background-color: #47FC22;
    }
    .case-studies .universal_container>.desc {
        font-size: 13px;
        line-height: 16.25px;
        font-weight: 400;
        margin-top: 44px;
        opacity: 0.8;
    }
    .case-studies .universal_container>.rampingBtn {
        width: 185px;
        margin-top: 24px;
    }
    .case-studies ul {
        margin-top: 30px;
    }
    .case-studies ul li {
        margin: 24px 0;
        padding: 20px;
        border-radius: 16px;
        background-color: #0D0D0D;
    }
    .case-studies ul li .infos {
        display: flex;
        justify-content: space-between;
    }
    .case-studies ul li .infos img {
        width: 120px;
        height: 120px;
        border-radius: 16px;
        flex-shrink: 0;
    }
    .case-studies ul li .infos .text-box {
        flex: 1;
    }
    .case-studies ul li .title {
        font-size: 18px;
        line-height: 21.6px;
        overflow: hidden; /* 超出部分隐藏 */
        text-overflow: ellipsis; /* 显示省略号 */
        display: -webkit-box; /* 使用旧的 WebKit 语法 */
        -webkit-line-clamp: 2; /* 限制显示的行数 */
        -webkit-box-orient: vertical; /* 垂直方向排列 */
    }
    .case-studies ul li .desc {
        font-size: 14px;
        line-height: 17.5px;
        opacity: 0.6;
        padding-top: 8px;
        overflow: hidden; /* 超出部分隐藏 */
        text-overflow: ellipsis; /* 显示省略号 */
        display: -webkit-box; /* 使用旧的 WebKit 语法 */
        -webkit-line-clamp: 4; /* 限制显示的行数 */
        -webkit-box-orient: vertical; /* 垂直方向排列 */
    }
    .case-studies ul li .read-more-btn {
        padding: 0 16px;
        margin-top: 20px;
        height: 37px;
        line-height: 37px;
        border: 1px solid #47FC22;
        color: #47FC22;
        border-radius: 8px;
        text-align: center;
    }

    .case-studies ul .icon {
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
    .case-studies ul .icon .icon-loading {
        display: block;
        animation: spin 2s linear infinite;
        transform-origin: center center;
        font-size: 60px;
    }
}
@media (min-width: 600px) {
    .case-studies {
        background-color: #101010;
        padding: 120px 0;
        color: #fff;
    }
    .case-studies .universal_container {
        min-height: 500px;
    }
    .case-studies .universal_container>.title {
        font-size: 50px;
        line-height: 62.5px;
        font-weight: 700;
        letter-spacing: 2px;
        text-align: center;
        position: relative;
    }
    .case-studies .universal_container>.title::after {
        content: '';
        position: absolute;
        bottom: -24px;
        left: 0;
        right: 0;
        margin: 0 auto;
        width: 70px;
        height: 4px;
        background-color: #47FC22;
    }
    .case-studies .universal_container>.desc {
        font-size: 16px;
        line-height: 20px;
        font-weight: 400;
        text-align: center;
        margin-top: 44px;
        opacity: 0.8;
    }
    .case-studies .universal_container>.rampingBtn {
        width: 252px;
        margin: 0 auto;
        margin-top: 60px;
    }
    .case-studies ul {
        margin-top: 85px;
        display: flex;
        flex-wrap: wrap;
    }
    .case-studies ul li {
        flex-shrink: 0;
        margin: 20px;
        padding: 40px;
        border-radius: 16px;
        width: calc(33.33% - 40px);
        min-height: 540px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        cursor: pointer;
    }
    .case-studies ul li:hover {
        box-shadow: 0 0 20px #737373;
    }
    .case-studies ul li img {
        width: 100%;
        height: 240px;
    }
    .case-studies ul li .title {
        font-size: 28px;
        line-height: 30px;
        margin-top: 20px;
    }
    .case-studies ul li .desc {
        font-size: 15px;
        line-height: 20.8px;
        opacity: 0.6;
        padding-bottom: 20px;
    }
    .case-studies ul li .read-more-btn {
        padding: 0 16px;
        width: 114px;
        height: 40px;
        line-height: 40px;
        border: 1px solid #47FC22;
        color: #47FC22;
        border-radius: 8px;
        text-align: center;
    }

    .case-studies ul .icon {
        width: 60px;
        height: 60px;
        margin: 60px;
    }
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    .case-studies ul .icon .icon-loading {
        display: block;
        animation: spin 2s linear infinite;
        transform-origin: center center;
        font-size: 60px;
    }
}
</style>