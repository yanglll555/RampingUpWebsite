<template>
    <div class="why-us page-container">
        <div class="banner">
            <img src="@/assets/images/whyus_1.png" alt="" class="back">
            <div class="universal_container">
                <div class="tag">WHY US</div>
                <h1 class="title">
                    You focus on innovation, 
                    <br>
                    we take care of the rest
                </h1>
                <div class="content">
                    <div class="left">
                        <div class="desc">Ramping Up provides global remote engineering team solution to clients ranging from tech startups to large corporates, by saving your valuable time spent on recruiting, compliance, and back office. So you can hire fast, manage easily, and pay simply.</div>
                        <div class="rampingBtn" @click="$router.push('/contact')">Ramp Up Now</div>
                    </div>
                    <img src="@/assets/images/whyus_2.png" alt="">
                </div>
            </div>
        </div>
        <div class="introduce">
            <div class="universal_container">
                <div class="tag">About Ramping Up...</div>
                <h2 class="title">We save time and remove complexities, so you can focus on core business.</h2>
                <div class="content">
                    <div class="introduce-logo">
                        <img src="@/assets/images/simple_logo.png" alt="">
                    </div>
                    <div class="desc">
                        <p>
                            Founded by top Asian IT professionals in 2009, Ramping Up began with a simple mission: to help large multinational corporations build offshore development centers. 
                        </p>
                        <p>
                            Over the years, we've transformed into a go-to partner for R&D and remote-team solutions. We offer everything from project-based consultation to long-term engineering team management. Imagine having access to a global talent pool of top-notch engineers, hiring them quickly, and managing them effortlessly—all while saving costs. That's what we do. 
                        </p>
                        <p>
                            With offices in Singapore and Silicon Valley and R&D centers in major Chinese tech hubs, we're here to handle the nitty-gritty details, so you can focus on innovating and growing your business.
                        </p>
                    </div>
                </div>
                <div class="stay">
                    <div class="line-container">
                        <div class="line"></div>
                        <div class="sub-title">Stay connected</div>
                        <div class="line"></div>
                    </div>
                    <div class="logos">
                        <img v-for="link in footerLikns" :key="link.icon" @click="openUrl(link.link)" :src="require(`@/assets/images/${link.icon}`)" alt="">
                    </div>
                </div>
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
			title: 'Why US | Ramping Up'
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
    .why-us {
        position: relative;
        z-index: 101;
        background-color: #0A0A0A;
        color: #fff;
        padding-top: 48px;
    }
    .tag {
        display: inline-block;
        height: 40px;
        line-height: 40px;
        background-color: rgba(71, 252, 34, 0.3);
        border-radius: 20px;
        padding: 0 16px;
        color: #fff;
        font-size: 18px;
    }
    .banner {
        position: relative;
    }
    .banner .back {
        height: 95px;
        position: absolute;
        top: -13px;
        right: 0;
    }
    .banner .title {
        font-size: 36px;
        line-height: 43.2px;
        margin-top: 8px;
        position: relative;
        z-index: 10;
    }
    .banner .content {
        margin-top: 24px;
        display: flex;
        flex-direction: column-reverse;
    }
    .banner .content .left {
        margin-top: 24px;
    }
    .banner .content .desc {
        font-size: 14px;
        line-height: 21px;
        color: rgba(255, 255, 255, 0.8);
    }
    .banner .content .rampingBtn {
        height: 40px;
        margin-top: 24px;
    }
    .banner .content img {
        width: 100%;
        height: 200px;
        border-radius: 16px;
    }

    .introduce {
        margin-top: 32px;
    }
    .introduce .title {
        margin-top: 8px;
        font-size: 36px;
        line-height: 43.2px;
    }
    .introduce .content {
        margin-top: 24px;
    }
    .introduce .content .introduce-logo {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 200px;
        background-image: url('@/assets/images/whyus_3.png')!important;
		background-repeat: no-repeat;
		background-size: 100%;
        border-radius: 16px;
    }
    .introduce .content .introduce-logo img {
        width: 119px;
    }
    .introduce .content .desc {
        font-size: 14px;
        line-height: 21px;
        color: rgba(255, 255, 255, 0.8);
        margin-top: 16px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .introduce .content .desc p {
        margin-bottom: 32px;
    }

    .introduce .stay {
        padding-bottom: 32px;
    }
    .introduce .line-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .introduce .line-container .sub-title {
        font-size: 16px;
        margin: 0 24px;
        color: rgba(255, 255, 255, 0.8);
    }
    .introduce .line-container .line {
        flex: 1;
        height: 1px;
        background-color: rgba(255, 255, 255, 0.8);
    }
    .introduce .logos {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 32px;
    }
    .introduce .logos img {
        width: 24px;
        height: 24px;
        margin: 0 12px;
        cursor: pointer;
    }
}
@media (min-width: 600px) {
    .why-us {
        position: relative;
        z-index: 101;
        background-color: #0A0A0A;
        color: #fff;
    }
    .tag {
        display: inline-block;
        height: 40px;
        line-height: 40px;
        background-color: rgba(71, 252, 34, 0.3);
        border-radius: 20px;
        padding: 0 16px;
        color: #fff;
        font-size: 18px;
    }
    .banner {
        padding: 100px 0;
        position: relative;
    }
    .banner .back {
        height: 312px;
        position: absolute;
        top: 0;
        right: 0;
    }
    .banner .title {
        font-size: 52px;
        line-height: 62.4px;
        margin-top: 8px;
    }
    .banner .content {
        margin-top: 40px;
        display: flex;
        justify-content: space-between;
    }
    .banner .content .left {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .banner .content .desc {
        width: 488px;
        font-size: 18px;
        line-height: 27px;
        color: rgba(255, 255, 255, 0.8);
    }
    .banner .content .rampingBtn {
        width: 200px;
        height: 52px;
        font-size: 18px;
    }
    .banner .content .left, .banner .content img {
        height: 283px;
    }

    .introduce .title {
        margin-top: 8px;
        font-size: 52px;
        line-height: 62.4px;
    }
    .introduce .content {
        margin-top: 40px;
        display: flex;

    }
    .introduce .content .introduce-logo {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 488px;
        height: 325px;
        background-image: url('@/assets/images/whyus_3.png')!important;
		background-repeat: no-repeat;
		background-size: 100%;
        border-radius: 16px;
    }
    .introduce .content .introduce-logo img {
        width: 186px;
    }
    .introduce .content .desc {
        flex: 1;
        height: 325px;
        font-size: 16px;
        line-height: 27px;
        color: rgba(255, 255, 255, 0.8);
        margin-left: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .introduce .stay {
        padding-top: 166px;
        padding-bottom: 100px;
    }
    .introduce .line-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .introduce .line-container .sub-title {
        font-size: 16px;
        margin: 0 24px;
        color: rgba(255, 255, 255, 0.8);
    }
    .introduce .line-container .line {
        flex: 1;
        height: 1px;
        background-color: rgba(255, 255, 255, 0.8);
    }
    .introduce .logos {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 22px;
    }
    .introduce .logos img {
        width: 24px;
        height: 24px;
        margin: 0 12px;
        cursor: pointer;
    }
}
</style>