<template>
    <ul class="work-container">
        <li class="works" v-for="item in list" :key="item.id">
            <div class="content-container">
                <div class="left">
                    <img class="logo" :src="`https://strapi.runworld.com.cn${item.attributes.career_companies.data[0].attributes.company_cover.data.attributes.url}`" alt="">
                    <div class="content">
                        <div class="title">{{item.attributes.title}}</div>
                        <div class="info">
                            <div class="job-type">{{item.attributes.job_type}}</div>
                            <div class="company">{{item.attributes.career_companies.data[0].attributes.company_name}}</div>
                            <b></b>
                            <div class="date">
                                Posting date: <span>{{tools.calculateDaysAgo(item.attributes.posting_date)}}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="btns">
                    <div class="rampingBtn detail" @click="$router.push(`/job-board/job-details?id=${item.id}`)">View Detail</div>
                    <div class="rampingBtn" @click="applyFun(item)">Apply Now</div>
                </div>
            </div>
            <div class="h5-info">
                <div class="company">{{item.attributes.career_companies.data[0].attributes.company_name}}</div>
                <b></b>
                <div class="date">
                    Posting date: <span>{{tools.calculateDaysAgo(item.attributes.posting_date)}}</span>
                </div>
            </div>
            <div class="desc-container">
                <div class="item">
                    <img src="@/assets/images/job_icon1.png" alt="" class="icon">
                    <span>{{item.attributes.employment_type}}</span>
                </div>
                <div class="item">
                    <img src="@/assets/images/job_icon2.png" alt="" class="icon">
                    <span>{{item.attributes.salary}}</span>
                </div>
                <div class="item">
                    <img src="@/assets/images/job_icon3.png" alt="" class="icon">
                    <span>{{item.attributes.working_time}}</span>
                </div>
            </div>
            <ul class="tags-container">
                <li v-for="keywords in item.attributes.career_keywords.data" :key="keywords.id">{{keywords.attributes.name}}</li>
            </ul>
            <div class="h5-btns">
                <div class="rampingBtn detail" @click="$router.push(`/job-board/job-details?id=${item.id}`)">View Detail</div>
                <div class="rampingBtn" @click="applyFun(item)">Apply Now</div>
            </div>
        </li>
        <li class="loading" v-if="loading">
            <i class="iconfont icon-loading"></i>
        </li>
    </ul>
</template>
<script>
import tools from '@/assets/js/utils'
export default {
    props: {
        list: {
            type: [],
            default: () => [],
            required: true
        },
        loading: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            tools
        }
    },
    methods: {
        applyFun(item) {
            this.$store.commit('updateShowApply', true)
            this.$store.commit('setApplyCompany', item.attributes.career_companies.data[0].id)
            this.$store.commit('setApplyJob', item.id)
        }
    }
};
</script>
  
<style scoped>
.work-container {
    position: relative;
    min-height: 120px;
}
.work-container>.loading {
    overflow: hidden;
    width: 100%;
    height: 100%;
    min-height: 120px;
    background-color: rgba(0, 0, 0, 0.1);
    position: absolute;
    top: 0;
    padding-top: 50px;
}
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
.work-container>.loading .icon-loading {
    display: block;
    animation: spin 2s linear infinite;
    transform-origin: center center;
    font-size: 60px;
    width: 100%;
    text-align: center;
}
@media (max-width: 600px) {
    .works {
        margin-top: 20px;
        border: 1px solid #e5e5e5;
        border-radius: 8px;
        padding: 20px;
        overflow: hidden;
    }
    .works:first-child {
        margin-top: 0;
    }
    .works .content-container {
        margin-bottom: 8px;
    }
    .works .content-container .left {
        width: 100%;
        display: flex;
        align-items: center;
    }
    .works .content-container .left .logo {
        flex-shrink: 0;
        width: 56px;
        height: 56px;
        padding: 14px;
        background-color: #EDEFF5;
        border-radius: 5px;
    }
    .works .content-container .left .content {
        flex: 1;
        height: 56px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        margin-left: 8px;
    }
    .works .content-container .left .content .title {
        width: 100%;
        font-size: 20px;
        font-weight: bold;
        color: #18191C;
        overflow: hidden; /* 确保超出容器的文本被裁剪 */
        white-space: nowrap; /* 确保文本在一行内显示 */
        text-overflow: ellipsis; /* 使用省略号表示文本超出 */
    }
    .works .content-container .left .content .info {
        display: flex;
        align-items: center;
    }
    .works .content-container .left .content .info .job-type {
        background-color: #E7F6EA;
        color: #0BA02C;
        border-radius: 3px;
        font-size: 12px;
        padding: 4px 8px;
    }
    .works .content-container .left .content .info .company {
        display: none;
    }
    .works .content-container .left .content .info b {
        display: none;
    }
    .works .content-container .left .content .info .date {
        display: none;
    }
    .works .h5-info {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }
    .works .h5-info .company {
        color: #767F8C;
        font-size: 12px;
    }
    .works .h5-info b {
        display: block;
        height: 20px;
        width: 1px;
        margin: 0 8px;
        background-color: #D9D9D9;
    }
    .works .h5-info .date {
        font-size: 12px;
        color: #767F8C;
    }
    .works .h5-info .date span {
        color: #0BA02C;
    }
    .works .btns {
        display: none;
    }
    .works .h5-btns {
        display: flex;
        align-items: center;
        margin-top: 20px;
    }
    .works .h5-btns .rampingBtn {
        flex: 1;
        height: 40px;
        margin-left: 8px;
        font-size: 14px;
        color: #111;
        border-radius: 4px;
    }
    .works .h5-btns .rampingBtn.detail {
        background-color: #F1F2F4;
        margin-left: 0;
    }
    .works .desc-container {
        padding: 12px 0;
        border-top: 1px solid #E5E5E5;
    }
    .works .desc-container .item {
        margin: 8px 0;
        display: flex;
        align-items: center;
    }
    .works .desc-container .icon {
        width: 16px;
        height: 16px;
        margin-right: 8px;
    }
    .works .desc-container span {
        font-size: 14px;
        color: #767F8C;
    }
    .works .tags-container {
        display: flex;
        flex-wrap: wrap;
        padding-top: 12px;
        border-top: 1px solid #E5E5E5;
    }
    .works .tags-container li {
        margin-top: 8px;
        margin-right: 8px;
        flex-shrink: 0;
        height: 24px;
        line-height: 24px;
        padding: 0 8px;
        background-color: #F6F6F6;
        border-radius: 6px;
        font-size: 12px;
        color: #666;
    }
}
@media (min-width: 600px) {
    .works {
        margin-top: 20px;
        border: 1px solid #e5e5e5;
        border-radius: 8px;
        padding: 24px;
    }
    .works:first-child {
        margin-top: 0;
    }
    .works .content-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .works .content-container .left {
        display: flex;
        align-items: center;
    }
    .works .content-container .left .logo {
        width: 56px;
        height: 56px;
        padding: 14px;
        background-color: #EDEFF5;
        border-radius: 5px;
    }
    .works .content-container .left .content {
        height: 56px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 8px;
    }
    .works .content-container .left .content .title {
        font-size: 20px;
        font-weight: bold;
        color: #18191C;
    }
    .works .content-container .left .content .info {
        display: flex;
        align-items: center;
    }
    .works .content-container .left .content .info .job-type {
        background-color: #E7F6EA;
        color: #0BA02C;
        border-radius: 3px;
        font-size: 12px;
        padding: 4px 8px;
    }
    .works .content-container .left .content .info .company {
        color: #767F8C;
        margin-left: 8px;
        font-size: 14px;
    }
    .works .content-container .left .content .info b {
        display: block;
        height: 20px;
        width: 1px;
        margin: 0 8px;
        background-color: #D9D9D9;
    }
    .works .content-container .left .content .info .date {
        font-size: 14px;
        color: #767F8C;
    }
    .works .content-container .left .content .info .date span {
        color: #0BA02C;
    }
    .works .content-container .btns {
        display: flex;
        align-items: center;
    }
    .works .content-container .btns .rampingBtn {
        height: 48px;
        margin-left: 12px;
        font-size: 14px;
        color: #111;
    }
    .works .content-container .btns .rampingBtn.detail {
        background-color: #F1F2F4;
    }
    .works .h5-info {
        display: none;
    }
    .works .desc-container {
        margin-top: 20px;
        display: flex;
        align-items: center;
    }
    .works .desc-container .item {
        display: flex;
        align-items: center;
    }
    .works .desc-container .icon {
        width: 16px;
        height: 16px;
        margin-right: 8px;
    }
    .works .desc-container span {
        margin-right: 16px;
        font-size: 14px;
        color: #767F8C;
    }
    .works .tags-container {
        display: flex;
        flex-wrap: wrap;
        padding-top: 10px;
    }
    .works .tags-container li {
        margin-top: 10px;
        margin-right: 8px;
        flex-shrink: 0;
        height: 24px;
        line-height: 24px;
        padding: 0 8px;
        background-color: #F6F6F6;
        border-radius: 6px;
        font-size: 12px;
        color: #666;
    }
    .works .h5-btns {
        display: none;
    }
}
</style>