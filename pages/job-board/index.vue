<template>
    <div class="job page-container">
        <div class="banner-box">
            <div class="universal_container">
                <img class="banner-back" src="@/assets/images/job_back.png" alt="">
                <h1 class="title">
                    Explore Opportunities
                    <br>
                    <span>
                        with RampingUp
                    </span>
                </h1> 
                <div class="search">
                    <img class="search-icon" src="@/assets/images/job_search.png" alt="">
                    <input v-model="searchValue" type="text" placeholder="Search 10,000 Remote Jobs">
                    <div class="rampingBtn" @click="getJobs">Search</div>
                </div>
            </div>
        </div>
        <div class="job-box">
            <div class="sub-title">TRUSTED BY THOUSANDS OF BUSINESSES</div>
            <div class="tag-list-container" @mouseenter="pauseScroll" @mouseleave="startScroll" ref="tagContainer">
                <div class="tag-list" ref="tagList">
                    <img v-for="(item, index) in tags" @click="companyDetail(item.id)" :key="index" :src="`https://strapi.runworld.com.cn${item.attributes.company_cover.data.attributes.url}`" alt="">
                </div>
            </div>
            <div class="universal_container">
                <div class="title">Remote Positions - Hiring Now</div>
                <ul class="tags">
                    <li :class="activeCategoryId === item.id ? 'active' : ''" v-for="(item,index) in categories" :key="index" @click="changeCategory(item.id)">{{item.attributes.name}}</li>
                </ul>
                <div class="list">
                    <WorkList :list="jobList" :loading="loading"></WorkList>
                </div>
                <div class="pagination">
                    <Pagination :current="currentPage" :loading="loading" :isMobile="isMobile" :total="totalJobs" :size="pageSize" @change="handlePageChange"></Pagination>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default({
    head() {
		return {
			title: 'Job Board'
		}
	},
    data () {
        return {
            viewportWidth: 0,
            searchValue: '',
            scrollInterval: null,
            visibleTags: [],
            scrollSpeed: 5, // 控制滚动速度，数字越小速度越快
            tags: [],
            categories: [],
            activeCategoryId: 'all',
            currentPage: 1,
            pageSize: 10,
            totalJobs: 0,
            jobList: [],
            loading: false
        }
    },
    computed: {
		isMobile() {
			return this.viewportWidth < 600
		}
	},
    mounted() {
		this.updateViewportWidth();
        this.getCompanys()
        this.getCategory()
        this.getJobs()
    },
    beforeDestroy() {
        clearInterval(this.scrollInterval);
    },
    methods: {
        getJobs() {
            if (this.loading) return
            this.loading = true
            let url = `https://strapi.runworld.com.cn/api/career-jobs?populate=career_companies.company_cover,career_keywords&pagination[pageSize]=${this.pageSize}&pagination[page]=${this.currentPage}&filters[title][$containsi]=${this.searchValue}`
            if (this.activeCategoryId !== 'all') url += `&filters[career_category][$eq]=${this.activeCategoryId}`
            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then((res) => {
                this.jobList = res.data
                this.totalJobs = res.meta.pagination.total
            })
            .finally(() => {
                this.loading = false
            })
        },
        getCategory() {
            const url = 'https://strapi.runworld.com.cn/api/career-categories?pagination[pageSize]=100'
            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then((res) => {
                this.categories = [{
                    id: 'all',
                    attributes: {
                        name: 'All Jobs'
                    }
                }, ...res.data]
            })
            .finally(() => {
            })
        },
        changeCategory(id) {
            if (this.loading) return
            this.activeCategoryId = id
            this.getJobs()
        },
        getCompanys() {
            const url = 'https://strapi.runworld.com.cn/api/career-companies?pagination[pageSize]=100&populate=company_cover'
            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then((res) => {
                this.tags = res.data
                // 将tags复制一份无缝衔接
                this.visibleTags = this.isMobile ? this.tags : [...this.tags, ...this.tags];
                this.startScroll();
            })
            .finally(() => {
            })
        },
        companyDetail(id) {
            this.$router.push(`/job-board/company-details?id=${id}`)
        },
        updateViewportWidth() {
			this.viewportWidth = window.innerWidth;
		},
        startScroll() {
            if (window.innerWidth < 600) return
            const tagListEl = this.$refs.tagList;
            const containerEl = this.$refs.tagContainer;
            const tagWidth = tagListEl.scrollWidth / 2; // 只需要滚动一半长度
            this.scrollInterval = setInterval(() => {
                // 控制列表的滚动
                const currentScroll = containerEl.scrollLeft;
                containerEl.scrollLeft += 1;
                // 如果滚动到列表的末尾，回到开头实现无缝循环
                if (currentScroll >= tagWidth) {
                    containerEl.scrollLeft = 0;
                }
            }, this.scrollSpeed);
        },
        pauseScroll() {
            clearInterval(this.scrollInterval);
        },
        handlePageChange(val) {
            this.currentPage = val
            this.getJobs()
        }
    }
})
</script>

<style scoped>
@media (max-width: 600px) {
    .job {
        position: relative;
        z-index: 101;
    }
    .banner-box {
        height: 313px;
        background-color: #000;
        background-image: url('@/assets/images/job_banner_h5.png');
		background-repeat: no-repeat;
		background-size: 100% auto;
        background-position: bottom right;
    }
    .banner-box .banner-back {
        display: none;
    }
    .banner-box .universal_container {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 60px 0;
    }
    .banner-box .title {
        color: #fff;
        font-size: 36px;
        line-height: 43px;
    }
    .banner-box .title span {
        background-image: -webkit-linear-gradient(left, #fff, #47FC22);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
    }
    .banner-box .search {
        display: flex;
        align-items: center;
        margin-top: 24px;
        height: 40px;
        position: relative;
    }
    .banner-box .search .search-icon {
        width: 16px;
        height: 16px;
        position: absolute;
        left: 16px;
        top: 12px;
    }
    .banner-box .search input {
        width: 311px;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.1);
        color: #999;
        border-radius: 4px;
        border: none;
        padding: 0 40px;
        font-size: 12px;
    }
    .banner-box .search .rampingBtn {
        height: 100%;
        font-size: 15px;
        margin-left: 8px;
        border-radius: 4px;
    }

    .job-box .sub-title {
        color: #999;
        font-size: 12px;
        text-align: center;
        padding: 24px 0 16px 0;
    }
    .job-box .tag-list-container {
        width: 100%;
        overflow-x: auto;
        position: relative;
    }
    .job-box .tag-list-container::-webkit-scrollbar {
        display: none;
    }
    .job-box .tag-list {
        display: inline-flex;
        flex-wrap: nowrap;
        transition: transform 0.3s linear;
    }
    .job-box .tag-list img {
        height: 40px;
        border-radius: 20px;
        padding: 8px 16px;
        background-color: #F6F6F6;
        margin: 0 4px;
        flex-shrink: 0;
    }

    .job-box .universal_container {
        padding: 24px 0;
    }
    .job-box .title {
        font-size: 20px;
        font-weight: bold;
        padding-bottom: 16px;
    }
    .job-box .tags {
        display: flex;
        flex-wrap: nowrap;
        overflow-y: auto;
    }
    .job-box .tags::-webkit-scrollbar {
        display: none;
    }
    .job-box .tags li {
        flex-shrink: 0;
        margin-right: 8px;
        background-color: #F6F6F6;
        color: #111;
        font-size: 14px;
        padding: 8px 16px;
        border-radius: 4px;
        user-select: none;
    }
    .job-box .tags .active {
        background-color: #47FC22;
        font-weight: bold;
    }
    .job-box .list {
        padding-top: 20px;
    }
    .job-box .universal_container>.pagination {
        padding: 20px 0;
    }
}
@media (min-width: 600px) {
    .job {
        position: relative;
        z-index: 101;
    }
    .banner-box {
        height: 400px;
        background-color: #000;
        background-image: url('@/assets/images/job_banner.png');
		background-repeat: no-repeat;
		background-size: auto 100%;
        background-position: top right;
    }
    .banner-box .banner-back {
        position: absolute;
        top: 0;
        left: 0;
    }
    .banner-box .universal_container {
        height: 100%;
        background: linear-gradient(to right, #000 2%, rgba(0,0,0,0.9), rgba(0,0,0,0.5));
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .banner-box .title {
        color: #fff;
        font-size: 50px;
        line-height: 60px;
    }
    .banner-box .title span {
        background-image: -webkit-linear-gradient(left, #fff, #47FC22);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
    }
    .banner-box .search {
        display: flex;
        align-items: center;
        margin-top: 30px;
        height: 48px;
        position: relative;
    }
    .banner-box .search .search-icon {
        position: absolute;
        left: 16px;
        top: 12px;
    }
    .banner-box .search input {
        width: 311px;
        height: 100%;
        background-color: #232323;
        color: #fff;
        border-radius: 4px;
        border: none;
        padding: 0 48px;
    }
    .banner-box .search .rampingBtn {
        height: 100%;
        font-size: 15px;
        margin-left: 20px;
        border-radius: 4px;
    }

    .job-box .sub-title {
        color: #999;
        font-size: 14px;
        text-align: center;
        padding: 45px 0 24px 0;
    }
    .job-box .tag-list-container {
        width: 100%;
        overflow: hidden;
        position: relative;
    }
    .job-box .tag-list {
        display: inline-flex;
        flex-wrap: nowrap;
        transition: transform 0.3s linear;
    }
    .job-box .tag-list img {
        height: 80px;
        border-radius: 40px;
        padding: 16px 24px;
        background-color: #F6F6F6;
        margin: 0 12px;
        flex-shrink: 0;
        cursor: pointer;
    }

    .job-box .universal_container {
        padding: 40px 0;
    }
    .job-box .title {
        padding: 20px 0;
        font-size: 40px;
        font-weight: bold;
    }
    .job-box .tags {
        display: flex;
        flex-wrap: wrap;
    }
    .job-box .tags li {
        margin-right: 12px;
        margin-bottom: 12px;
        background-color: #F6F6F6;
        color: #111;
        font-size: 14px;
        padding: 8px 16px;
        border-radius: 4px;
        cursor: pointer;
        user-select: none;
    }
    .job-box .tags .active {
        background-color: #47FC22;
    }
    .job-box .list {
        padding-top: 28px;
    }
    .job-box .universal_container>.pagination {
        padding: 40px 0;
    }
}
</style>