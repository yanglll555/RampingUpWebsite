<template>
    <div class="job-details page-container">
        <div class="head-container">
            <div class="universal_container">
                <div class="back" @click="$router.back()">
                    <i class="iconfont icon-arrow-left-bold"></i>
                    Job Details
                </div>
                <!-- <div class="search">
                    <img class="search-icon" src="@/assets/images/job_search.png" alt="">
                    <input v-model="searchValue" type="text" placeholder="Enter your First name">
                </div> -->
            </div>
        </div>
        <div class="content-container">
            <div class="universal_container">
                <div class="top">
                    <div class="left">
                        <img class="logo" :src="`https://strapi.runworld.com.cn${info.attributes?.career_companies.data[0].attributes.company_cover.data.attributes.url}`" alt="">
                        <div class="content">
                            <div class="title">{{info.attributes?.title}}</div>
                            <div class="info" v-if="info.attributes">
                                <div class="company">at {{info.attributes?.career_companies.data[0].attributes.company_name}}.</div>
                                <div class="job-type">{{info.attributes?.job_type}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="btns">
                        <el-dropdown trigger="click" @command="shareFun">
                            <div class="rampingBtn detail">
                                Share
                                <i class="el-icon-arrow-down el-icon--right"></i>
                            </div>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item v-for="item in shareLikns" :key="item.type" :command="item.type">
                                    <img :src="require(`@/assets/images/${item.icon}`)" alt="">
                                    {{item.name}}
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                        <div class="rampingBtn apply" @click="applyFun(info)">
                            Apply Now
                            <i class="iconfont icon-youjiantou"></i>
                        </div>
                    </div>
                </div>
                <div class="content-box">
                    <div class="content-text">
                        <span v-html="info.attributes?.description"></span>
                    </div>
                    <div class="content-info">
                        <div class="job-view">
                            <div class="sub-title">Job Overview</div>
                            <div class="top-label">SALARY (USD)</div>
                            <div class="top-value green">{{info.attributes?.salary}}</div>
                            <div class="top-desc">{{info.attributes?.salary_frequency}}</div>
                            <div class="top-label">JOB LOCATION</div>
                            <div class="top-value">{{info.attributes?.job_location}}</div>
                            <div class="line"></div>
                            <ul>
                                <li>
                                    <img src="@/assets/images/job_detail_icon1.png" alt="">
                                    <div class="label">Job Posted:</div>
                                    <div class="value">{{info.attributes?.posting_date}}</div>
                                </li>
                                <li>
                                    <img src="@/assets/images/job_detail_icon2.png" alt="">
                                    <div class="label">Job Type:</div>
                                    <div class="value">{{info.attributes?.job_type}}</div>
                                </li>
                                <li>
                                    <img src="@/assets/images/job_detail_icon3.png" alt="">
                                    <div class="label">Experience:</div>
                                    <div class="value">{{info.attributes?.experience}}</div>
                                </li>
                                <li>
                                    <img src="@/assets/images/job_detail_icon4.png" alt="">
                                    <div class="label">Education:</div>
                                    <div class="value">{{info.attributes?.education}}</div>
                                </li>
                                <li class="full">
                                    <img src="@/assets/images/job_detail_icon5.png" alt="">
                                    <div class="label">Skill:</div>
                                    <div class="value">{{info.attributes?.skill}}</div>
                                </li>
                            </ul>
                        </div>
                        <div class="h5-content-text">
                            <span v-html="info.attributes?.description"></span>
                        </div>
                        <div class="company-view">
                            <div class="sub-title">Company Overview</div>
                            <div class="company">
                                <img :src="`https://strapi.runworld.com.cn${info.attributes?.career_companies.data[0].attributes.company_cover.data.attributes.url}`" alt="" class="logo">
                                <div class="company-content">
                                    <div class="title">{{info.attributes?.career_companies.data[0].attributes.company_name}}</div>
                                    <div class="info">{{info.attributes?.career_companies.data[0].attributes.company_location}}</div>
                                </div>
                            </div>
                            <div class="company-desc">
                                <span v-html="info.attributes?.career_companies.data[0].attributes.company_introduction"></span>
                            </div>
                            <div class="to-company" @click="$router.push(`/job-board/company-details?id=${info.attributes?.career_companies.data[0].id}`)">
                                View this Company other job Openings <i class="iconfont icon-arrow-right-bold"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default({
    head() {
		return {
			title: 'Job Board Detail'
		}
	},
    data () {
        return {
            searchValue: '',
            info: {}
        }
    },
    mounted() {
        this.getDetail()
    },
    computed: {
        shareLikns() {
            return [
                {icon: 'share_copy.png', link: '', name: 'Copy link', type: 'copy'},
                {icon: 'share_refer.png', link: '', name: 'Refer a friend', type: 'refer'},
                {icon: 'share_facebook.png', link: '', name: 'Share on Facebook', type: 'facebook'},
                {icon: 'share_x.png', link: '', name: 'Share on X', type: 'x'},
                {icon: 'share_linkedin.png', link: '', name: 'Share on LinkedIn', type: 'LinkedIn'},
                {icon: 'share_wechat.png', link: '', name: 'Share on WeChat', type: 'wechat'}
            ]
        }
    },
    methods: {
        getDetail() {
            const url = `https://strapi.runworld.com.cn/api/career-jobs?populate=career_companies.company_cover&filters[id][$eq]=${this.$route.query.id}`
            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then((res) => {
                if (res.data.length) this.info = res.data[0]
            })
            .finally(() => {
            })
        },
        applyFun(item) {
            this.$store.commit('updateShowApply', true)
            this.$store.commit('setApplyCompany', item.attributes.career_companies.data[0].id)
            this.$store.commit('setApplyJob', item.id)
        },
        shareFun(type) {
            if (type === 'wechat') {
            }
        }
    }
})
</script>

<style scoped>
@media (max-width: 600px) {
    .head-container {
        background-color: #F1F2F4;
    }
    .head-container .universal_container {
        height: 52px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .head-container .back {
        color: #18191C;
        font-size: 12px;
        cursor: pointer;
        user-select: none;
    }
    .head-container .back i {
        margin-right: 8px;
    }
    .head-container .search {
        display: none;
        height: 48px;
        position: relative;
    }
    .head-container .search .search-icon {
        width: 24px;
        height: 24px;
        position: absolute;
        left: 16px;
        top: 12px;
    }
    .head-container .search input {
        width: 526px;
        height: 100%;
        border-radius: 8px;
        border: none;
        font-size: 14px;
        padding: 0 48px;
    }

    .content-container {
        padding: 20px 0;
    }
    .content-container .top {}
    .content-container .top .left {
        display: flex;
        align-items: center;
    }
    .content-container .top .left .logo {
        width: 56px;
        height: 56px;
        padding: 14px;
        background-color: #EDEFF5;
        border-radius: 5px;
    }
    .content-container .top .left .content {
        height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 8px;
    }
    .content-container .top .left .content .title {
        font-size: 16px;
        font-weight: bold;
        color: #18191C;
    }
    .content-container .top .left .content .info {
        display: flex;
        align-items: center;
        margin-top: 5px;
    }
    .content-container .top .left .content .info .job-type {
        background-color: #E7F6EA;
        color: #0BA02C;
        border-radius: 3px;
        font-size: 12px;
        padding: 4px 8px;
        margin-left: 4px;
    }
    .content-container .top .left .content .info .company {
        color: #474C54;
        font-size: 12px;
    }
    .content-container .top .btns {
        display: flex;
        align-items: center;
    }
    .content-container .top .btns .rampingBtn {
        width: 170px;
        height: 40px;
        margin-left: 8px;
        font-size: 16px;
        color: #111;
        border-radius: 4px;
    }
    .el-dropdown-menu__item {
        width: 230px;
        height: 48px;
        font-size: 14px;
        display: flex;
        align-items: center;
    }
    .el-dropdown-menu__item img {
        width: 24px;
        height: 24px;
        margin-right: 12px;
    }
    .el-dropdown-menu__item:hover {
        background-color: #F9F9F9;
        color: unset;
    }
    .content-container .top .btns .rampingBtn.detail {
        background-color: #F1F2F4;
        margin-left: 0;
    }
    .content-container .top .btns .rampingBtn i {
        margin-left: 12px;
    }
    .content-container .content-box {
        margin-top: 30px;
        display: flex;
    }
    .content-container .content-box .content-text {
        display: none;
    }
    .content-container .content-box .content-info {
        flex: 1;
    }
    .content-container .content-box .content-info .h5-content-text {
        flex: 1;
        margin-bottom: 20px;
        font-size: 12px;
        line-height: 18px;
        color: #5E6670;
    }
    .content-container .content-box .content-info .job-view,.content-container .content-box .content-info .company-view {
        border: 1px solid #E5E5E5;
        border-radius: 8px;
        padding: 20px;
        margin-bottom: 20px;
    }
    .content-container .content-box .content-info .sub-title {
        font-size: 16px;
        color: #18191C;
    }
    .content-container .content-box .content-info .job-view .top-label {
        margin-top: 20px;
        color: #767F8C;
        font-size: 12px;
    }
    .content-container .content-box .content-info .job-view .top-value {
        margin-top: 2px;
        color: #18191C;
        font-size: 18px;
        line-height: 24px;
    }
    .content-container .content-box .content-info .job-view .green {
        color: #0A9212;
    }
    .content-container .content-box .content-info .job-view .top-desc {
        margin-top: 4px;
        color: #767F8C;
        font-size: 12px;
    }
    .content-container .content-box .content-info .job-view .line {
        margin-top: 20px;
        height: 1px;
        background-color: #D9D9D9;
    }
    .content-container .content-box .content-info .job-view ul {
        display: flex;
        flex-wrap: wrap;
    }
    .content-container .content-box .content-info .job-view li {
        width: 50%;
        margin-top: 20px;
    }
    .content-container .content-box .content-info .job-view li.full {
        width: 100%;
    }
    .content-container .content-box .content-info .job-view li img {
        width: 32px;
        height: 32px;
    }
    .content-container .content-box .content-info .job-view li .label {
        font-size: 12px;
        color: #767F8C;
        margin-top: 12px;
    }
    .content-container .content-box .content-info .job-view li .value {
        font-size: 14px;
        color: #18191C;
        margin-top: 4px;
    }
    .content-container .content-box .content-info .company-view .company {
        display: flex;
        align-items: center;
        margin-top: 20px;
    }
    .content-container .content-box .content-info .company-view .company .logo {
        width: 48px;
        height: 48px;
        padding: 12px;
        background-color: #EDEFF5;
        border-radius: 4px;
    }
    .content-container .content-box .content-info .company-view .company .company-content {
        height: 48px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 8px;
    }
    .content-container .content-box .content-info .company-view .company .company-content .title {
        color: #18191C;
        font-size: 16px;
        line-height: 24px;
    }
    .content-container .content-box .content-info .company-view .company .company-content .info {
        color: #767F8C;
        font-size: 12px;
        line-height: 18px;
    }
    .content-container .content-box .content-info .company-view .company-desc {
        color: #5E6670;
        font-size: 12px;
        line-height: 18px;
        margin-top: 20px;
    }
    .content-container .content-box .content-info .company-view .to-company {
        height: 40px;
        line-height: 40px;
        text-align: center;
        background-color: rgba(10, 146, 18, 0.05);
        color: #0A9212;
        font-size: 14px;
        margin-top: 20px;
        cursor: pointer;
    }
    .content-container .content-box .content-info .company-view .to-company i {
        margin-left: 8px;
    }
}
@media (min-width: 600px) {
    .head-container {
        background-color: #F1F2F4;
    }
    .head-container .universal_container {
        height: 88px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .head-container .back {
        color: #18191C;
        font-size: 18px;
        cursor: pointer;
        user-select: none;
    }
    .head-container .back i {
        margin-right: 2px;
    }
    .head-container .search {
        height: 48px;
        position: relative;
    }
    .head-container .search .search-icon {
        width: 24px;
        height: 24px;
        position: absolute;
        left: 16px;
        top: 12px;
    }
    .head-container .search input {
        width: 526px;
        height: 100%;
        border-radius: 8px;
        border: none;
        font-size: 14px;
        padding: 0 48px;
    }

    .content-container {
        padding: 40px 0;
    }
    .content-container .top {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .content-container .top .left {
        display: flex;
        align-items: center;
    }
    .content-container .top .left .logo {
        width: 80px;
        height: 80px;
        padding: 28px;
        background-color: #EDEFF5;
        border-radius: 5px;
    }
    .content-container .top .left .content {
        height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 20px;
    }
    .content-container .top .left .content .title {
        font-size: 24px;
        font-weight: bold;
        color: #18191C;
    }
    .content-container .top .left .content .info {
        display: flex;
        align-items: center;
        margin-top: 10px;
    }
    .content-container .top .left .content .info .job-type {
        background-color: #E7F6EA;
        color: #0BA02C;
        border-radius: 3px;
        font-size: 12px;
        padding: 4px 8px;
        margin-left: 8px;
    }
    .content-container .top .left .content .info .company {
        color: #474C54;
        font-size: 18px;
    }
    .content-container .top .btns {
        display: flex;
        align-items: center;
    }
    .content-container .top .btns .rampingBtn {
        height: 56px;
        margin-left: 12px;
        font-size: 16px;
        color: #111;
        border-radius: 4px;
    }
    .el-dropdown-menu__item {
        width: 230px;
        height: 48px;
        font-size: 14px;
        display: flex;
        align-items: center;
    }
    .el-dropdown-menu__item img {
        width: 24px;
        height: 24px;
        margin-right: 12px;
    }
    .el-dropdown-menu__item:hover {
        background-color: #F9F9F9;
        color: unset;
    }
    .content-container .top .btns .rampingBtn.detail {
        background-color: #F1F2F4;
    }
    .content-container .top .btns .rampingBtn.apply {
        padding: 0 60px;
    }
    .content-container .top .btns .rampingBtn i {
        margin-left: 12px;
    }
    .content-container .content-box {
        margin-top: 40px;
        display: flex;
    }
    .content-container .content-box .content-text {
        flex: 1;
        margin-right: 20px;
        font-size: 16px;
        line-height: 24px;
        color: #5E6670;
    }
    .content-container .content-box .content-info {
        width: 387px;
        flex-shrink: 0;
    }
    .content-container .content-box .content-info .h5-content-text {
        display: none;
    }
    .content-container .content-box .content-info .job-view,.content-container .content-box .content-info .company-view {
        border: 1px solid #E5E5E5;
        border-radius: 8px;
        padding: 20px;
        margin-bottom: 20px;
    }
    .content-container .content-box .content-info .sub-title {
        font-size: 18px;
        color: #18191C;
    }
    .content-container .content-box .content-info .job-view .top-label {
        margin-top: 20px;
        color: #767F8C;
        font-size: 12px;
    }
    .content-container .content-box .content-info .job-view .top-value {
        margin-top: 2px;
        color: #18191C;
        font-size: 18px;
        line-height: 24px;
    }
    .content-container .content-box .content-info .job-view .green {
        color: #0A9212;
    }
    .content-container .content-box .content-info .job-view .top-desc {
        margin-top: 4px;
        color: #767F8C;
        font-size: 12px;
    }
    .content-container .content-box .content-info .job-view .line {
        margin-top: 20px;
        height: 1px;
        background-color: #D9D9D9;
    }
    .content-container .content-box .content-info .job-view ul {
        display: flex;
        flex-wrap: wrap;
    }
    .content-container .content-box .content-info .job-view li {
        width: 50%;
        margin-top: 20px;
    }
    .content-container .content-box .content-info .job-view li.full {
        width: 100%;
    }
    .content-container .content-box .content-info .job-view li img {
        width: 32px;
        height: 32px;
    }
    .content-container .content-box .content-info .job-view li .label {
        font-size: 12px;
        color: #767F8C;
        margin-top: 12px;
    }
    .content-container .content-box .content-info .job-view li .value {
        font-size: 14px;
        color: #18191C;
        margin-top: 4px;
    }
    .content-container .content-box .content-info .company-view .company {
        display: flex;
        align-items: center;
        margin-top: 20px;
    }
    .content-container .content-box .content-info .company-view .company .logo {
        width: 48px;
        height: 48px;
        padding: 12px;
        background-color: #EDEFF5;
        border-radius: 4px;
    }
    .content-container .content-box .content-info .company-view .company .company-content {
        height: 48px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 8px;
    }
    .content-container .content-box .content-info .company-view .company .company-content .title {
        color: #18191C;
        font-size: 16px;
        line-height: 24px;
    }
    .content-container .content-box .content-info .company-view .company .company-content .info {
        color: #767F8C;
        font-size: 12px;
        line-height: 18px;
    }
    .content-container .content-box .content-info .company-view .company-desc {
        color: #5E6670;
        font-size: 16px;
        line-height: 24px;
        margin-top: 20px;
    }
    .content-container .content-box .content-info .company-view .to-company {
        height: 40px;
        line-height: 40px;
        text-align: center;
        background-color: rgba(10, 146, 18, 0.05);
        color: #0A9212;
        font-size: 14px;
        margin-top: 20px;
        cursor: pointer;
    }
    .content-container .content-box .content-info .company-view .to-company i {
        margin-left: 8px;
    }
}
</style>