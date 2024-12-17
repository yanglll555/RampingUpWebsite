<template>
    <div class="team-management page-container">
        <div class="banner-box">
            <div class="universal_container">
                <h1 class="title">Remote Team Management Services</h1>
                <div class="desc">We offer physical office space and in-house back office for
                    <br>administering policies and managing remote teams effectively</div>
                <div class="btns">
                    <div class="rampingBtn" @click="$router.push('/contact')">Talk To Us</div>
                    <div class="rampingBtn right" @click="$router.push('/about')">About Us</div>
                </div>
            </div>
        </div>
        <div class="center-container">
            <div class="universal_container">
                  <div class="center-item first">
                    <h2 class="title">
                        Our remote team manager <br> <span class="back">helps you to manage your remote team easily</span>
                    </h2>
                    <div class="desc">From onboarding to benefits and project management for <br>remote teams, we've got you covered.</div>
                    <ul>
                        <li class="long one">
                            <div class="sub-title">
                                Expense tracking and
                                <br>
                                reimbursements
                            </div>
                            <div class="sign"></div>
                            <img class="h5-back-img" src="@/assets/images/management_2_1_h5.png" alt="">
                        </li>
                        <li class="two">    
                            <div class="sub-title">
                                Attendance &
                                <br>
                                vacation tracking
                            </div>
                            <div class="sign"></div>
                            <img class="h5-back-img" src="@/assets/images/management_3_1_h5.png" alt="">
                        </li>
                        <li class="three">
                            <div class="sub-title">
                                Office space
                                <br>
                                provisioning
                            </div>
                            <div class="sign"></div>
                            <img class="h5-back-img" src="@/assets/images/management_4_1_h5.png" alt="">
                        </li>
                        <li class="center-sub long">
                            <img src="@/assets/images/management_5.png" alt="">
                            <div class="sub-title">
                                Perks from gym pass
                                <br>
                                to parking discounts
                            </div>
                            <div class="sign"></div>
                        </li>
                    </ul>
                  </div>
                  <div class="center-item second">
                    <h2 class="title back1">
                        Your dedicated HR partner
                    </h2>
                    <div class="desc">
                        Our human resources partner will serve you and your employees' daily needs.
                        <br>
                        Let us be your remote team manager
                    </div>
                    <ul>
                        <li class="new-card-back">
                            <img src="@/assets/images/management_6.png" alt="">
                            <div class="sub-title">
                                Compliant emplouee<br>contracts
                            </div>
                        </li>
                        <li class="new-card-back">
                            <img src="@/assets/images/management_7.png" alt="">
                            <div class="sub-title">
                                Benefits options &<br>
                                premium insurance<br>
                                plans
                            </div>
                        </li>
                        <li class="new-card-back">
                            <img src="@/assets/images/management_8.png" alt="">
                            <div class="sub-title">
                                Onboarding and <br>
                                offboarding<br>
                                procedures
                            </div>
                        </li>
                        <li class="new-card-back">
                            <img src="@/assets/images/management_9.png" alt="">
                            <div class="sub-title">
                                Bonus<br>
                                administration
                            </div>
                        </li>
                    </ul>
                    <div class="rampingBtn" @click="$router.push('/services/value-added-services')">Explore Value Added Services</div>
                  </div>
                  <div class="center-item third">
                    <h2 class="title back1">Your IT & security partner</h2>
                    <div class="desc">
                        High speed network and device purchase are complimentary. In addition, optional 
                        <br>
                        additional IT services are offered to quickly get your team onboard and start working.
                        <br>
                        We ensure secure and effective work communication for your remote team.
                    </div>
                    <ul>
                        <li>
                            <img src="@/assets/images/management_10.png" alt="">
                            <div class="sub-title">
                                Site-to-site
                                <br>
                                VPN
                            </div>
                        </li>
                        <li>
                            <img src="@/assets/images/management_11.png" alt="">
                            <div class="sub-title">
                                High speed, secure
                                <br>
                                network
                            </div>
                        </li>
                        <li>
                            <img src="@/assets/images/management_12.png" alt="">
                            <div class="sub-title">
                                Cloud
                                <br>
                                infrastructure
                            </div>
                        </li>
                        <li>
                            <img src="@/assets/images/management_13.png" alt="">
                            <div class="sub-title">
                                Device administration
                                <br>
                                & lease
                            </div>
                        </li>
                        <li>
                            <img src="@/assets/images/management_14.png" alt="">
                            <div class="sub-title">
                                CI/CD practice
                                <br>
                                building
                            </div>
                        </li>
                    </ul>
                  </div>
            </div>
        </div>

        <div class="legal">
            <div class="universal_container">
                <img src="@/assets/images/management_15.png" alt="">
                <div class="content">
                    <h2 class="title back1">
                        Your legal partner
                    </h2>
                    <div class="desc">
                        We help you to stay ahead of compliance and legal
                        <br>
                        risks, providing customized contracts & employee
                        <br>
                        stock option plans
                    </div>
                    <div class="btns">
                        <div class="rampingBtn left" @click="$router.push('/services/hire-remote-developers')">Ramping Up Recruitment</div>
                        <div class="rampingBtn right" @click="$router.push('/services/global-payroll')">Ramping Up Payroll</div>
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
			title: 'Managing Remote Teams Easier | Ramping Up',
			meta: [
				{ hid: 'description', name: 'description', content: "Streamline remote team management with Ramping Up's tailored solutions. Lead distributed teams through efficient communication, collaboration tools, and project management services designed for remote workforces. Enhance productivity with best practices for managing, motivating, and monitoring your remote employees and contractors across locations." },
				{ hid: 'keywords', name: 'keywords', content: 'remote team management,managing remote teams,remote team manager,manage remote teams,remote team communication,project management for remote teams' }
			]
		}
	}
}
</script>

<style scoped>
@media (max-width: 600px) {
    .team-management {
        position: relative;
        z-index: 101;
        background-color: #0A0A0A;
    }
    .banner-box {
        padding: 52px 0;
        background-color: #0a0a0a;
        color: #fff;
        background-image: url('@/assets/images/management_1.png');
		background-repeat: no-repeat;
		background-size: auto 100%;
        background-position-x: center;
    }
    .team-management .back {
        background-image: -webkit-linear-gradient(left, #47FC22, #fff 550px);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
    }
    .team-management .back1 {
        display: inline-block;
        background: linear-gradient(to right, rgba(0,0,0,0) 40%,#46fc2261 80%);
    }
    .banner-box .universal_container {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .banner-box .title {
        font-size: 36px;
        line-height: 45px;
        text-align: center;
    }
    .banner-box .desc {
        text-align: center;
        font-size: 13px;
        line-height: 16.25px;
        color: rgba(255, 255, 255, 0.8);
        margin-top: 8px;
    }
    .banner-box .desc br {
        display: none;
    }
    .banner-box .btns {
        margin-top: 16px;
    }
    .banner-box .btns .rampingBtn {
        width: 136px;
        height: 40px;
        margin: 0 auto;
    }
    .banner-box .btns .rampingBtn.right {
        background-color: #6f726d;
        color: #fff;
        margin-top: 8px;
    }

    .center-container {
        background-color: #101010;
        color: #fff;
    }
    .center-container .universal_container {
        overflow: hidden;
    }
    .center-container .title {
        font-size: 24px;
        line-height: 28.8px;
    }
    .center-container .desc {
        font-size: 14px;
        line-height: 21px;
        opacity: 0.5;
        padding-top: 16px;
        padding-bottom: 32px;
    }
    .center-container .center-item {
        padding: 32px 0;
    }
    .center-container br {
        display: none;
    }
    .center-container .first {
        text-align: center;
    }
    .center-container .third {
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 16px;
        padding: 24px;
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0.1),rgba(255, 255, 255, 0));
    }
    .center-container .first li {
        flex-shrink: 0;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 16px;
        padding: 24px;
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0.1),rgba(255, 255, 255, 0));
        width: 100%;
        box-sizing: border-box;
        margin: 20px 0;
        background-repeat: no-repeat;
        min-height: 186px;
        position: relative;
    }
    .center-container .first li.one {
        background-image: url('@/assets/images/management_2_h5.png');
        background-position: right top;
		background-size: auto 100%;
    }
    .center-container .first li.one .h5-back-img {
        width: 269px;
    }
    .center-container .first li.two {
        background-image: url('@/assets/images/management_3_h5.png');
        background-position: right bottom;
		background-size: auto 100%;
    }
    .center-container .first li.two .h5-back-img {
        width: 152px;
    }
    .center-container .first li.three {
        background-image: url('@/assets/images/management_4_h5.png');
        background-position: left top;
		background-size: auto 100%;
    }
    .center-container .first li.three .h5-back-img {
        width: 100%;
    }
    .center-container .first li.long {
        height: 335px;
    }
    .center-container .first li.long .sub-title {
        width: 80%;
    }
    .center-container .first li .sub-title {
        width: 50%;
        font-size: 20px;
        line-height: 24px;
        font-weight: 500;
        text-align: left;
    }
    .center-container .first li .sign {
        width: 85px;
        height: 4px;
        background-color: #47FC22;
        margin-top: 16px;
    }
    .center-container .first li .h5-back-img {
        position: absolute;
        bottom: 0;
        right: 0;
        opacity: 0.7;
    }
    .center-container .first li.center-sub {
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: unset;
    }
    .center-container .first li.center-sub .sub-title {
        margin-top: 35px;
        text-align: center;
        width: 80%;
    }
    .center-container .first li.center-sub .sign {
        margin: 8px auto 37px;
    }
    .center-container .first li.center-sub img {
        width: 90%;
    }

    .center-container .second li {
        padding: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 24px;
    }
    .center-container .second li img {
        margin-bottom: 24px;
    }
    .center-container .second li .sub-title {
        font-size: 14px;
        line-height: 17.5px;
        font-weight: 600;
        text-align: center;
    }
    .center-container .second .rampingBtn {
        height: 40px;
        width: 265px;
        margin: 32px auto 0 auto;
    }

    .center-container .third {
        margin-bottom: 32px;
    }
    .center-container .third li {
        height: 64px;
        border-radius: 16px;
        background-color: rgba(255, 255, 255, 0.1);
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }
    .center-container .third li:last-child {
        margin-bottom: 0;
    }
    .center-container .third li img {
        width: 24px;
        height: 24px;
        margin: 0 20px;
    }
    .center-container .third li .sub-title {
        font-size: 16px;
        line-height: 20px;
    }


    .legal {
        padding: 32px 0;
        background-color: #1c1c1c;
        color: #fff;
    }
    .legal img {
        width: 100%;
    }
    .legal .content .title {
        font-size: 24px;
        line-height: 28.8px;
        margin-top: 32px;
    }
    .legal .content .desc {
        font-size: 14px;
        line-height: 21px;
        color: #999;
        margin-top: 16px;
    }
    .legal .content .btns {
        margin-top: 32px;
    }
    .legal .content .btns .left {
        height: 40px;
        background-color: #fff;
    }
    .legal .content .btns .right {
        height: 40px;
        border: 1px solid #fff;
        background-color: unset;
        color: #fff;
        margin-top: 8px;
    }
}
@media (min-width: 600px) {
    .team-management {
        position: relative;
        z-index: 101;
    }
    .banner-box {
        background-color: #0a0a0a;
        height: 571px;
        color: #fff;
        background-image: url('@/assets/images/management_1.png');
		background-repeat: no-repeat;
		background-size: 100%;
    }
    .team-management .back {
        background-image: -webkit-linear-gradient(left, #47FC22, #fff 99%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
    }
    .team-management .back1 {
        display: inline-block;
        background: linear-gradient(to right, rgba(0,0,0,0) 150px,#47FC22 880px);
        padding-right: 20px;
    }
    .banner-box .universal_container {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .banner-box .title {
        font-size: 50px;
        line-height: 62.5px;
        text-align: center;
    }
    .banner-box .desc {
        text-align: center;
        font-size: 18px;
        line-height: 22.5px;
        color: rgba(255, 255, 255, 0.8);
        margin-top: 13px;
    }
    .banner-box .btns {
        margin-top: 39px;
        display: flex;
        justify-content: center;
    }
    .banner-box .btns .rampingBtn {
        width: 200px;
        height: 52px;
        font-size: 18px;
    }
    .banner-box .btns .rampingBtn.right {
        background-color: #6f726d;
        color: #fff;
        margin-left: 16px;
    }

    .center-container {
        background-color: #101010;
        color: #fff;
    }
    .center-container .universal_container {
        overflow: hidden;
    }
    .center-container .title {
        font-size: 40px;
        line-height: 48px;
    }
    .center-container .desc {
        font-size: 16px;
        line-height: 24px;
        opacity: 0.5;
        padding-top: 20px;
        padding-bottom: 60px;
    }
    .center-container .center-item {
        margin: 100px 0;
    }
    .center-container .first, .center-container .second {
        text-align: center;
    }
    .center-container .third {
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 16px;
        padding: 40px;
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0.1),rgba(255, 255, 255, 0));
    }
    .center-container .first ul {
        display: flex;
        flex-wrap: wrap;
    }
    .center-container .first li {
        flex-shrink: 0;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 16px;
        padding: 30px;
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0.1),rgba(255, 255, 255, 0));
        width: 387px;
        height: 443px;
        box-sizing: border-box;
        margin: 10px 0;
        background-repeat: no-repeat;
		background-size: 100%;
    }
    .center-container .first li .h5-back-img {
        display: none;
    }
    .center-container .first li.one {
        background-image: url('@/assets/images/management_2.png');
    }
    .center-container .first li.two {
        background-image: url('@/assets/images/management_3.png');
    }
    .center-container .first li.three {
        background-image: url('@/assets/images/management_4.png');
    }
    .center-container .first li:nth-child(2n - 1) {
        margin-right: 10px;
    }
    .center-container .first li:nth-child(2n) {
        margin-left: 10px;
    }
    .center-container .first li.long {
        width: 793px;
    }
    .center-container .first li .sub-title {
        font-size: 36px;
        line-height: 43.2px;
        font-weight: 500;
        text-align: left;
    }
    .center-container .first li .sign {
        width: 85px;
        height: 8px;
        background-color: #47FC22;
        margin-top: 23px;
    }
    .center-container .first li.center-sub {
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .center-container .first li.center-sub .sub-title {
        margin-top: 40px;
    }
    .center-container .first li.center-sub .sign {
        margin: 23px auto;
    }

    .center-container .second ul {
        display: flex;
    }
    .center-container .second li {
        width: 282px;
        height: 219px;
        padding: 40px;
    }
    .center-container .second li img {
        margin-bottom: 24px;
    }
    .center-container .second li .sub-title {
        font-size: 20px;
        line-height: 25px;
        font-weight: 600;
    }
    .center-container .second .rampingBtn {
        font-size: 18px;
        height: 52px;
        width: 330px;
        margin: 60px auto 0 auto;
    }

    .center-container .third ul {
        display: flex;
        justify-content: space-between;
    }
    .center-container .third li {
        width: 208px;
        height: 176px;
        border-radius: 16px;
        background-color: rgba(255, 255, 255, 0.1);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .center-container .third li img {
        width: 24px;
        height: 24px;
        margin-bottom: 20px;
    }
    .center-container .third li .sub-title {
        font-size: 16px;
        line-height: 20px;
        font-weight: 600;
        text-align: center;
    }


    .legal {
        padding: 80px 0;
        background-color: #1c1c1c;
    }
    .legal .universal_container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
    }
    .legal img {
        width: 590px;
        height: 400px;
    }
    .legal .content {
        flex: 1;
        height: 400px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        color: #fff;
        position: relative;
        text-align: right;
    }
    .legal .content .title {
        width: 400px;
        font-size: 40px;
        line-height: 48px;
    }
    .legal .content .desc {
        font-size: 16px;
        line-height: 24px;
        color: #999;
        margin-top: 20px;
    }
    .legal .content .btns {
        position: absolute;
        bottom: 0;
        right: 0;
        display: flex;
        justify-content: flex-end;
    }
    .legal .content .btns .left {
        height: 52px;
        font-size: 18px;
        background-color: #fff;
    }
    .legal .content .btns .right {
        height: 52px;
        font-size: 18px;
        border: 1px solid #fff;
        background-color: unset;
        color: #fff;
        margin-left: 16px;
    }
}
</style>