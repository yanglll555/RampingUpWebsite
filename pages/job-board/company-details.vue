<template>
    <div class="company-details page-container">
        <div class="head-container">
            <div class="universal_container">
                <div class="back" @click="$router.back()">
                    <i class="iconfont icon-arrow-left-bold"></i>
                    Company Details
                </div>
                <!-- <div class="search">
                    <img class="search-icon" src="@/assets/images/job_search.png" alt="">
                    <input v-model="searchValue" type="text" placeholder="Enter your First name">
                </div> -->
            </div>
        </div>
        <div class="content-container">
            <div class="universal_container">
                <div class="company">
                    <img :src="`https://strapi.runworld.com.cn${info.attributes?.company_cover.data.attributes.url}`" alt="" class="logo">
                    <div class="company-content">
                        <div class="title">{{ info.attributes?.company_name }}</div>
                        <div class="info">{{ info.attributes?.company_location }}</div>
                    </div>
                </div>

                <el-tabs v-model="activeName">
                    <el-tab-pane label="Overview" name="overview">
                        <div class="company-overview">
                            <div class="company-desc">
                                <span v-html="info.attributes?.company_introduction"></span>
                            </div>
                            <div class="company-info">
                                <div class="head">
                                    <img :src="`https://strapi.runworld.com.cn${info.attributes?.company_cover.data.attributes.url}`" alt="" class="logo">
                                    <div class="company-content">
                                        <div class="title">{{ info.attributes?.company_name }}</div>
                                        <div class="info">{{ info.attributes?.company_location }}</div>
                                    </div>
                                </div>
                                <div class="label">Website</div>
                                <div class="value">{{ info.attributes?.company_website }}</div>
                                <div class="label">E-mail</div>
                                <div class="value">{{ info.attributes?.company_email }}</div>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane :label="`Jobs(${jobList.length})`" name="jobs">
                        <WorkList :list="jobList"></WorkList>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </div>
    </div>
</template>

<script>
export default({
    head() {
		return {
			title: 'Company Detail'
		}
	},
    mounted() {
        this.getCompany()
        this.getJobs()
    },
    data () {
        return {
            searchValue: '',
            activeName: 'overview',
            info: {},
            jobList: []
        }
    },
    methods: {
        getCompany() {
            const url = `https://strapi.runworld.com.cn/api/career-companies?populate=company_cover,career_Job&filters[id][$eq]=${this.$route.query.id}`
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
        getJobs() {
            const url = `https://strapi.runworld.com.cn/api/career-jobs?populate=career_companies.company_cover,career_keywords&pagination[pageSize]=100&filters[career_companies][$eq]=${this.$route.query.id}`

            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then((res) => {
                this.jobList = res.data
            })
            .finally(() => {
            })
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
    .content-container .company {
        display: flex;
        align-items: center;
    }
    .content-container .company .logo {
        width: 56px;
        height: 56px;
        padding: 14px;
        background-color: #EDEFF5;
        border-radius: 4px;
    }
    .content-container .company .company-content {
        height: 56px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 8px;
    }
    .content-container .company .company-content .title {
        color: #18191C;
        font-size: 16px;
        line-height: 28px;
    }
    .content-container .company .company-content .info {
        color: #767F8C;
        font-size: 12px;
        line-height: 18px;
        margin-top: 5px;
    }
    .content-container .el-tabs {
        margin-top: 24px;
    }
    .content-container .company-overview .company-desc {
        font-size: 12px;
        color: #5E6670;
        line-height: 18px;
        margin-bottom: 24px;
    }
    .content-container .company-overview .company-info {
        width: 100%;
        padding: 20px;
        border: 1px solid #E5E5E5;
        border-radius: 8px;
    }
    .content-container .company-overview .company-info .head {
        display: flex;
        align-items: center;
    }
    .content-container .company-overview .company-info .head .logo {
        width: 48px;
        height: 48px;
        padding: 12px;
        background-color: #EDEFF5;
        border-radius: 4px;
    }
    .content-container .company-overview .company-info .head .company-content {
        height: 48px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 8px;
    }
    .content-container .company-overview .company-info .head .company-content .title {
        color: #18191C;
        font-size: 16px;
        line-height: 24px;
    }
    .content-container .company-overview .company-info .head .company-content .info {
        color: #767F8C;
        font-size: 12px;
        line-height: 18px;
    }
    .content-container .company-overview .company-info .label {
        margin-top: 20px;
        font-size: 12px;
        color: #767F8C;
    }
    .content-container .company-overview .company-info .value {
        margin-top: 2px;
        font-size: 16px;
        color: #18191C;
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
    .content-container .company {
        display: flex;
        align-items: center;
    }
    .content-container .company .logo {
        width: 80px;
        height: 80px;
        padding: 28px;
        background-color: #EDEFF5;
        border-radius: 4px;
    }
    .content-container .company .company-content {
        height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 20px;
    }
    .content-container .company .company-content .title {
        color: #18191C;
        font-size: 24px;
        line-height: 32px;
    }
    .content-container .company .company-content .info {
        color: #767F8C;
        font-size: 18px;
        line-height: 28px;
        margin-top: 10px;
    }
    .content-container .el-tabs {
        margin-top: 24px;
    }
    .content-container .company-overview {
        display: flex;
        align-items: flex-start;
    }
    .content-container .company-overview .company-desc {
        flex: 1;
        font-size: 16px;
        color: #5E6670;
        line-height: 24px;
        margin-right: 20px;
    }
    .content-container .company-overview .company-info {
        flex-shrink: 0;
        width: 387px;
        padding: 20px;
        border: 1px solid #E5E5E5;
        border-radius: 8px;
    }
    .content-container .company-overview .company-info .head {
        display: flex;
        align-items: center;
    }
    .content-container .company-overview .company-info .head .logo {
        width: 48px;
        height: 48px;
        padding: 12px;
        background-color: #EDEFF5;
        border-radius: 4px;
    }
    .content-container .company-overview .company-info .head .company-content {
        height: 48px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 8px;
    }
    .content-container .company-overview .company-info .head .company-content .title {
        color: #18191C;
        font-size: 16px;
        line-height: 24px;
    }
    .content-container .company-overview .company-info .head .company-content .info {
        color: #767F8C;
        font-size: 12px;
        line-height: 18px;
    }
    .content-container .company-overview .company-info .label {
        margin-top: 20px;
        font-size: 12px;
        color: #767F8C;
    }
    .content-container .company-overview .company-info .value {
        margin-top: 2px;
        font-size: 18px;
        color: #18191C;
    }
}
</style>

<style>
.company-details .el-tabs .el-tabs__item {
    font-size: 18px;
    height: 48px;
}
.company-details .el-tabs .el-tabs__item:hover {
    color: #0A9212;
}
.company-details .el-tabs .el-tabs__item.is-active {
    color: #0A9212;
}
.company-details .el-tabs .el-tabs__active-bar {
    height: 1px;
    background-color: #0A9212;
}
.company-details .el-tabs .el-tabs__header {
    margin-bottom: 40px;
}
@media (max-width: 600px) {
    .company-details .el-tabs .el-tabs__item {
        font-size: 14px;
    }
    .company-details .el-tabs .el-tabs__header {
        margin-bottom: 20px;
    }
}
</style>