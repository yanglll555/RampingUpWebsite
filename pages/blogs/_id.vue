<template>
    <div class="blog-detail page-container gradient-bottom">
        <div class="universal_container">
            <div class="date">{{ updatedAt && tools.dateFormat(updatedAt) }}</div>
            <div class="title">{{title}}</div>
            <img class="pc-cover-img" :src="`https://strapi.runworld.com.cn${cover?.data.attributes.url}`" alt="">
            <div class="content">
                <div class="left">
                    <div class="logos">
                        <img v-for="link in footerLikns" :key="link.icon" @click="openUrl(link.link)" :src="require(`@/assets/images/${link.icon}`)" alt="">
                    </div>
                    <div class="author" v-for="(item, index) in authors?.data" :key="index">
                        <img class="ava" :src="`https://strapi.runworld.com.cn${item.attributes.profile_pic.data.attributes.url}`" alt="">
                        <div class="names">
                            <div class="desc">Written by</div>
                            <div class="name">{{item.attributes.name}}</div>
                        </div>
                    </div>
                </div>
                <img class="h5-cover-img" :src="`https://strapi.runworld.com.cn${cover?.data.attributes.url}`" alt="">
                <div class="right">
                    <div class="text" v-html="content">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import tools from '@/assets/js/utils'
export default {
    name: 'Blogs_Details',
    async asyncData({params}) {
        try {
            const url = `https://strapi.runworld.com.cn/api/blogs?populate=authors.profile_pic,cover,seo_tag,seo_title,seo_description&filters[short_url][$eq]=${params.id}`
            const data = await fetch(url).then(res => res.json())
            return {
                updatedAt: data?.data[0]?.attributes.updatedAt,
                title: data?.data[0]?.attributes.title,
                cover: data?.data[0]?.attributes.cover,
                authors: data?.data[0]?.attributes.authors,
                content: data?.data[0]?.attributes.content,
                seo_tag: data?.data[0]?.attributes.seo_tag,
                seo_title: data?.data[0]?.attributes.seo_title,
                seo_description: data?.data[0]?.attributes.seo_description,
                ...params
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    },
    head() {
		return {
			title: this.seo_title || this.id,
			meta: [
				{ hid: 'description', name: 'description', content: this.seo_description || this.title },
				{ hid: 'keywords', name: 'keywords', content: this.seo_tag || '' }
			]
		}
	},
    data () {
        return {
            tools
        }
    },
    computed: {
        footerLikns() {
            return [
                {icon: 'facebook.png', link: ''},
                {icon: 'ins.png', link: ''},
                {icon: 'in.png', link: 'https://sg.linkedin.com/company/ramping-up?trk=public_post_follow-view-profile'},
                {icon: 'twitter.png', link: ''}
            ]
        }
    },
    methods: {
        openUrl(url) {
            if (url) window.open(url)
        }
    }
}
</script>

<style scoped>
@media (max-width: 600px) {
    .blog-detail {
        background-color: #101010;
        padding: 32px 0;
        color: #fff;
    }
    .blog-detail .universal_container .pc-cover-img {
        display: none;
    }
    .blog-detail .universal_container>.date {
        font-size: 12px;
        color: rgba(255, 255, 255, 0.6);
    }
    .blog-detail .universal_container>.title {
        font-size: 24px;
        line-height: 30px;
        font-weight: 600;
        margin-top: 8px;
    }
    .blog-detail .universal_container>.content .left {
        margin-top: 24px;
        border-top: 1px solid #D9D9D9;
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
        padding-top: 24px;
    }

    .blog-detail .universal_container>.content .left .logos {
        display: flex;
    }
    .blog-detail .universal_container>.content .left .logos img {
        width: 24px;
        height: 24px;
        margin-right: 20px;
    }
    .blog-detail .universal_container>.content .left .logos img:last-child {
        margin: 0;
    }
    .blog-detail .universal_container>.content .left .author {
        display: flex;
    }
    .blog-detail .universal_container>.content .left .author .ava {
        flex-shrink: 0;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
    }
    .blog-detail .universal_container>.content .left .author .names {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-left: 10px;
    }
    .blog-detail .universal_container>.content .left .author .names .name {
        font-size: 14px;
        font-weight: 700;
        overflow: hidden; /* 超出部分隐藏 */
        text-overflow: ellipsis; /* 显示省略号 */
        display: -webkit-box; /* 使用旧的 WebKit 语法 */
        -webkit-line-clamp: 1; /* 限制显示的行数 */
        -webkit-box-orient: vertical; /* 垂直方向排列 */
    }
    .blog-detail .universal_container>.content .left .author .names .desc {
        font-size: 12px;
        font-weight: 400;
        opacity: 0.5;
        overflow: hidden; /* 超出部分隐藏 */
        text-overflow: ellipsis; /* 显示省略号 */
        display: -webkit-box; /* 使用旧的 WebKit 语法 */
        -webkit-line-clamp: 2; /* 限制显示的行数 */
        -webkit-box-orient: vertical; /* 垂直方向排列 */
    }
    .blog-detail .universal_container>.content .h5-cover-img {
        width: 100%;
        padding: 32px 0;
    }

    .blog-detail .universal_container>.content .right .title {
        font-size: 20px;
        line-height: 25px;
        font-weight: 700px;
        padding-bottom: 20px;
    }
}
@media (min-width: 600px) {
    .blog-detail {
        background-color: #101010;
        padding: 80px 0;
        color: #fff;
    }
    .blog-detail .universal_container .h5-cover-img {
        display: none;
    }
    .blog-detail .universal_container {
        padding-top: 20px;
        min-height: 500px;
    }
    .blog-detail .universal_container>.date {
        font-size: 14px;
        color: rgba(255, 255, 255, 0.6);
    }
    .blog-detail .universal_container>.title {
        font-size: 40px;
        line-height: 50px;
        font-weight: 600;
    }
    .blog-detail .universal_container>img {
        width: 100%;
        margin-top: 50px;
    }
    .blog-detail .universal_container>.content {
        display: flex;
        justify-content: space-between;
        margin-top: 45px;
    }
    .blog-detail .universal_container>.content .left {
        margin-right: 20px;
        flex: 1;
    }
    .blog-detail .universal_container>.content .left .logos {
        display: flex;
        padding-bottom: 16px;
    }
    .blog-detail .universal_container>.content .left .logos img {
        width: 24px;
        height: 24px;
        margin-right: 24px;
        cursor: pointer;
    }
    .blog-detail .universal_container>.content .left .author {
        padding: 40px 0;
        border-bottom: 1px solid #D9D9D9;
        display: flex;
    }
    .blog-detail .universal_container>.content .left .author .ava {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        overflow: hidden;
    }
    .blog-detail .universal_container>.content .left .author .names {
        height: 70px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 10px;
    }
    .blog-detail .universal_container>.content .left .author .names .name {
        font-size: 24px;
        font-weight: 700;
    }
    .blog-detail .universal_container>.content .left .author .names .desc {
        font-size: 16px;
        font-weight: 400;
        opacity: 0.5;
        margin-bottom: 4px;
    }
    .blog-detail .universal_container>.content .right {
        width: 66.66%;
        flex-shrink: 0;
    }

    .blog-detail .universal_container>.content .right .title {
        font-size: 20px;
        line-height: 25px;
        font-weight: 700px;
        padding-bottom: 20px;
    }
}
</style>


<style>
@media (max-width: 600px) {
    .blog-detail .text p,.blog-detail .text div, .blog-detail .text div>span, .blog-detail .text p>span {
        font-family: SF Pro;
        font-size: 14px;
        line-height: 21px;
        margin: 8px 0;
        white-space: pre-line;
        color: rgba(255, 255, 255, 0.8);
    }
    .blog-detail .text img, .blog-detail .text .image {
        width: 100%!important;
        height: auto!important;
        border-radius: 16px;
    }

    .blog-detail .text .image figcaption {
        color: rgba(255, 255, 255, 0.6);
        font-size: 12px;
        line-height: 18px;
    }

    .blog-detail .text h1,.blog-detail .text h2,.blog-detail .text h3,.blog-detail .text h4,.blog-detail .text h5,.blog-detail .text h6 {
		font-family: Bai Jamjuree;
        font-size: 16px;
        line-height: 19.09px;
        font-weight: 700;
        margin-top: 44px;
        margin-bottom: 20px;
        padding-left: 14px;
        color: #fff;
        position: relative!important;
    }
    .blog-detail .text strong {
        font-size: 16px;
        line-height: 19.09px;
        display: block;
        margin-bottom: 8px;
    }
    .blog-detail .text ul {
        margin-top: 16px;
        border-radius: 16px;
        background-color: #101010;
        padding: 12px 0;
    }
    .blog-detail .text li {
        font-family: SF Pro;
        font-size: 14px;
        line-height: 21px;
        color: rgba(255, 255, 255, 0.8);
        margin: 8px 0;
        padding-left: 30px;
        position: relative;
    }
    .blog-detail .text li::before {
        content: '';
        position: absolute;
        left: 0px;
        top: 3px;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        border: 1px solid #47FC22;
        box-sizing: border-box;
    }
}
@media (min-width: 600px) {
    .blog-detail .text p,.blog-detail .text div, .blog-detail .text div>span, .blog-detail .text p>span {
        font-family: SF Pro;
        font-size: 20px;
        line-height: 30px;
        margin: 8px 0;
        white-space: pre-line;
        color: rgba(255, 255, 255, 0.8);
    }
    .blog-detail .text img, .blog-detail .text .image {
        width: 788px!important;
        height: auto!important;
        border-radius: 16px;
    }
    .blog-detail .text .image figcaption {
        color: rgba(255, 255, 255, 0.6);
        font-size: 12px;
        line-height: 18px;
    }

    .blog-detail .text h1,.blog-detail .text h2,.blog-detail .text h3,.blog-detail .text h4,.blog-detail .text h5,.blog-detail .text h6 {
		font-family: Bai Jamjuree;
        font-size: 24px;
        line-height: 28.64px;
        font-weight: 700;
        margin-top: 50px;
        margin-bottom: 32px;
        padding-left: 14px;
        line-height: 28.64px;
        color: #fff;
        position: relative!important;
    }
    .blog-detail .text strong {
        font-size: 24px;
        line-height: 28.64px;
        display: block;
        margin-bottom: 8px;
    }
    .blog-detail .text ul {
        margin-top: 14px;
        border-radius: 16px;
        background-color: #101010;
        padding: 12px 0;
    }
    .blog-detail .text li {
        font-family: SF Pro;
        font-size: 20px;
        line-height: 30px;
        color: rgba(255, 255, 255, 0.8);
        margin: 8px 0;
        padding-left: 30px;
        position: relative;
    }
    .blog-detail .text li::before {
        content: '';
        position: absolute;
        left: 0px;
        top: 5px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 1px solid #47FC22;
        box-sizing: border-box;
    }
}
</style>