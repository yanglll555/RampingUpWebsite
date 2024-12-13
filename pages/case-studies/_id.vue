<template>
    <div class="case-detail page-container gradient-bottom">
        <div class="universal_container">
            <img v-if="caseInfo.logo" :src="`https://strapi.runworld.com.cn${caseInfo.logo.data.attributes.url}`" alt="">
            <div class="title" v-show="caseInfo.title">{{caseInfo.title}}</div>
            <div class="desc">{{caseInfo.subtitle}}</div>
            <div class="text" v-html="caseInfo.content"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Case_Details',
    async asyncData({params}) {
        try {
            const url = `https://strapi.runworld.com.cn/api/case-studies?populate=logo,seo_tag,seo_title,seo_description&filters[short_url][$eq]=${params.id}`
            const data = await fetch(url).then(res => res.json())
            return {
                caseInfo: data?.data[0]?.attributes,
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
				{ hid: 'description', name: 'description', content: this.seo_description || this.caseInfo.title },
				{ hid: 'keywords', name: 'keywords', content: this.seo_tag || '' }
			]
		}
	},
    mounted() {
        console.log('test')
    },
    data () {
        return {
        }
    }
}
</script>
<style scoped>
@media (max-width: 600px) {
    .case-detail {
        background-color: #101010;
        padding: 32px 0;
        color: #fff;
    }
    .case-detail .universal_container {
        position: relative;
    }
    .case-detail .universal_container img {
        height: 120px;
        border-radius: 16px;
        border: 1px solid #47FC22;
    }
    .case-detail .title {
        margin-top: 24px;
        font-size: 36px;
        letter-spacing: 2px;
        font-weight: 700;
        line-height: 45px;
        position: relative;
    }
    .case-detail .title::after {
        content: '';
        position: absolute;
        bottom: -24px;
        left: 0;
        width: 70px;
        height: 4px;
        background-color: #47FC22;
    }
    .case-detail .desc {
        font-size: 14px;
        font-weight: 400;
        line-height: 16.25px;
        margin-top: 44px;
        color: rgba(255, 255, 255, 0.8);
    }

}
@media (min-width: 600px) {
    .case-detail {
        background-color: #101010;
        padding: 60px 0;
        color: #fff;
    }
    .case-detail .universal_container {
        min-height: 500px;
        padding-top: 78px;
        position: relative;
    }
    .case-detail .universal_container img {
        position: absolute;
        top: 0;
        right: 0;
        width: 293px;
        height: 240px;
        border-radius: 16px;
        border: 1px solid #47FC22;
    }
    .case-detail .title {
        width: 800px;
        font-size: 50px;
        letter-spacing: 2px;
        font-weight: 700;
        line-height: 62.5px;
        position: relative;
    }
    .case-detail .title::after {
        content: '';
        position: absolute;
        bottom: -24px;
        left: 0;
        width: 70px;
        height: 4px;
        background-color: #47FC22;
    }
    .case-detail .desc {
        width: 800px;
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        margin-top: 44px;
        color: rgba(255, 255, 255, 0.8);
    }

    .case-detail .text {
        margin-top: 55px;
    }
}
</style>

<style>
@media (max-width: 600px) {
    .case-detail .text p,.case-detail .text div, .case-detail .text div>span, .case-detail .text p>span {
        font-size: 14px;
        line-height: 22.4px;
        margin: 8px 0;
        white-space: pre-line;
    }

    .case-detail .text h1,.case-detail .text h2,.case-detail .text h3,.case-detail .text h4,.case-detail .text h5,.case-detail .text h6 {
        font-size: 24px;
        line-height: 26.4px;
        font-weight: 700;
        margin-top: 44px;
        margin-bottom: 20px;
        padding-left: 14px;
        position: relative!important;
    }
    .case-detail .text h1::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 4px;
        height: 26px;
        background-color: #47FC22;
    }
    .case-detail .text h2::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 4px;
        height: 26px;
        background-color: #47FC22;
    }
    .case-detail .text h3::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 4px;
        height: 26px;
        background-color: #47FC22;
    }
    .case-detail .text h4::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 4px;
        height: 26px;
        background-color: #47FC22;
    }
    .case-detail .text h5::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 4px;
        height: 26px;
        background-color: #47FC22;
    }
    .case-detail .text h6::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 4px;
        height: 26px;
        background-color: #47FC22;
    }
    .case-detail .text ul {
        margin-top: 16px;
        border-radius: 16px;
        background-color: #101010;
    }
    .case-detail .text li {
        font-size: 14px;
        line-height: 22.4px;
        color: rgba(255, 255, 255, 0.6);
        margin: 8px 0;
        padding-left: 68px;
        position: relative;
    }
    .case-detail .text li::before {
        content: '';
        position: absolute;
        left: 42px;
        top: 8px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border: 2px solid #47FC22;
        box-sizing: border-box;
    }
}
@media (min-width: 600px) {
    .case-detail .text p,.case-detail .text div, .case-detail .text div>span, .case-detail .text p>span {
        font-size: 14px;
        line-height: 22.4px;
        margin: 8px 0;
        white-space: pre-line;
    }

    .case-detail .text h1,.case-detail .text h2,.case-detail .text h3,.case-detail .text h4,.case-detail .text h5,.case-detail .text h6 {
        line-height: 35.2px;
        font-weight: 700;
        margin-top: 50px;
        margin-bottom: 32px;
        padding-left: 14px;
        position: relative!important;
    }
    .case-detail .text h1::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 4px;
        height: 34px;
        background-color: #47FC22;
    }
    .case-detail .text h2::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 4px;
        height: 34px;
        background-color: #47FC22;
    }
    .case-detail .text h3::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 4px;
        height: 34px;
        background-color: #47FC22;
    }
    .case-detail .text h4::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 4px;
        height: 34px;
        background-color: #47FC22;
    }
    .case-detail .text h5::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 4px;
        height: 34px;
        background-color: #47FC22;
    }
    .case-detail .text h6::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 4px;
        height: 34px;
        background-color: #47FC22;
    }
    .case-detail .text ul {
        margin-top: 14px;
        border-radius: 16px;
        background-color: #101010;
    }
    .case-detail .text li {
        font-size: 14px;
        line-height: 22.4px;
        color: rgba(255, 255, 255, 0.6);
        margin: 8px 0;
        padding-left: 68px;
        position: relative;
    }
    .case-detail .text li::before {
        content: '';
        position: absolute;
        left: 42px;
        top: 8px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border: 2px solid #47FC22;
        box-sizing: border-box;
    }
}
</style>