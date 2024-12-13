<template>
    <div class="universal_container">
		<nuxt-link to="/" class="top">
            <img src="@/assets/images/logo.png" alt="">
        </nuxt-link>
        <div class="middle">
            <ul>
                <li v-for="(item, i) in footerMenus" :key="i">
                    <div class="title">{{item.name}}</div>
                    <div class="catalogue" v-for="(child, j) in item.childs" :key="j" @click="linkTo(child.path, child.refs)">{{child.name}}</div>
                </li>
            </ul>
            <div class="contact">
                <div class="title">Contact Us</div>
                <div class="desc">Have questions about our features or pricing? Reach out to</div>
                <div class="email">
                    <img src="@/assets/images/email.png" alt="">
                    contact@rampingup.com
                </div>
            </div>
        </div>
        <div class="bottom">
            <div class="left">
                <span @click="linkTo('/about-us/FAQ')">Terms & Conditions</span>
                <span @click="linkTo('/policy')">Privacy Policy</span>
            </div>
            <div class="right">
                <img v-for="link in footerLikns" :key="link.icon" @click="openUrl(link.link)" :src="require(`@/assets/images/${link.icon}`)" alt="">
            </div>
        </div>
	</div>
</template>
<script>
export default {
    methods: {
        linkTo(link, params) {
            const path = link || '/'
            if (params) {
                this.$router.push({
                    path,
                    query: {view: params}
                })
            } else {
                this.$router.push(path)
            }
            
        },
        openUrl(url) {
            if (url) window.open(url)
        }
    },
    computed: {
        footerMenus() {
            return [
				{
					name: 'Services',
					childs: [
						{
							name: 'Services Overview',
							path: '/services/overview'
						},
						{
							name: 'Recruitment',
							path: '/services/hire-remote-developers'
						},
						{
							name: 'Management',
							path: '/services/remote-team-management'
						},
						{
							name: 'Global Payroll',
							path: '/services/global-payroll'
						},
						{
							name: 'Value Added Services',
							path: '/services/value-added-services'
						}
					]
				},
				{
					name: 'Pricing',
					childs: [
						{
							name: 'Pricing Overview',
							path: '/pricing'
						},
						// {
						// 	name: 'Deposits',
						// 	path: '/deposits'
						// },
						// {
						// 	name: 'Invoice Process',
						// 	path: '/invoice-process'
						// }
					]
				},
				{
					name: 'Resources',
					childs: [
						{
							name: 'Case Studies',
							path: '/case-studies'
						},
						{
							name: 'Blog - For Employer',
							path: '/blogs/for-employer'
						},
						{
							name: 'Blog - For Developer',
							path: '/blogs/for-developer'
						},
                        {
							name: 'About Us',
							path: '/about'
						},
						{
							name: 'Why Us',
							path: '/about-us/why-us'
						},
						{
							name: 'FAQ',
							path: '/about-us/FAQ'
						}
					]
				}
			]
        },
        footerLikns() {
            return [
                {icon: 'facebook.png', link: ''},
                {icon: 'ins.png', link: ''},
                {icon: 'in.png', link: 'https://sg.linkedin.com/company/ramping-up?trk=public_post_follow-view-profile'},
                {icon: 'twitter.png', link: ''}
            ]
        }
    }
}
</script>

<style scoped>
@media (max-width: 600px) {
    .universal_container {
        color: #fff;
    }
    .top {
        display: block;
        padding: 32px 0;
        border-bottom: 1px solid #333;
    } 
    .top img {
        height: 22px;
    }

    .middle {
        font-size: 16px;
    }
    .middle .title,.email {
        font-weight: 700;
        color: #fff;
    }
    .middle ul {
        display: flex;
        flex-wrap: wrap;
    }

    .middle ul li {
        width: 50%;
        margin-top: 32px;
    }
    .middle ul li > div {
        margin: 16px 0;
    }
    .middle ul li > .catalogue {
        color: #d6d6d6;
        font-weight: 0;
        font-size: 14px;
    }
    .middle .contact {
        padding: 32px 0;
        line-height: 22.5px;
    }
    .middle .contact > div {
        margin: 8px 0;
    }
    .middle .contact .title {
        font-size: 18px;
    }
    .middle .contact .email {
        display: flex;
        align-items: center;
    }
    .middle .contact .email img {
        margin-right: 10px;
    }
    .bottom {
        padding: 32px 0;
        border-top: 1px solid #333;
        display: flex;
        flex-direction: column-reverse;
    }
    .bottom .left {
        text-align: center;
    }
    .bottom .left span {
        font-size: 14px;
        padding: 0 8px;
    }
    .bottom .right {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 24px;
    }
    .bottom .right img {
        width: 24px;
        height: 24px;
        margin: 0 12px;
    }
}
@media (min-width: 600px) {
    .universal_container {
        padding: 20px 0;
        color: #D6D6D6;
    }
    .top {
        display: block;
        padding: 40px 0;
        border-bottom: 1px solid #333;
    } 
    .top img {
        height: 30px;
    }

    .middle {
        font-size: 18px;
        padding: 40px 0;
        display: flex;
        justify-content: space-between;
    }
    .middle .title,.email {
        font-weight: 700;
        color: #fff;
    }
    .middle ul {
        display: flex;
    }

    .middle ul li {
        margin-right: 60px;
    }
    .middle ul li > div {
        margin: 16px 0;
    }
    .middle ul li > .catalogue {
        cursor: pointer;
        color: #d6d6d6;
        font-weight: 200;
    }
    .middle ul li>div:hover {
        color: #fff;
    }
    .middle .contact {
        width: 300px;
        line-height: 22.5px;
    }
    .middle .contact > div {
        margin: 8px 0;
    }
    .middle .contact .email {
        display: flex;
        align-items: center;
    }
    .middle .contact .email img {
        margin-right: 10px;
    }
    .bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .bottom .left span {
        margin-right: 60px;
        cursor: pointer;
    }
    .bottom .left span:hover {
        color: #fff;
    }
    .bottom .right img {
        width: 24px;
        height: 24px;
        margin-left: 24px;
        cursor: pointer;
    }
}
</style>