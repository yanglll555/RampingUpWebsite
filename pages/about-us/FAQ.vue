<template>
    <div class="faq page-container">
        <div class="qu-list">
            <div class="universal_container">
                <div class="tag">FAQ</div>
                <h1 class="title">Any questions about RampingUp?</h1>
                <div class="desc">
                    Have any questions? Please contact us via 
                    <span>contact@rampingup.com</span>
                </div>
                <ul class="list">
                    <li v-for="(item, index) in list" :class="item.pull ? 'active' : ''" :key="index">
                        <div class="title-container" @click="open(item)">
                            <div>
                                <img src="@/assets/images/faq_sign.png" alt="">
                                <span class="sub-title">{{ item.attributes?.question }}</span>
                            </div>
                            <i class="el-icon-arrow-up" v-if="item.pull"></i>
                            <i class="el-icon-arrow-down" v-else></i>
                        </div>
                        <div class="content">
                            <br>
                            <span v-html="item.attributes?.answer"></span>
                            <br>
                            &nbsp;
                        </div>
                    </li>
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
export default {
    head() {
		return {
			title: 'FAQ | Ramping Up'
		}
	},
    mounted() {
        this.getList()
    },
    data() {
        return {
            list: []
        }
    },
    methods: {
        open(item) {
            this.list.forEach(element => {
                if (element.id === item.id) {
                    element.pull = !element.pull
                } else {
                    // element.pull = false
                }
            })
            
        },
        getList() {
            const url = 'https://strapi.runworld.com.cn/api/faqs'
            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then((res) => {
                this.list = res.data?.map(o => {
                    return {
                        ...o,
                        pull: false
                    }
                })
            })
            .finally(() => {
            })
        }
    }
}
</script>

<style scoped>
@media (max-width: 600px) {
    .faq {
        background-color: #0A0A0A;
    }
    .qu-list {
        padding: 48px 0;
        background-color: #0A0A0A;
        color: #fff;
    }
    .qu-list .tag {
        width: 70px;
        height: 40px;
        line-height: 40px;
        background-color: rgba(71, 252, 34, 0.3);
        border-radius: 20px;
        padding: 0 16px;
        color: #fff;
        font-size: 18px;
    }
    .qu-list .title {
        font-size: 40px;
        line-height: 50px;
        margin-top: 8px;
    }
    .qu-list .desc {
        font-size: 14px;
        line-height: 17.5px;
        margin-top: 8px;
        color: rgba(255, 255, 255, 0.6);
    }
    .qu-list .desc span {
        color: #47FC22;
    }
    .qu-list .list {
        padding-top: 16px;
    }
    .qu-list .list li {
        border: 1px solid rgba(255, 255, 255, 0.05);
        background-color: rgba(255, 255, 255, 0.03);
        border-radius: 4px;
        margin-top: 16px;
    }
    .qu-list .list .title-container {
        font-size: 18px;
        color: #EFEFEB;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        padding: 24px;
    }
    .qu-list .list .title-container img {
        display: none;
    }
    .qu-list .list .content {
        font-size: 14px;
        line-height: 21px;
        color: #999999;
        max-height: 0px;
        padding: 0 24px;
        overflow: hidden;
        transition: max-height 0.3s ease 0.1s;
    }
    .qu-list .list li.active .content {
		max-height: 1000px;
	}
}
@media (min-width: 600px) {
    .qu-list {
        padding: 100px 0;
        background-color: #0A0A0A;
        color: #fff;
    }
    .qu-list .tag {
        width: 70px;
        height: 40px;
        line-height: 40px;
        background-color: rgba(71, 252, 34, 0.3);
        border-radius: 20px;
        padding: 0 16px;
        color: #fff;
        font-size: 18px;
        margin: 0 auto;
    }
    .qu-list .title {
        font-size: 40px;
        line-height: 50px;
        text-align: center;
        margin-top: 8px;
    }
    .qu-list .desc {
        font-size: 18px;
        line-height: 22.5px;
        text-align: center;
        margin-top: 8px;
        color: rgba(255, 255, 255, 0.6);
    }
    .qu-list .desc span {
        color: #47FC22;
    }
    .qu-list .list {
        padding-top: 16px;
    }
    .qu-list .list li {
        border: 1px solid rgba(255, 255, 255, 0.05);
        background-color: rgba(255, 255, 255, 0.03);
        border-radius: 4px;
        margin-top: 24px;
    }
    .qu-list .list .title-container {
        height: 77px;
        font-size: 24px;
        color: #EFEFEB;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        padding: 0 24px;
    }
    .qu-list .list .title-container img {
        width: 20px;
        height: 20px;
    }
    .qu-list .list .title-container .sub-title {
        padding-left: 13px;
    }
    .qu-list .list .content {
        font-size: 18px;
        line-height: 27px;
        color: #999999;
        max-height: 0px;
        padding: 0 24px;
        overflow: hidden;
        transition: max-height 0.3s ease 0.1s;
    }
    .qu-list .list li.active .content {
		max-height: 1000px;
	}
}
</style>