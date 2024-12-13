<template>
    <div class="solutions page-container">
        <div class="banner-box">
            <div class="universal_container">
                <h1 class="title">Global talent solutions you can rely on</h1>
                <div class="desc">
                    Streamline your remote team building with Ramping Up, Our all-in-one
                    <br>
                    solution has everything you need to hire, manage, and pay your remote team.
                </div>
                <div class="rampingBtn" @click="$router.push('/contact')">
                    Ramp Up Now
                    <img src="@/assets/images/btn_icon.png" alt="">
                </div>
            </div>
        </div>
        <div class="recruitment" ref="Recruitment">
            <div class="universal_container">
                <h2 class="title title-sign">Hire from elite global talents</h2>
                <div class="h5-sign"></div>
                <!-- <div class="desc">Our in-house recruiters can help put your remote team together in as fast as 3 days.</div> -->
                <div class="sign"></div>
                <ul class="case-list">
                    <li class="reverse">
                        <div class="content">
                            <h2 class="title">Recruiters</h2>
                            <div class="desc">Hire faster with our experienced in-house tech recruiters.</div>
                            <!-- <ul>
                                <li class="custom-style">Dedicated service representive</li>
                                <li class="custom-style">Streamlined candidate interviews</li>
                                <li class="custom-style">Technical expertise screening</li>
                                <li class="custom-style">Candidate background checks</li>
                            </ul> -->
                        </div>
                        <img class="mobile-img" src="@/assets/images/a-h5-solutions2.png" alt="">
                        <img class="pc-img" src="@/assets/images/solutions2.png" alt="">
                    </li>
                    <li class="reverse">
                        <div class="content">
                            <h2 class="title">Talent Pool</h2>
                            <div class="desc">Onboard your team faster by hiring from our pool of vetted top talent.</div>
                            <!-- <ul>
                                <li class="custom-style">Up-to-date resume pool</li>
                                <li class="custom-style">Experienced hires to lead teams</li>
                                <li class="custom-style">Verified technical expertise</li>
                                <li class="custom-style">Validated performance records</li>
                            </ul> -->
                        </div>
                        <img class="mobile-img" src="@/assets/images/a-h5-solutions3.png" alt="">
                        <img class="pc-img" src="@/assets/images/solutions3.png" alt="">
                    </li>
                    <li class="reverse">
                        <div class="content">
                            <h2 class="title">Community</h2>
                            <div class="desc">Access top developers through MVP events, university labs, and tech meetups.</div>
                            <!-- <ul>
                                <li class="custom-style">MVP developer events</li>
                                <li class="custom-style">University lab collaboration</li>
                                <li class="custom-style">Tech meetups and hackathons</li>
                            </ul> -->
                        </div>
                        <img class="mobile-img" src="@/assets/images/a-h5-solutions4.png" alt="">
                        <img class="pc-img" src="@/assets/images/solutions4.png" alt="">
                    </li>
                </ul>
                <div class="rampingBtn" @click="$router.push('/services/hire-remote-developers')">Learn More</div>
            </div>
        </div>
        <div class="management" ref="Management">
            <div class="universal_container">
                <h2 class="title title-sign">
                    Remote team management
                </h2>
                <div class="sign"></div>
                <div class="desc">Pure work-from-home remote teams can easily lose productivity. Ramping Up helps you manage your back office through our support services.</div>
                <ul class="case-list">
                    <li>
                        <img src="@/assets/images/solutions5.png" alt="">
                        <div class="content">
                            <h2 class="title">Admin Service</h2>
                            <div class="desc">Our essential admin service help to streamline operations and enhance employee benefits.</div>
                            <!-- <ul>
                                <li class="custom-style">Expense tracking and reimbursements</li>
                                <li class="custom-style">Attendance & vacation tracking</li>
                                <li class="custom-style">Office space provisioning</li>
                                <li class="custom-style">Perks from gym pass to parking discounts</li>
                            </ul> -->
                        </div>
                    </li>
                    <li>
                        <img src="@/assets/images/solutions6.png" alt="">
                        <div class="content">
                            <h2 class="title">HR Service</h2>
                            <div class="desc">Our comprehensive HR service help to  manage employee contracts, benefits, onboarding, and bonuses</div>
                            <!-- <ul>
                                <li class="custom-style">Compliant employee contracts</li>
                                <li class="custom-style">Benefits options & premium insurance plans</li>
                                <li class="custom-style">Onboarding and offboarding procedures</li>
                                <li class="custom-style">Bonus administration</li>
                            </ul> -->
                        </div>
                    </li>
                    <li>
                        <img class="pc-img" src="@/assets/images/solutions7.png" alt="">
                        <img class="h5-img" src="@/assets/images/solutions7_h5.png" alt="">
                        <div class="content">
                            <h2 class="title">Legal Service</h2>
                            <div class="desc">Our tailored legal service can provide guidance and support in navigating various legal matters, ensuring compliance and mitigating legal risks for you.</div>
                            <!-- <ul>
                                <li class="custom-style">Customized contracts</li>
                                <li class="custom-style">Employee stock option plans</li>
                            </ul> -->
                        </div>
                    </li>
                    <li>
                        <img src="@/assets/images/solutions8.png" alt="">
                        <div class="content">
                            <h2 class="title">IT Service</h2>
                            <div class="desc">Our IT service delivers robust solutions, aim to empower your digital operations.</div>
                            <!-- <ul class="it-list">
                                <li class="custom-style">Site-to-site VPN</li>
                                <li class="custom-style">Cloud infrastructure</li>
                                <li class="custom-style">High speed, secure network</li>
                                <li class="custom-style">CI/CD practice building</li>
                                <li class="custom-style">Device administration & lease</li>
                            </ul> -->
                        </div>
                    </li>
                </ul>
                <div class="rampingBtn" @click="$router.push('/services/remote-team-management')">learn More</div>
            </div>
        </div>
        <div class="payroll" ref="Payroll">
            <div class="universal_container">
                <h2 class="title title-sign">
                    Global payroll solution
                </h2>
                <div class="h5-sign"></div>
                <div class="desc">Leave payroll and global compliance to us.
                    Our automatic payroll solution enables you to easily manage
                    cross-border payroll by paying in your local currency.
                </div>
                <div class="sign"></div>
                <ul class="case-list">
                    <li>
                        <img src="@/assets/images/solutions9.png" alt="">
                        <div class="content">
                            <h2 class="title">Automatic Payroll</h2>
                            <div class="desc">Make automate payroll tasks more effectively</div>
                            <!-- <ul>
                                <li class="custom-style">Social contributions calculations</li>
                                <li class="custom-style">Tax Withholdings</li>
                            </ul> -->
                        </div>
                    </li>
                    <li>
                        <img src="@/assets/images/solutions10.png" alt="">
                        <div class="content">
                            <h2 class="title">Forex Payments</h2>
                            <div class="desc">Cross-border payments, greatly simplified.</div>
                            <!-- <ul>
                                <li class="custom-style">Pay invoice in local currency</li>
                                <li class="custom-style">No additional Forex fees</li>
                            </ul> -->
                        </div>
                    </li>
                    <li>
                        <img src="@/assets/images/solutions11.png" alt="">
                        <div class="content">
                            <h2 class="title">Transparency</h2>
                            <div class="desc">Prioritize transparency and offer clients complete records</div>
                            <!-- <ul>
                                <li class="custom-style">Upfront and transparent fees</li>
                                <li class="custom-style">Full financial records</li>
                            </ul> -->
                        </div>
                    </li>
                </ul>
                <div class="rampingBtn" @click="$router.push('/services/global-payroll')">Learn More</div>
            </div>
        </div>
        <div class="performance">
            <div class="universal_container">
                <h2 class="title title-sign">
                    Value-added service
                </h2>
                <div class="sign"></div>
                <div class="desc">Unlock your team's potential with our premium comprehensive services!</div>
                <ul class="case-list">
                    <li class="new-card-back">
                        <div class="title">Manage Remote Team Productivity</div>
                        <ul>
                            <li v-for="item in Productivity" :key="item.icon">
                                <img :src="require(`@/assets/images/${item.icon}.png`)" alt="">
                                {{ item.content }}
                            </li>
                        </ul>
                    </li>
                    <li class="new-card-back">
                        <div class="title">Leverage our in-house Capabilities</div>
                        <ul>
                            <li v-for="item in Capabilities" :key="item.icon">
                                <img :src="require(`@/assets/images/${item.icon}.png`)" alt="">
                                {{ item.content }}
                            </li>
                        </ul>
                    </li>
                </ul>
                <div class="btns">
                    <div class="rampingBtn left" @click="$router.push('/contact')">Ramp Up now</div>
                    <div class="rampingBtn right" @click="$router.push('/services/value-added-services')">Learn More</div>
                </div>
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
			title: 'Hiring Remote Talents | Ramping Up',
			meta: [
				{ hid: 'description', name: 'description', content: 'Ramping Up Services: Hire exceptional remote developers and build high-performing distributed teams through our global hiring, team management, and global payroll services. You have an idea, we help you deploy.' },
				{ hid: 'keywords', name: 'keywords', content: 'employer of record benefits,what is an employer of record,employer of record vs peo,global employer of record,global eor services' }
			]
		}
	},
    data() {
        return {
            Productivity: [
                {icon: 'performance1', content: 'Office desk'},
                {icon: 'performance2', content: 'Dedicated team office space'},
                {icon: 'performance3', content: 'Site-to-site VPN'},
                {icon: 'performance4', content: 'Device administration & lease'},
                {icon: 'performance5', content: 'Employee care package'},
                {icon: 'performance6', content: 'Premium health insurance plans'}
            ],
            Capabilities: [
                {icon: 'performance7', content: 'Legal contracts'},
                {icon: 'performance8', content: 'Employee stock compensation plan'},
                {icon: 'performance9', content: 'Cloud infrastructure solutions'},
                {icon: 'performance10', content: 'Network security'},
                {icon: 'performance11', content: 'UI design'},
                {icon: 'performance12', content: 'IoT solutions'}
            ]
        }
    },
    watch: {
        '$route.query.view': {
            handler(newVal) {
                if(newVal) {
                    this.$nextTick(() => {
                        setTimeout(() => {
                            this.scrollToElement(newVal)
                        }, 50);
                    })
                }
            },
            immediate: true
        }
    },
    methods: {
        scrollToElement(ref) {
            const targetElement = this.$refs[ref];
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    }
}
</script>

<style scoped>
@media (max-width: 600px) {
    .banner-box {
        background-image: url('@/assets/images/solutions1.png');
        background-repeat: no-repeat;
        background-size: auto 100%;
        background-position: center 0;
        color: #fff;
    }
    .banner-box .universal_container {
        display: flex;
        flex-direction: column;
        padding: 32px 0;
    }
    .banner-box .title {
        font-size: 36px;
        line-height: 45px;
        letter-spacing: 2px;
        font-weight: 700;
    }
    .banner-box .desc {
        opacity: 0.8;
        font-size: 13px;
        line-height: 16px;
        font-weight: 400;
        margin-top: 16px;
    }
    .banner-box .rampingBtn {
        width: 185px;
        margin-top: 24px;
    }

    .recruitment {
        scroll-margin-top: var(--h5-headerHeight);
    }
    .recruitment .universal_container {
        padding: 32px 0;
        color: #000;
    }
    .recruitment .universal_container>.title {
        font-size: 28px;
        font-weight: 700;
        line-height: 30px;
        letter-spacing: 2px;
        text-align: center;
    }
    .recruitment .universal_container>.h5-sign {
        width: 150px;
        height: 4px;
        background-color: #47FC22;
        margin: 16px auto;
    }
    .recruitment .universal_container>.desc {
        font-size: 14px;
        font-weight: 400;
        line-height: 17.5px;
        color: #666;
        text-align: center;
    }
    .recruitment .case-list {
        margin-top: 20px;
    }
    .recruitment .case-list>li {
        margin: 24px 0;
        display: flex;
        flex-direction: column;
        border-radius: 16px;
        background-color: #F6F6F8;
    }
    .recruitment .case-list>li.reverse {
        flex-direction: column-reverse;
    }
    .recruitment .case-list>li img {
        width: 100%;
    }
    .recruitment .case-list>li .pc-img {
        display: none;
    }
    .recruitment .case-list>li .content {
        padding: 20px;
    }
    .recruitment .case-list>li .content .title {
        font-size: 24px;
        font-weight: 700;
    }
    .recruitment .case-list>li .content .desc {
        margin-top: 8px;
        color: #757B8A;
        font-size: 14px;
        line-height: 22.4px;
        font-weight: 500;
    }
    .recruitment .case-list>li .content ul {
        margin-top: 32px;
    }
    .recruitment .case-list>li .content li {
        padding: 8px 0;
        font-size: 14px;
        line-height: 22.4px;
        font-weight: 500;
    }
    .recruitment .rampingBtn {
        width: 233px;
        background-color: #000;
        color: #fff;
        margin: 0 auto;
        height: 52px;
    }


    .management {
        background-color: #101010;
        scroll-margin-top: var(--h5-headerHeight);
    }
    .management .universal_container {
        padding: 32px 0;
        color: #fff;
    }
    .management .universal_container>.title br {
        display: none;
    }
    .management .universal_container>.title {
        font-size: 24px;
        font-weight: 700;
        line-height: 30px;
        letter-spacing: 2px;
    }
    .management .universal_container>.sign {
        width: 150px;
        height: 4px;
        background-color: #47FC22;
        margin: 16px 0;
    }
    .management .universal_container>.desc {
        font-size: 14px;
        font-weight: 400;
        line-height: 17.5px;
        color: #999;
    }
    .management .case-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding-top: 20px;
    }
    .management .case-list>li {
        width: 100%;
        margin: 12px 0;
        flex-shrink: 0;
    }
    .management .case-list>li:last-child {
        margin-bottom: 0;
    }
    .management .case-list>li .pc-img {
        display: none;
    }
    .management .case-list>li img {
        width: 100%;
        border-radius: 8px;
    }
    .management .case-list>li .content {
        padding: 20px;
    }
    .management .case-list>li .content .title {
        font-size: 18px;
        line-height: 20px;
        font-weight: 700;
    }
    .management .case-list>li .content .desc {
        font-size: 14px;
        line-height: 22.4px;
        color: #999;
        opacity: 0.6;
        margin-top: 8px;
    }
    .management .rampingBtn {
        width: 237px;
        height: 52px;
        background-color: #fff;
        margin: 24px auto 0;
    }
    /* .management .case-list>li .content ul {
        margin-top: 16px;
    }
    .management .case-list>li .content li {
        padding: 8px 0;
        font-size: 14px;
        line-height: 22.4px;
        font-weight: 500;
        color: rgba(255, 255, 255, 0.6);
    } */

    .payroll {
        scroll-margin-top: var(--h5-headerHeight);
    }
    .payroll .universal_container {
        padding: 32px 0;
        color: #000;
    }
    .payroll .universal_container>.title {
        width: 80%;
        font-size: 24px;
        font-weight: 700;
        line-height: 30px;
        letter-spacing: 2px;
    }
    .payroll .universal_container>.h5-sign {
        width: 150px;
        height: 4px;
        background-color: #47FC22;
        margin: 16px 0;
    }
    .payroll .universal_container>.desc {
        color: #999;
        font-size: 14px;
        font-weight: 400;
        line-height: 17.5px;
    }
    .payroll .case-list>li {
        margin-top: 24px;
        background-color: #F9F9F9;
        border-radius: 16px;
    }
    .payroll .case-list>li img {
        width: 100%;
    }
    .payroll .case-list>li .content {
        padding: 20px;
    }
    .payroll .case-list>li .content .title {
        font-size: 24px;
        font-weight: 700;
        padding-bottom: 24px;
    }
    .payroll .case-list>li .content .desc {
        color: #757B8A;
        font-size: 14px;
        line-height: 22.4px;
    }
    .payroll .rampingBtn {
        width: 197px;
        height: 52px;
        background-color: #000;
        margin: 0 auto;
        color: #fff;
        margin-top: 24px;
    }

    .performance {
        background-color: #101010;
    }
    .performance .universal_container {
        padding: 32px 0;
        color: #fff;
    }
    .performance .universal_container>.title {
        font-size: 24px;
        font-weight: 700;
        line-height: 30px;
        letter-spacing: 2px;
    }
    .performance .universal_container br {
        display: none;
    }
    .performance .universal_container>.desc {
        font-size: 14px;
        font-weight: 400;
        line-height: 17.5px;
        color: #999;
    }
    .performance .universal_container>.sign {
        width: 140px;
        height: 4px;
        background-color: #47FC22;
        margin: 24px 0;
    }
    .performance .case-list>li {
        margin-top: 24px;
        flex-shrink: 0;
        padding: 20px;
        border-radius: 12px;
    }
    .performance .case-list>li .title {
        font-size: 20px;
        line-height: 25px;
        font-weight: 700;
    }
    .performance .case-list>li ul {
        padding-top: 8px;
    }
    .performance .case-list>li li {
        margin: 12px 0;
        background-color: rgba(255, 255, 255, 0.05);
        border-radius: 8px;
        height: 64px;
        display: flex;
        align-items: center;
        font-size: 16px;
    }
    .performance .case-list>li li img {
        width: 24px;
        height: 24px;
        margin: 0 20px;
    }
    .performance .btns {
        margin-top: 12px;
    }
    .performance .rampingBtn {
        height: 52px;
        margin-top: 12px;
    }

    .performance .rampingBtn.right {
        background-color: unset;
        color: #47FC22;
        border: 1px solid #47FC22;
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
        background-image: url('@/assets/images/solutions1.png');
        background-repeat: no-repeat;
        background-size: 100% auto;
        color: #fff;
    }
    .banner-box .gradient-left {
        height: 100%;
    }
    .banner-box .universal_container {
        height: 100%;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 104px 0 190px 0;
    }
    .banner-box .title {
        font-size: 50px;
        letter-spacing: 2px;
        font-weight: 700;
        text-align: center;
    }
    .banner-box .desc {
        width: 600px;
        opacity: 0.8;
        font-size: 16px;
        line-height: 20px;
        font-weight: 400;
        text-align: center;
        margin: 0 auto;
        margin-top: -50px;
    }
    .banner-box .rampingBtn {
        width: 252px;
        margin: 0 auto;
    }

    .recruitment .universal_container {
        padding: 100px 0;
        color: #000;
    }
    .recruitment .universal_container>.title {
        font-size: 48px;
        font-weight: 700;
        line-height: 62.5px;
        letter-spacing: 2px;
        text-align: center;
    }
    .recruitment .universal_container>.desc {
        font-size: 20px;
        font-weight: 400;
        line-height: 30px;
        color: #666;
        text-align: center;
    }
    .recruitment .universal_container>.sign {
        width: 197px;
        height: 4px;
        background-color: #47FC22;
        margin: 24px auto;
    }
    .recruitment .case-list {
        margin-top: 36px;
        margin-bottom: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .recruitment .case-list>li {
        margin: 0 10px;
        width: 387px;
        padding: 20px;
        background-color: #F6F6F8;
        border-radius: 16px;
    }
    .recruitment .case-list>li img {
        width: 100%;
    }
    .recruitment .case-list>li .mobile-img {
        display: none;
    }
    .recruitment .case-list>li .content .title {
        font-size: 24px;
        font-weight: 700;
    }
    .recruitment .case-list>li .content .desc {
        padding: 24px 0;
        color: #757B8A;
        font-size: 16px;
        line-height: 25.6px;
    }
    .recruitment .rampingBtn {
        width: 281px;
        height: 52px;
        background-color: #000;
        margin: 0 auto;
        font-size: 18px;
        color: #fff;
    }

    .management {
        background-color: #101010;
    }
    .management .universal_container {
        padding: 90px 0;
        color: #fff;
    }
    .management .universal_container>.title {
        font-size: 50px;
        font-weight: 700;
        line-height: 62.5px;
        letter-spacing: 2px;
    }
    .management .universal_container>.desc {
        opacity: 0.5;
        width: 684px;
        font-size: 24px;
        font-weight: 400;
        line-height: 30px;
    }
    .management .universal_container>.sign {
        width: 197px;
        height: 4px;
        background-color: #47FC22;
        margin: 24px 0;
    }
    .management .case-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .management .case-list>li {
        margin-top: 60px;
        width: 570px;
        flex-shrink: 0;
    }
    .management .case-list>li .h5-img {
        display: none;
    }
    .management .case-list>li img {
        width: 100%;
        border-radius: 8px;
    }
    .management .case-list>li .content {
        padding: 20px;
    }
    .management .case-list>li .content .title {
        font-size: 40px;
        font-weight: 700;
    }
    .management .case-list>li .content .desc {
        font-size: 16px;
        line-height: 25.6px;
        color: #fff;
        opacity: 0.6;
        margin-top: 8px;
    }
    .management .rampingBtn {
        width: 286px;
        height: 52px;
        background-color: #fff;
        font-size: 18px;
        margin: 74px auto 0 auto;
    }

    .payroll .universal_container {
        padding: 100px 0;
        color: #000;
    }
    .payroll .universal_container>.title {
        font-size: 50px;
        font-weight: 700;
        line-height: 62.5px;
        letter-spacing: 2px;
        text-align: center;
    }
    .payroll .universal_container>.desc {
        opacity: 0.5;
        color: #333;
        margin: 0 auto;
        font-size: 24px;
        font-weight: 400;
        line-height: 30px;
        text-align: center;
    }
    .payroll .universal_container>.sign {
        width: 197px;
        height: 4px;
        background-color: #47FC22;
        margin: 24px auto;
    }
    .payroll .case-list {
        margin-top: 80px;
    }
    .payroll .case-list>li {
        margin: 20px 0;
        padding: 20px;
        background-color: #F9F9F9;
        border-radius: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .payroll .case-list>li img {
        width: 493px;
    }
    .payroll .case-list>li .content {
        width: 633px;
        padding: 20px;
    }
    .payroll .case-list>li .content .title {
        font-size: 40px;
        font-weight: 700;
    }
    .payroll .case-list>li .content .desc {
        color: #333;
        opacity: 0.6;
        font-size: 20px;
        line-height: 32px;
    }
    .payroll .rampingBtn {
        width: 235px;
        height: 52px;
        background-color: #000;
        margin: 0 auto;
        font-size: 18px;
        color: #fff;
        margin-top: 80px;
    }

    .performance {
        background-color: #101010;
    }
    .performance .universal_container {
        padding: 100px 0;
        color: #fff;
    }
    .performance .universal_container>.title {
        font-size: 50px;
        font-weight: 700;
        line-height: 62.5px;
        letter-spacing: 2px;
    }
    .performance .universal_container>.desc {
        opacity: 0.5;
        font-size: 24px;
        font-weight: 400;
        line-height: 30px;
    }
    .performance .universal_container>.sign {
        width: 197px;
        height: 4px;
        background-color: #47FC22;
        margin: 24px 0;
    }
    .performance .case-list {
        margin-top: 80px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .performance .case-list>li {
        width: 570px;
        flex-shrink: 0;
        padding: 40px;
    }
    .performance .case-list>li .title {
        font-size: 32px;
        line-height: 40px;
        font-weight: 700;
    }
    .performance .case-list>li ul {
        padding-top: 14px;
    }
    .performance .case-list>li li {
        margin: 6px 0;
        background-color: rgba(255, 255, 255, 0.05);
        border-radius: 8px;
        height: 64px;
        display: flex;
        align-items: center;
        font-size: 16px;
    }
    .performance .case-list>li li img {
        width: 24px;
        height: 24px;
        margin: 0 20px;
    }
    .performance .btns {
        display: flex;
        justify-content: center;
        margin-top: 74px;
    }
    .performance .rampingBtn {
        margin: 0 10px;
        height: 52px;
        font-size: 18px;
    }

    .performance .rampingBtn.right {
        background-color: unset;
        color: #47FC22;
        border: 1px solid #47FC22;
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