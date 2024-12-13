<template>
    <div class="pricing page-container">
        <div class="banner-box">
            <div class="universal_container">
                <h1 class="title">Upfront and transparent pricing to help you grow</h1>
                <ul class="card">
                    <li>
                        <img src="@/assets/images/pricing1.png" alt="">
                        <div class="content">
                            <div class="title">Ramping Up Management </div>
                            <div class="desc">For our standard EOR, daily management, and payroll services</div>
                        </div>
                        <ul>
                            <li class="custom-style">
                                We charge a simple monthly 
                                <span>management fee </span>
                                based on your employee compensation
                            </li>
                            <li class="custom-style">
                                Team of 
                                <span>fewer than </span>
                                20 people: 12-15% management fee based on your employee compensation
                            </li>
                            <li class="custom-style">
                                <span class="tag">Special Offer</span>
                                Team of 
                                <span>more than </span>
                                20 people: 10% management fee based on your employee compensation
                            </li>
                        </ul>
                    </li>
                    <li>
                        <img src="@/assets/images/pricing2.png" alt="">
                        <div class="content">
                            <div class="title">New Employee Hiring</div>
                            <div class="desc">Charged only if we helped hire a new employee</div>
                        </div>
                        <ul>
                            <li class="custom-style">
                                One-time fee
                            </li> 
                            <li class="custom-style">
                                20% of base compensation of the hired employee for employee annual compensation
                            </li>
                        </ul>
                        <div class="sub-desc">
                            * If only using hiring service (no EOR, payroll, management services), all recruiting services are 20% annual compensation of hired candidate.
                        </div>
                    </li>
                </ul>
                <div class="rampingBtn" @click="$router.push('/contact')">Contact Sales</div>
            </div>
        </div>
        <div class="service-box">
            <div class="universal_container">
                <div class="top">
                    <h2 class="title">VALUE ADDED SERVICES</h2>
                    <div class="desc">Starting from $200</div>
                </div>
                <div class="middle">
                    <div class="item">
                        <div class="title">Manage Remote Team Productivity</div>
                        <ul>
                            <li v-for="item in Productivity" :key="item.icon">
                                <img :src="require(`@/assets/images/${item.icon}.png`)" alt="">
                                {{ item.content }}
                            </li>
                        </ul>
                    </div>
                    <div class="item">
                        <div class="title">Leverage our in-house Capabilities</div>
                        <ul>
                            <li v-for="item in Capabilities" :key="item.icon">
                                <img :src="require(`@/assets/images/${item.icon}.png`)" alt="">
                                {{ item.content }}
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="bottom">
                    <h2 class="title">ADDITIONAL FEES</h2>
                    <div class="desc">There are no additional fees for using Ramping Up, but clients are required to provide a deposit for severance and expenses.</div>
                    <div class="button" @click="$router.push('/deposits')">
                        Read more about deposits
                        <i class="iconfont icon-right02"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="example-box gradient-bottom">
            <div class="universal_container">
                <h2 class="title">PRICING EXAMPLE</h2>
                <ul>
                    <li>
                        <span>Base Salary per Month</span>
                        <span>$4000</span>
                    </li>
                    <li>
                        <span>Social Security & Statutory Benefits</span>
                        <span>$400</span>
                    </li>
                    <li class="line"></li>
                    <li>
                        <span>Employee Compensation</span>
                        <span>$4400</span>
                    </li>
                    <li>
                        <span>Management Fees (15% of Employee Compensation)</span>
                        <span>$660</span>
                    </li>
                    <li class="line"></li>
                    <li>
                        <span>Basic Service Cost</span>
                        <span>$5060</span>
                    </li>
                    <li>
                        <span>Value Add Service: Office Desk (Optional)</span>
                        <span>$250</span>
                    </li>
                    <li class="line"></li>
                    <li>
                        <span>Total Monthly Cost</span>
                        <span>$5310</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    head() {
		return {
			title: 'Pricing & Services | Ramping Up'
		}
	},
    data() {
        return {
            Productivity: [
                {icon: 'pricing3', content: 'Office desk'},
                {icon: 'pricing4', content: 'Dedicated team office space'},
                {icon: 'pricing5', content: 'Site-to-site VPN'},
                {icon: 'pricing6', content: 'Device administration & lease'},
                {icon: 'pricing7', content: 'Employee care package'},
                {icon: 'pricing8', content: 'Premium health insurance plans'}
            ],
            Capabilities: [
                {icon: 'pricing9', content: 'Legal contracts'},
                {icon: 'pricing10', content: 'Employee stock compensation plan'},
                {icon: 'pricing11', content: 'Cloud infrastructure solutions'},
                {icon: 'pricing12', content: 'Network security'},
                {icon: 'pricing13', content: 'UI design'},
                {icon: 'pricing14', content: 'IoT solutions'}
            ]
        }
    }
}
</script>

<style scoped>
@media (max-width: 600px) {
    .banner-box {
        background-color: #101010;
    }
    .banner-box .universal_container {
        padding: 32px 0;
        color: #fff;
    }
    .banner-box .universal_container > .title {
        font-size: 36px;
        font-weight: 700;
        line-height: 45px;
        letter-spacing: 2px;
        position: relative;
    }
    .banner-box .universal_container > .title::after {
        content: '';
        position: absolute;
        width: 70px;
        height: 4px;
        background-color: #47FC22;
        left: 0;
        bottom: -20px;
    }
    .banner-box .card {
        padding-top: 52px;
    }
    .banner-box .card > li {
        width: 100%;
        padding: 24px;
        margin: 12px 0;
        background-color: rgba(23, 23, 23, 0.7);
        border-radius: 16px;
    }
    .banner-box .card > li img {
        width: 100%;
    }
    .banner-box .card > li .content {
        margin-top: 15px;
    }
    .banner-box .card > li .content .title {
        font-size: 24px;
        font-weight: 700;
    }
    .banner-box .card > li .content .desc {
        font-size: 14px;
        line-height: 22.4px;
        font-weight: 500;
        opacity: 0.6;
        margin-top: 12px;
    }
    .banner-box .card > li ul {
        padding-top: 8px;
    }
    .banner-box .card > li .custom-style {
        background-position: left top;

        color: rgba(255, 255, 255, 0.6);
        line-height: 22.4px;
        margin-top: 16px;
    }
    .banner-box .card > li .custom-style span {
        color: #fff;
        display: inline-block;
    }
    .banner-box .card > li .custom-style .tag {
        height: 24px;
        line-height: 24px;
        background-color: #E5273E;
        padding: 0 4px;
        border-radius: 4px;
    }
    .banner-box .sub-desc {
        font-size: 11px;
        line-height: 16.5px;
        color: rgba(255, 255, 255, 0.6);
        margin-top: 5px;
    }
    .banner-box .rampingBtn {
        width: 151px;
        margin: 0 auto;
        margin-top: 32px;
    }

    .service-box .universal_container {
        padding: 32px 0;
        color: #000;
    }
    .service-box .top .title{
        font-size: 24px;
        font-weight: 700;
        text-align: center;
        letter-spacing: 2px;
        position: relative;
    }
    .service-box .top .title::after {
        content: '';
        position: absolute;
        width: 150px;
        height: 4px;
        background-color: #47FC22;
        left: 0;
        right: 0;
        margin: 0 auto;
        bottom: -20px;
    }
    .service-box .top .desc {
        font-size: 14px;
        font-weight: 600;
        text-align: center;
        color: #333;
        margin-top: 36px;
    }
    .service-box .middle{
        padding-top: 16px;
    }
    .service-box .middle .item {
        padding: 20px;
        background-color: #F9F9F9;
        border-radius: 16px;
        margin-top: 16px;
    }
    .service-box .middle .item .title {
        font-size: 18px;
        text-align: center;
        font-weight: 700;
    }
    .service-box .middle .item ul {
        padding-top: 14px;
    }
    .service-box .middle .item li {
        margin: 6px 0;
        background-color: #F2F2F2;
        border-radius: 8px;
        height: 64px;
        display: flex;
        align-items: center;
        font-size: 14px;
    }
    .service-box .middle .item li img {
        margin: 0 20px;
    }
    .service-box .bottom {
        margin-top: 16px;
        background-color: #F9F9F9;
        border-radius: 16px;
        padding: 20px;
        color: #333;
        line-height: 17.5px;
        font-size: 14px;
    }
    .service-box .bottom .title {
        text-align: center;
        font-size: 18px;
        line-height: 22.5px;
        font-weight: 700;
        letter-spacing: 2px;
    }
    .service-box .bottom .desc {
        margin: 0 auto;
        text-align: center;
        margin-top: 10px;
    }
    .service-box .bottom .button {
        font-size: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        margin-top: 40px;
    }
    .service-box .bottom .button i {
        font-size: 24px;
        margin-left: 24px;
    }

    .example-box {
        background-color: #101010;
        color: #fff;
        padding: 32px 0;
    }
    .example-box .title{
        font-size: 24px;
        letter-spacing: 2px;
        font-weight: 700;
        text-align: center;
        position: relative;
    }
    .example-box .title::after {
        content: '';
        position: absolute;
        width: 150px;
        height: 4px;
        background-color: #47FC22;
        left: 0;
        right: 0;
        margin: 0 auto;
        bottom: -20px;
    }
    .example-box ul {
        margin-top: 52px;
        background-color: #1C1C1C;
        border-radius: 16px;
        padding: 20px;
    }
    .example-box ul li {
        min-height: 68px;
        padding: 10px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        font-size: 16px;
        line-height: 20px;
        font-weight: 400;
    }
    .example-box ul li span:first-child {
        margin-bottom: 8px;
        color: rgba(255, 255, 255, 0.7);
    }
    .example-box ul li.line {
        padding: unset;
        min-height: unset;
        height: 1px;
        background-color: #D9D9D9;
        opacity: 0.1;
        margin: 12px 0;
    }
}
@media (min-width: 600px) {
    .banner-box {
        background-color: #101010;
    }
    .banner-box .universal_container {
        padding: 60px 0;
        color: #fff;
    }
    .banner-box .universal_container > .title {
        width: 900px;
        font-size: 50px;
        font-weight: 700;
        line-height: 62.5px;
        letter-spacing: 2px;
        padding-top: 78px;
        position: relative;
    }
    .banner-box .universal_container > .title::after {
        content: '';
        position: absolute;
        width: 70px;
        height: 4px;
        background-color: #47FC22;
        left: 0;
        bottom: -20px;

    }
    .banner-box .card {
        padding-top: 64px;
        display: flex;
        justify-content: space-between;
    }
    .banner-box .card > li {
        padding: 40px;
        width: 577px;
    }
    .banner-box .card > li img {}
    .banner-box .card > li .content {
        margin: 40px 0;
    }
    .banner-box .card > li .content .title {
        font-size: 40px;
        font-weight: 700;
    }
    .banner-box .card > li .content .desc {
        font-size: 16px;
        font-weight: 500;
        color: #757B8A;
        margin-top: 12px;
    }
    .banner-box .card > li .custom-style {
        color: rgba(255, 255, 255, 0.6);
        line-height: 22.4px;
        padding: 8px 0;
        font-size: 14px;
    }
    .banner-box .card > li .custom-style span {
        color: #fff;
        display: inline-block;
    }
    .banner-box .card > li .custom-style .tag {
        background-color: #E5273E;
        padding: 0 4px;
        border-radius: 4px;
    }
    .banner-box .sub-desc {
        font-size: 11px;
        line-height: 16.5px;
        color: rgba(255, 255, 255, 0.6);
        margin-top: 8px;
    }
    .banner-box .rampingBtn {
        width: 252px;
        margin: 0 auto;
        margin-top: 60px;
    }
    

    .service-box .universal_container {
        padding: 60px 0;
        color: #000;
    }
    .service-box .top .title{
        font-size: 50px;
        font-weight: 700;
        text-align: center;
        letter-spacing: 2px;
        position: relative;
    }
    .service-box .top .title::after {
        content: '';
        position: absolute;
        width: 197px;
        height: 4px;
        background-color: #47FC22;
        left: 0;
        right: 0;
        margin: 0 auto;
        bottom: -20px;
    }
    .service-box .top .desc {
        font-size: 24px;
        font-weight: 600;
        text-align: center;
        color: #333;
        margin-top: 45px;
    }
    .service-box .middle{
        margin-top: 60px;
        display: flex;
        justify-content: space-between;
    }
    .service-box .middle .item {
        width: 570px;
        padding: 40px;
        background-color: #F9F9F9;
        border-radius: 16px;
    }
    .service-box .middle .item .title {
        font-size: 24px;
        text-align: center;
        font-weight: 600;
    }
    .service-box .middle .item ul {
        padding-top: 18px;
    }
    .service-box .middle .item li {
        margin: 6px 0;
        background-color: #F2F2F2;
        border-radius: 8px;
        height: 64px;
        display: flex;
        align-items: center;
    }
    .service-box .middle .item li img {
        margin: 0 20px;
    }
    .service-box .bottom {
        margin-top: 16px;
        background-color: #F9F9F9;
        border-radius: 16px;
        padding: 40px;
        color: #333;
    }
    .service-box .bottom .title {
        text-align: center;
        font-size: 30px;
        font-weight: 700;
        letter-spacing: 2px;
    }
    .service-box .bottom .desc {
        width: 903px;
        margin: 0 auto;
        text-align: center;
        line-height: 30px;
        font-size: 24px;
        margin-top: 10px;
    }
    .service-box .bottom .button {
        font-size: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        margin-top: 40px;
    }
    .service-box .bottom .button i {
        font-size: 40px;
        margin-left: 24px;
    }

    .example-box {
        background-color: #101010;
        color: #fff;
        padding: 60px 0;
    }
    .example-box .title{
        font-size: 60px;
        letter-spacing: 2px;
        font-weight: 700;
        text-align: center;
        position: relative;
    }
    .example-box .title::after {
        content: '';
        position: absolute;
        width: 197px;
        height: 4px;
        background-color: #47FC22;
        left: 0;
        right: 0;
        margin: 0 auto;
        bottom: -20px;
    }
    .example-box ul {
        margin-top: 64px;
        background-color: #1C1C1C;
        border-radius: 16px;
        padding: 40px;
    }
    .example-box ul li {
        height: 60px;
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 16px;
        font-weight: 400;
    }
    .example-box ul li.line {
        height: 1px;
        background-color: #D9D9D9;
        opacity: 0.1;
    }
}
</style>