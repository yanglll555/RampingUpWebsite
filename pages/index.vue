<template>
	<div class="home page-container">
		<div class="banner-box gradient-bottom">
			<div class="universal_container">
				<div class="content">
					<h1 class="title">
						We help startups grow
					</h1>
					<div class="desc">
						Ramping Up provides an all-in-one global talent solution for startups. We simplify remote hiring, management, & payroll, so founders can focus on what matters.
					</div>
					<div class="rampingBtn" @click="$router.push('/contact')">
						Ramp Up Now
						<img src="@/assets/images/btn_icon.png" alt="">
					</div>
					<img src="@/assets/images/a-h5-home1.png" alt="" class="image">
				</div>
			</div>
		</div>
		<div class="explore-box">
			<div class="universal_container">
				<h2 class="title">
					<div class="graph"></div>
					<span>
						Spending too much time, effort, and cost on hiring engineers?
					</span>
				</h2>
				<!-- <div class="desc">
					Our one-stop hiring and remote management solution helps you hire fast, manage simply, and pay easily
				</div> -->
				<div class="btns">
					<div class="rampingBtn" @click="$router.push('/services/overview')">
						Explore Our Services
					</div>
					<div class="rampingBtn about" @click="$router.push('/about-us/why-us')">
						About Ramping Up
					</div>
				</div>
			</div>
		</div>
		<div class="hire-box">
			<div class="universal_container">
				<div class="hire-item">
					<div class="content">
						<h2 class="title">Hire Fast</h2>
						<div class="desc">
							Experience rapid onboarding for your remote engineering team
							<span>in just days.</span>
						</div>
						<div class="desc">
							Ramping Up’s solution: Swift dream team assembly for immediate impact.
						</div>
						<div class="button" @click="linkTo('/services/hire-remote-developers')">
							Read more
							<i class="iconfont icon-right02"></i>
						</div>
					</div>
					<img src="@/assets/images/home2.png" alt="">
				</div>
				<div class="hire-item center-item">
					<img class="pc-img" src="@/assets/images/home3.png" alt="">
					<img class="h5-img" src="@/assets/images/a-h5-home3.png" alt="">
					<div class="content">
						<h2 class="title">Manage Simply</h2>
						<div class="desc">
							Ramping Up offers physical office space and in-house back offices to administer policies and manage remote teams effectively.
						</div>
						<ul class="desc">
							<li class="desc-title">We provide</li>
							<li><i class="el-icon-check" style="padding-right: 10px;"></i> Office space</li>
							<li><i class="el-icon-check" style="padding-right: 10px;"></i> In-house HR</li>
							<li><i class="el-icon-check" style="padding-right: 10px;"></i> Admin</li>
							<li><i class="el-icon-check" style="padding-right: 10px;"></i> IT</li>
						</ul>
						<div class="button" @click="linkTo('/services/remote-team-management')">
							Read more
							<i class="iconfont icon-right02"></i>
						</div>
					</div>
				</div>
				<div class="hire-item">
					<div class="content">
						<h2 class="title">Pay Easily</h2>
						<div class="desc">
							Ramping Up’s automatic payroll service help you focus on your business.
						</div>
						<div class="desc">
							We take care of payroll, global compliance, and taxes.
						</div>
						<div class="button" @click="linkTo('/services/global-payroll')">
							Read more
							<i class="iconfont icon-right02"></i>
						</div>
					</div>
					<img src="@/assets/images/home4.png" alt="">
				</div>
			</div>
		</div>
		<div class="card-box">
			<div class="universal_container">
				<div class="img"></div>
			</div>
		</div>
		<div class="works-box">
			<div class="universal_container">
				<h2 class="title">How does it work?</h2>
				<div class="desc">Your efficient path to remote team success</div>
				<ul class="time-line">
					<li>
						<img src="@/assets/images/home7.png" alt="">
						<div class="title">
							01 <br>Understand Your Needs
						</div> 
						<div class="desc">
							Contact us via <a href="/contact"> rampingup.com/contact</a> and our account executive will reach out and set up a first call to figure out what we can do for you. We'll follow up and propose an action plan to move forwards.
						</div>
					</li>
					<li>
						<img src="@/assets/images/home8.png" alt="">
						<div class="title">
							02 <br>Hire Your Team
						</div>
						<div class="desc">
							Once you have an ideal candidate in mind,we’ll send an offer on your behalf. Choose from our tiers of benefits, let us know if you would like to offer equity, and well move forward to negotiate the engagement.
						</div>
					</li>
					<li>
						<img src="@/assets/images/home9.png" alt="">
						<div class="title">
							03 <br>Sign the Paperwork
						</div>
						<div class="desc">
							<div class="small-title">Employee Offer Letter:</div>
							Confirm your employee offer and we will sign employment agreements under our EOR services.
						</div>
						<div class="desc">
							<div class="small-title">Master Service Agreement:</div>
							Ramping Up and client signs service agreement, outlining our agreed upon service details.
						</div>
					</li>
					<li>
						<img src="@/assets/images/home10.png" alt="">
						<div class="title">
							04 <br>Onboard Your Employee
						</div>
						<div class="desc">
							<div class="small-title">Onboard Your Employee:</div>
							With your confirmation, well get all the equipment, office space ready for your new hire to get to work ASAP. Well run them through your designated onboarding process, and quickly get them up to speed.
							<div class="small-desc">
								*Office services available at select locations
							</div>
						</div>
						<div class="desc">
							<div class="small-title">Management Oversight:</div>
							We will handle any changes to your team, including administering benefits and bonuses, overseeing any problems, managing employee expenses, terminating contracts, and anything else you might need.
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="cooperation-box" v-if="bannerList && bannerList.length">
			<div class="universal_container">
				<h2 class="title">Here’s why founders rely on
					<br>
					our global talent solutions</h2>
				<div class="desc">
					<div class="text">
						For over a decade, we've been helping clients build their international teams, from their first hires to to scaled up tech teams of over a hundred people.
					</div>
					<div class="pc-page-btn">
						<div :class="activeBannerIndex < 1 ? 'disabled' : ''" @click="changeBannerIndex('pre')">
							<i class="el-icon-back"></i>
						</div>
						<div :class="activeBannerIndex === bannerList.length - 1 ? 'disabled' : ''" @click="changeBannerIndex('next')">
							<i class="el-icon-right"></i>
						</div>
					</div>
				</div>
			</div>
			<div class="show-box">
				<ul :style="{ 'left': bannerLeft + 'px' }">
					<li v-for="item in bannerList" :key="item.id">
						<div class="imgs"
							:style="{ 'background-image': 'url(https://strapi.runworld.com.cn' + item.attributes.customer_pic.data.attributes.url + ')' }"
						></div>
						<div class="content">
							<img :src="`https://strapi.runworld.com.cn${item.attributes.logo.data.attributes.url}`" alt="">
							<div class="title">{{item.attributes.title}}</div>
							<div class="introduction">{{item.attributes.subtitle}}</div>
							<div class="desc">{{item.attributes.subtitle}}</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="started-box">
			<div class="show-text-line">
				<h2 class="title">
					RAMP UP YOUR TEAM TO
				</h2>
				<div class="show-text">
					<ul ref="scrollList">
						<template v-for="index of 20">
							<li :key="`${index}_1`" class="text">ACCELERATE TIME-TO-MARKET</li>
							<li :key="`${index}_2`" class="split-icon"></li>
							<li :key="`${index}_3`" class="text">SCALE UP PROJECTS</li>
							<li :key="`${index}_4`" class="split-icon"></li>
							<li :key="`${index}_5`" class="text">PLAN FOR GROWTH</li>
							<li :key="`${index}_6`" class="split-icon"></li>
							<li :key="`${index}_7`" class="text">MEET URGENT DEADLINES</li>
							<li :key="`${index}_8`" class="split-icon"></li>
							<li :key="`${index}_9`" class="text">ACQUIRE NEW SKILL SETS</li>
							<li :key="`${index}_10`" class="split-icon"></li>
						</template>
					</ul>
				</div>
			</div>
			<div class="started">
				<p>Ready to Ramp Up your business?</p>
				<div class="rampingBtn" @click="$router.push('/contact')">
					Get Started
					<img src="@/assets/images/btn_icon.png" alt="">
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	head() {
		return {
			title: 'Ramping Up: Remote Hiring and Management Solution',
			meta: [
				{ hid: 'description', name: 'description', content: 'Ramping Up provides solutions for remote hiring, team management, and automatic global payroll. Hire top remote developers, engineers, and managers at 50% less cost. Scale your engineering team quickly and efficiently with Silicon Valley-level talents. Explore our easy process to hire fast, manage seamlessly, and pay painlessly.' },
				{ hid: 'keywords', name: 'keywords', content: 'Ramping Up,Ramp Up Team,Hire remote developers,remote engineers,remote team management,automatic payroll' }
			]
		}
	},
	mounted() {
		this.getList()
	},
	mounted() {
		// 服务端渲染，只能在mounted中取值
		this.windowWidth = window.innerWidth

		// this.startScroll()
	},
	data() {
		return {
			timer: null,
			showNumberAnimate: false,
			activeBannerIndex: 0,
			windowWidth: 0,
			bannerList: []
		}
	},
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
		// startScroll() {
		// 	const list = this.$refs.scrollList;
		// 	const scrollWidth = list.scrollWidth;
		// 	const containerWidth = list.clientWidth;
		// 	if (scrollWidth > containerWidth) {
		// 		list.style.animationDuration = `${scrollWidth / 3000}s`; // 根据实际情况调整滚动速度
		// 	}
		// },
		changeBannerIndex(type) {
			if (type === 'pre' && this.activeBannerIndex != 0) {
				this.activeBannerIndex --
			}
			if (type === 'next' && this.activeBannerIndex != this.bannerList.length - 1) {
				this.activeBannerIndex ++
			}
		},
		getList() {
            const url = 'https://strapi.runworld.com.cn/api/case-studies?populate=logo,customer_pic,customer_introduction,createdBy'
            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then((res) => {
                this.bannerList = res.data
            })
            .finally(() => {
            })
        }
	},
	computed: {
		bannerLeft() {
			let left = 0;
			const bannerItemWidth = 840;
			const bannerItemGutter = 12 * 2;
			// first banner left
			let start = (this.windowWidth - bannerItemWidth - bannerItemGutter) / 2;
			left = start - this.activeBannerIndex * (bannerItemWidth + bannerItemGutter);
			return left;
		}
	}
}
</script>

<style scoped>
@media (max-width: 600px) {
	.banner-box .universal_container {
		padding: 25px 0;
	}
	.banner-box .content {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	.banner-box .title {
		color: #fff;
		font-size: 40px;
		font-weight: 700;
		line-height: 45px;
		letter-spacing: 2px;
		margin-bottom: 16px;
	}
	.banner-box .desc {
		color: #fff;
		font-size: 13px;
		line-height: 16.25px;
		opacity: 80%;
	}
	.banner-box .rampingBtn {
		width: 190px;
		margin: 24px 0;
	}
	.banner-box .image {
		width: 100%;
	}
	.explore-box {
		background-color: #fff;
	}
	.explore-box .universal_container {
		padding: 32px 0;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}
	.explore-box .title {
		width: 300px;
		color: #000;
		font-size: 24px;
		font-weight: 700;
		line-height: 30px;
		text-align: center;
		position: relative;
	}
	.explore-box .title span {
		position: relative;
		z-index: 10;
	}
	.explore-box .title .graph {
		position: absolute;
		left: 3px;
		top: 4px;
		border-radius: 4px;
		width: 18px; /* 定义平行四边形的宽度 */
		height: 22px; /* 定义平行四边形的高度 */
		background-color: #47FC22; /* 设置背景颜色 */
		transform: skew(-20deg); /* 使用 skew 转换来实现平行四边形效果 */
	}
	.explore-box .desc {
		width: 300px;
		color: #999;
		font-size: 14px;
		line-height: 17.5px;
		text-align: center;
		margin-top: 8px;
	}
	.explore-box .btns {
		margin-top: 16px;
	}
	.explore-box .rampingBtn {
		width: 190px;
		margin-top: 8px;
	}
	.explore-box .btns .about {
		background-color: #F0F0F0;
	}
	.hire-box {
		background-color: #101010;
		color: #fff;
	}
	.hire-box .universal_container {
		padding: 16px 0;
	}
	.hire-box .hire-item {
		padding: 16px 0;
		display: flex;
		flex-direction: column-reverse;
		justify-content: space-between;
	}
	.hire-box .center-item {
		flex-direction: column
	}
	.hire-box .hire-item .pc-img {
		display: none;
	}
	.hire-box .hire-item img {
		width: 100%;
		height: 200px;
	}
	.hire-box .hire-item .content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 12px 0;
	}
	.hire-box .hire-item .content>* {
		padding: 12px 0;
	}
	.hire-box .hire-item .content .title {
		font-size: 24px;
		font-weight: 600;
		line-height: 30px;
	}
	.hire-box .hire-item .content .desc {
		opacity: 0.6;
		font-size: 16px;
		line-height: 20px;
	}
	.hire-box .hire-item .content .desc span {
		font-weight: 700;
	}
	.hire-box .hire-item .content ul.desc {
		display: flex;
		flex-wrap: wrap;
	}
	
	.hire-box .hire-item .content .desc li {
		width: 50%;
		flex-shrink: 0;
		padding: 8px 0;
	}
	.hire-box .hire-item .content ul.desc .desc-title {
		width: 100%;
	}
	.hire-box .hire-item .content .button {
		font-size: 14px;
		display: flex;
		align-items: center;
	}
	.hire-box .hire-item .content .button i {
		font-size: 24px;
		margin-left: 10px;
	}

	.card-box {
		position: relative;
	}
	.card-box::before {
		position: absolute;
		top: -1px;
		left: 0;
		content: '';
		width: 100%;
		height: 50%;
		background-color: #101010;
	}
	.card-box::after {
		position: absolute;
		bottom: -1px;
		left: 0;
		content: '';
		width: 100%;
		height: 50%;
		background-color: #fff;
	}
	.card-box .universal_container {
		position: relative;
		z-index: 10;
	}
	.card-box .img {
		height: 310px;
		background-image: url('@/assets/images/a-h5-home5.png');
		background-size: 100% 100%;
	}
	.works-box .universal_container {
		color: #000;
		padding: 32px 0;
	}
	.works-box .universal_container>.title {
		font-size: 32px;
		font-weight: 700;
		position: relative;
	}
	.works-box .universal_container>.desc {
		font-size: 14px;
		line-height: 22.4px;
		color: #666;
		position: relative;
	}
	.works-box .universal_container>.desc::after {
		position: absolute;
		bottom: -20px;
		left: 0;
		content: '';
		width: 160px;
		height: 4px;
		background-color: #47FC22;
	}
	.works-box .time-line {
		padding-top: 24px;
		margin-top: 20px;
	}
	.works-box .time-line li {
		border-left: 1px solid #d9d9d9;
		width: calc(100% - 20px);
		margin-left: auto;
		padding: 0 0 24px 40px;
		position: relative;
	}
	.works-box .time-line li:last-child {
		border: none;
		padding-bottom: 0;
	}
	.works-box .time-line li img {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		position: absolute;
		left: -20px;
		top: 0px;
	}
	.works-box .time-line li .title {
		font-size: 24px;
		line-height: 31.2px;
		font-weight: 700;
	}
	.works-box .time-line li .desc {
		color: #666;
		font-size: 14px;
		font-weight: 400;
		line-height: 17.5px;
		padding: 10px 0;
	}
	.works-box .time-line li .desc .small-title {
		font-weight: 600;
		color: #000;
	}
	.works-box .time-line li .desc .small-desc {
		opacity: 0.7;
	}
	.cooperation-box {
		padding: 32px 0;
		background-color: #F6F6F8;
	}
	.cooperation-box .universal_container .title {
		font-size: 24px;
		font-weight: 700;
		color: #000;
	}
	.cooperation-box .universal_container .desc {
		margin-top: 10px;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}
	.cooperation-box .universal_container .desc .text {
		width: 663px;
		color: #666;
		font-size: 14px;
		font-weight: 400;
		line-height: 17.5px;
	}

	.cooperation-box .show-box {
		padding: 0 var(--h5-gutterWidth);
		margin-top: 32px;
		height: 449px;
	}
	.cooperation-box .show-box ul {
		width: 100%;
		display: flex;
		overflow-x: auto;
		height: 100%;
	}
	.cooperation-box .show-box ul li {
		width: 316px;
		height: calc(100% - 10px);
		border-radius: 16px;
		margin-right: 20px;
		flex-shrink: 0;
		overflow: hidden;
	}
	.cooperation-box .show-box ul li:last-child {
		margin-right: 0;
	}
	.cooperation-box .show-box ul li .imgs {
		height: 220px;
		background-repeat: no-repeat;
		background-size: 100% auto;
	}
	.cooperation-box .show-box ul li .content {
		height: 218px;
		position: relative;
		background-color: #fff;
		padding: 20px;
		padding-top: 38px;
		display: flex;
		flex-direction: column;
	}
	.cooperation-box .show-box ul li .content img {
		width: 60px;
		height: 60px;
		border-radius: 50%;
		position: absolute;
		left: 0;
		right: 0;
		margin: 0 auto;
		top: -30px;
	}
	.cooperation-box .show-box ul li .content .title {
		font-size: 18px;
		font-weight: 700;
		color: #000;
		text-align: center;
		overflow: hidden; /* 超出部分隐藏 */
        text-overflow: ellipsis; /* 显示省略号 */
        display: -webkit-box; /* 使用旧的 WebKit 语法 */
        -webkit-line-clamp: 1; /* 限制显示的行数 */
        -webkit-box-orient: vertical; /* 垂直方向排列 */
	}
	.cooperation-box .show-box ul li .content .introduction {
		font-size: 14px;
		font-weight: 400;
		line-height: 17.5px;
		color: #999;
		text-align: center;
		margin-top: 8px;
		margin-bottom: 20px;
		overflow: hidden; /* 超出部分隐藏 */
        text-overflow: ellipsis; /* 显示省略号 */
        display: -webkit-box; /* 使用旧的 WebKit 语法 */
        -webkit-line-clamp: 2; /* 限制显示的行数 */
        -webkit-box-orient: vertical; /* 垂直方向排列 */
	}
	.cooperation-box .show-box ul li .content .desc {
		font-size: 13px;
		font-weight: 300;
		color: #333;
		line-height: 23.4px;
		text-align: center;
		overflow: hidden; /* 超出部分隐藏 */
        text-overflow: ellipsis; /* 显示省略号 */
        display: -webkit-box; /* 使用旧的 WebKit 语法 */
        -webkit-line-clamp: 3; /* 限制显示的行数 */
        -webkit-box-orient: vertical; /* 垂直方向排列 */
	}
	.cooperation-box .pc-page-btn {
		display: none;
	}

	.started-box {
		width: 100%;
		background-color: #101010;
		position: relative;
		overflow: hidden;
	}

	.started-box .show-text-line {
		padding: 60px 0;
		color: #fff;
		position: relative;
		font-size: 24px;
		line-height: 30px;
		font-weight: 700;
		letter-spacing: 2px;
	}
	.started-box .show-text-line::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		margin: 0 auto;
		width: 1200px;
		height: 1px;
		background-color: #333;
	}
	.started-box .show-text-line .title {
		text-align: center;
		font-size: 24px;
	}
	.started-box .show-text-line .show-text {
		width: 100%;
		margin-top: 12px;
		overflow: hidden;
	}
	@keyframes scrollAnimation {
		0% {
			transform: translateX(100px);
		}
		100% {
			transform: translateX(-10000px);
		}
	}
	.started-box .show-text-line .show-text ul {
		display: flex;
		align-items: center;
		flex-wrap: nowrap;
		animation: scrollAnimation linear infinite;
		animation-duration: 100s;
	}

	.started-box .show-text-line ul li {
		flex-shrink: 0;
		padding: 0 25px;
	}
	.started-box .show-text-line ul .text {
		background-image: -webkit-linear-gradient(left, #47FC22, #fff 80%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	.started-box .show-text-line ul .split-icon {
		width: 37px;
		height: 20px;
		background-image: url('@/assets/images/split_icon.png');
		background-position: center center;
		background-size: 37px auto;
		background-repeat: no-repeat;
	}
	.started-box .started {
		padding: 60px 0;
	}
	.started-box .started p {
		font-size: 16px;
		color: #F9F9F9;
		text-align: center;
		padding-bottom: 32px;
	}
}
@media (min-width: 600px) {
	.banner-box {
		height: 570px;
	}
	.banner-box>.universal_container {
		height: 100%;
		background-image: url('@/assets/images/home1.png');
		background-repeat: no-repeat;
		background-size: 522px 411px;
		background-position: right var(--gutterWidth) center;
	}
	.banner-box .content {
		width: 640px;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 155px 0;
	}
	.banner-box .title {
		color: #fff;
		font-size: 50px;
		font-weight: 700;
		line-height: 62.5px;
		letter-spacing: 2px;
	}
	.banner-box .desc {
		width: 418px;
		color: #fff;
		font-size: 16px;
		line-height: 20px;
		opacity: 80%;
	}
	.banner-box .rampingBtn {
		width: 252px;
	}
	.banner-box .image {
		display: none;
	}
	.explore-box {
		background-color: #fff;
		height: 410px;
	}
	.explore-box .universal_container {
		padding: 100px 0;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}
	.explore-box .title {
		width: 85%;
		color: #000;
		font-size: 50px;
		font-weight: 700;
		line-height: 62.5px;
		text-align: center;
		position: relative;
	}
	.explore-box .title span {
		position: relative;
		z-index: 10;
	}
	.explore-box .title .graph {
		position: absolute;
		left: -10px;
		top: 5px;
		border-radius: 4px;
		width: 33px; /* 定义平行四边形的宽度 */
		height: 53px; /* 定义平行四边形的高度 */
		background-color: #47FC22; /* 设置背景颜色 */
		transform: skew(-20deg); /* 使用 skew 转换来实现平行四边形效果 */
	}
	.explore-box .desc {
		width: 95%;
		color: #999;
		font-size: 40px;
		line-height: 50px;
		text-align: center;
	}
	.explore-box .btns {
		display: flex;
	}
	.explore-box .rampingBtn {
		margin: 0 10px;
	}
	.explore-box .btns .about {
		background-color: #F0F0F0;
	}
	.hire-box {
		background-color: #101010;
		color: #fff;
	}
	.hire-box .universal_container {
		padding: 40px 0;
	}
	.hire-box .hire-item {
		padding: 60px 0;
		display: flex;
		justify-content: space-between;
	}
	.hire-box .hire-item .h5-img {
		display: none;
	}
	.hire-box .hire-item .content {
		width: 494px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.hire-box .hire-item .content .title {
		font-size: 48px;
		font-weight: 600;
		line-height: 60px;
	}
	.hire-box .hire-item .content .desc {
		opacity: 0.6;
		font-size: 24px;
		line-height: 30px;
	}
	.hire-box .hire-item .content .desc span {
		font-weight: 700;
	}
	.hire-box .hire-item .content .desc li {
		line-height: 45px;
	}
	.hire-box .hire-item .content .button {
		cursor: pointer;
		font-size: 18px;
		display: flex;
		align-items: center;
	}
	.hire-box .hire-item .content .button i {
		font-size: 40px;
		margin-left: 20px;
	}

	.card-box {
		height: 440px;
		position: relative;
	}
	.card-box::before {
		position: absolute;
		top: 0;
		left: 0;
		content: '';
		width: 100%;
		height: 50%;
		background-color: #101010;
	}
	.card-box::after {
		position: absolute;
		bottom: 0;
		left: 0;
		content: '';
		width: 100%;
		height: 50%;
		background-color: #fff;
	}
	.card-box .universal_container {
		height: 100%;
		position: relative;
		z-index: 10;
	}
	.card-box .img {
		height: 100%;
		background-image: url('@/assets/images/home5.png');
		background-size: 100% auto;
	}
	.works-box .universal_container {
		color: #000;
		padding: 60px 0;
	}
	.works-box .universal_container>.title {
		font-size: 48px;
		font-weight: 700;
		position: relative;
	}
	.works-box .universal_container>.desc {
		font-size: 20px;
		color: #8A8888;
		position: relative;
	}
	.works-box .universal_container>.desc::after {
		position: absolute;
		bottom: -13px;
		left: 0;
		content: '';
		width: 210px;
		height: 4px;
		background-color: #47FC22;
	}
	.works-box .time-line {
		padding: 40px 0;
		margin-top: 60px;
	}
	.works-box .time-line li {
		border-left: 1px solid #d9d9d9;
		width: calc(100% - 30px);
		margin-left: auto;
		padding-left: 49px;
		padding-bottom: 50px;
		position: relative;
	}
	.works-box .time-line li:last-child {
		border: none;
		padding-bottom: 0;
	}
	.works-box .time-line li img {
		width: 60px;
		height: 60px;
		border-radius: 50%;
		position: absolute;
		left: -30px;
		top: 0px;
	}
	.works-box .time-line li .title {
		font-size: 24px;
		font-weight: 700;
	}
	.works-box .time-line li .title br{
		display: none
	}
	.works-box .time-line li .desc {
		color: #666;
		font-size: 18px;
		font-weight: 400;
		line-height: 22.5px;
		padding: 10px 0;
	}
	.works-box .time-line li .desc .small-title {
		font-weight: 600;
		color: #000;
	}
	.works-box .time-line li .desc .small-desc {
		opacity: 0.7;
	}
	.cooperation-box {
		padding: 80px 0;
		background-color: #F6F6F8;
	}
	.cooperation-box .universal_container .title {
		font-size: 48px;
		font-weight: 700;
		color: #000;
	}
	.cooperation-box .universal_container .desc {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}
	.cooperation-box .universal_container .desc .text {
		width: 663px;
		color: #666;
		font-size: 18px;
		font-weight: 400;
		line-height: 22.5px;
	}
	.cooperation-box .universal_container .desc .pc-page-btn>div {
		width: 64px;
		height: 64px;
		line-height: 56px;
		text-align: center;
		font-size: 30px;
		color: #000;
		border: 2px solid #47FC22;
		background-color: #47FC22;
		border-radius: 50%;
		float: left;
		margin-left: 24px;
		cursor: pointer;
		user-select: none;
	}
	.cooperation-box .universal_container .desc .pc-page-btn>.disabled {
		color: #C8CFD5;
		border: 2px solid #C8CFD5;
		background-color: unset;
		cursor: no-drop;
	}
	.cooperation-box .show-box {
		overflow: hidden;
		margin-top: 60px;
		height: 466px;
		position: relative;
	}
	.cooperation-box .show-box ul {
		display: flex;
		flex-wrap: nowrap;
		position: absolute;
		left: 0px;
		transition: left 0.3s ease;
	}
	.cooperation-box .show-box ul li {
		width: 840px;
		height: 100%;
		border-radius: 8px;
		margin: 0 12px;
		flex-shrink: 0;
		overflow: hidden;
	}
	.cooperation-box .show-box ul li .imgs {
		height: 220px;
		background-repeat: no-repeat;
		background-size: 100% auto;
	}
	.cooperation-box .show-box ul li .content {
		height: 246px;
		position: relative;
		background-color: #fff;
		padding: 60px 40px 40px 40px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.cooperation-box .show-box ul li .content img {
		width: 80px;
		height: 80px;
		border-radius: 50%;
		position: absolute;
		left: 0;
		right: 0;
		margin: 0 auto;
		top: -40px;
	}
	.cooperation-box .show-box ul li .content .title {
		font-size: 24px;
		font-weight: 700;
		color: #000;
		text-align: center;
	}
	.cooperation-box .show-box ul li .content .introduction {
		font-size: 14px;
		font-weight: 400;
		color: #999;
		text-align: center;
	}
	.cooperation-box .show-box ul li .content .desc {
		font-size: 18px;
		font-weight: 300;
		color: #333;
		line-height: 32.4px;
		text-align: center;
	}
	.started-box {
		width: 100%;
		background-color: #101010;
		position: relative;
		overflow: hidden;
	}

	.started-box .show-text-line {
		padding: 60px 0;
		color: #fff;
		font-size: 50px;
		font-weight: 700;
		letter-spacing: 2px;
		position: relative;
	}
	.started-box .show-text-line::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		margin: 0 auto;
		width: 1200px;
		height: 1px;
		background-color: #333;
	}
	.started-box .show-text-line .title {
		font-size: 60px;
		text-align: center;
	}
	.started-box .show-text-line .show-text {
		width: 100%;
		margin-top: 24px;
		overflow: hidden;
	}
	@keyframes scrollAnimation {
	0% {
		transform: translateX(100px);
	}
	100% {
		transform: translateX(-10000px);
	}
	}
	.started-box .show-text-line .show-text ul {
		display: flex;
		align-items: center;
		flex-wrap: nowrap;
		animation: scrollAnimation linear infinite;
		animation-duration: 100s;
	}

	.started-box .show-text-line ul li {
		flex-shrink: 0;
		padding: 0 25px;
	}
	.started-box .show-text-line ul .text {
		background-image: -webkit-linear-gradient(left, #47FC22, #fff 80%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	.started-box .show-text-line ul .split-icon {
		width: 37px;
		height: 20px;
		background-image: url('@/assets/images/split_icon.png');
		background-position: center center;
		background-size: 37px auto;
		background-repeat: no-repeat;
	}
	.started-box .started {
		padding: 60px 0;
	}
	.started-box .started p {
		font-size: 24px;
		color: #F9F9F9;
		text-align: center;
		padding-bottom: 32px;
	}
}
</style>
