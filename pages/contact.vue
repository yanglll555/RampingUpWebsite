<template>
    <div class="contact page-container gradient-bottom">
        <div class="left-imprint"></div>
		<div class="right-imprint"></div>
        <div class="universal_container">
            <div class="contact-container">
                <h1 class="form-title">
                    CONTACT US
                </h1>
                <el-form ref="form" class="contact-form" :model="form" label-position="top" :rules="rules">
                    <el-form-item label="First Name" class="short-pc-item short-mobile-item" prop="first_name">
                        <el-input v-model="form.first_name" placeholder="Enter your First name"></el-input>
                    </el-form-item>
                    <el-form-item label="Last Name" class="short-pc-item short-mobile-item" prop="last_name">
                        <el-input v-model="form.last_name" placeholder="Enter your Last name"></el-input>
                    </el-form-item>
                    <el-form-item label="Company Email" prop="company_email">
                        <el-input v-model="form.company_email" placeholder="Enter your Company Email"></el-input>
                    </el-form-item>
                    <el-form-item label="Company Size" class="short-pc-item" prop="company_size">
                        <el-select v-model="form.company_size" placeholder="Please Select">
                            <el-option
                                v-for="item in companySizeOption"
                                :key="item.key"
                                :label="item.label"
                                :value="item.key">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="Phone Number" class="short-pc-item" prop="phone_number_temp">
                        <div class="phone-input">
                            <!-- <div class="prepend">+</div> -->
                            <el-select class="area" v-model="form.area" filterable no-data-text="empty" placeholder="">
                                <el-option
                                    v-for="item in countryOption"
                                    :key="item.en"
                                    :value="item.code">
                                    <span style="float: left">{{ item.en }}</span>
                                    <span style="float: right; color: #8492a6; font-size: 13px">{{ item.code }}</span>
                                </el-option>
                            </el-select>
                            <el-input class="phone" v-model="form.phone_number_temp" placeholder="Enter phone number"></el-input>
                        </div>
                    </el-form-item>
                    <el-form-item label="Company official website">
                        <el-input v-model="form.company_official_website" placeholder="Enter your Company official website"></el-input>
                    </el-form-item>
                    <el-form-item label="Which country are you located in?" prop="which_country_are_you_located_in">
                        <el-select v-model="form.which_country_are_you_located_in" filterable no-data-text="empty" placeholder="Please Select">
                            <el-option
                                v-for="item in countryOption"
                                :key="item.en"
                                :label="item.en"
                                :value="item.en">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="Leave a Message">
                        <el-input v-model="form.message" placeholder="" type="textarea" :autosize="{ minRows: 1, maxRows: 6 }"></el-input>
                    </el-form-item>
                </el-form>
                
                <div slot="footer" class="dialog-footer">
                    <div :class="showResule && showResule.type === 'success' ? 'success-tip' : 'error-tip'" v-if="showResule && showResule.msg">
                        {{showResule.msg}}
                    </div>
                    <div class="rampingBtn" @click="submit">
                        <i class="el-icon-loading" style="margin-right: 10px;" v-if="loading"></i>
                        Submit
                    </div>
                </div>
                <div class="privacy">
                    We respect your data. By submitting this form, you agree that we will contact you in relation to our products and services, in accordance with our <span @click="linkTo('/policy')">Privacy Policy</span> and <span @click="linkTo('/about-us/FAQ')">Terms of Service.</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
const REGULAR_EMAIL = /^[\w\.\_]+@[\S]+\.([a-z]{2,6}|[\u2E80-\u9FFF]{2,3})$/
import countryOption from '@/assets/js/areaCode'
export default({
    head() {
		return {
			title: 'Contact | Ramping Up'
		}
	},
    data () {
        return {
            form: {
                area: '+1'
            },
            loading: false,
            showResule: {
                msg: '',
                type: 'success'
            },
            countryOption
        }
    },
    created() {
        this.showResule = undefined
    },
    computed: {
        rules() {
            return {
                first_name: [
                    { required: true, message: 'Enter your First name' }
                ],
                last_name: [
                    { required: true, message: 'Enter your Last name' }
                ],
                company_email: [
                    { required: true, message: 'Enter your Company Email' },
                    { validator: this.validateEmail }
                ],
                company_size: [
                    { required: true, message: 'Please Select Company Size' },
                ],
                phone_number_temp: [
                    { required: true, message: 'Please provide your phone number'},
                    { validator: this.validatePhone }
                ],
                which_country_are_you_located_in: [
                    { required: true, message: 'Please Select country' },
                ]
            }
        },
        companySizeOption() {
            return [
                {
                    key: '0 - 20',
                    label: '0 - 20'
                },
                {
                    key: '20 - 100',
                    label: '20 - 100'
                },
                {
                    key: '100 - 500',
                    label: '100 - 500'
                },
                {
                    key: '500 +',
                    label: '500 +'
                }
            ]
        }
    },
    methods: {
        linkTo(path) {
            this.$router.push(path || '/')
        },
        submit() {
            if (this.loading) return
            this.$refs['form'].validate(valid => {
                if (valid) {
                    this.submitForm()
                }
            })
        },
        validateEmail(rule, value, callback) {
            if (value && !REGULAR_EMAIL.test(value)) {
                callback(new Error('Please enter the correct email format'))
            } else {
                callback()
            }
        },
        validatePhone(rule, value, callback) {
            if (!this.form.area) {
                callback(new Error('Select phone number area code'))
            } else if (!this.form.phone_number_temp) {
                callback(new Error('Enter phone number'))
            } else {
                callback()
            }
        },
        submitForm() {
            this.form.phone_number = `${this.form.area} ${this.form.phone_number_temp}`
            const url = 'https://strapi.runworld.com.cn/api/contact-uses'
            this.loading = true
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({data: this.form})
            })
            .then((res) => {
                console.log(res)
                if (res.status === 200) {
                    this.showResule = {
                        msg: 'Submitted successfully',
                        type: 'success'
                    }
                } else {
                    this.showResule = {
                        msg: 'System error',
                        type: 'error'
                    }
                }
            })
            .finally(() => {
                this.loading = false
            })
        }
    },
})
</script>
<style>
@media (max-width: 600px) {
    .contact {
        position: relative;
        z-index: 101;
    }
    .contact>.left-imprint{
		display: none;
	}
	.contact>.right-imprint{
		width: 256px;
		height: 243px;
		position: absolute;
		top: 0;
		right: 0;
		/* opacity: 0.7; */
		background-image: url('@/assets/images/contact_back_right.png');
		pointer-events: none;
	}
    .contact-container .form-title {
        font-size: 36px;
        font-weight: 700;
        padding-top: 25px;
        padding-bottom: 24px;
        color: #fff;
        position: relative;
    }
    .contact-container .form-title::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        margin: 0 auto;
        width: 70px;
        height: 4px;
        background-color: #47FC22;
    }
    .contact-form {
        width: 100%;
        margin: 0 auto;
        margin-top: 32px;
    }
    .contact-form .el-form-item {
        width: 100%!important;
        margin-bottom: 16px;
        flex-shrink: 0;
        flex-grow: 0;
    }
    .contact-form .el-form-item .el-form-item__error {
        padding-top: 1px;
    }
    .contact-form .el-form-item .phone-input {
        width: 100%;
        height: 48px;
        background-color: #212121;
        border-radius: 4px;
        display: flex;
        align-items: center;
    }
    /* .contact-form .el-form-item .phone-input .prepend {
        width: 20px;
        text-align: right;
    } */
    .contact-form .el-form-item .phone-input .area {
        padding-left: 10px;
        width: 78px;
    }
    .contact-form .el-form-item .phone-input .phone {
        flex: 1;
    }
    .contact-form .el-form-item .phone-input .el-input__inner {
        height: 20px!important;
        padding: 0 10px;
    }
    .contact-form .el-form-item .phone-input .area .el-input__inner {
        border-right: 1px solid #fff;
        padding-left: 0;
    }
    .contact-form .el-form-item .el-select {
        width: 100%;
    }
    .contact-form .el-form-item .el-form-item__label {
        padding-left: 16px;
        padding-bottom: 8px;
        font-size: 12px;
        color: #fff;
        line-height: 16.5px;
        position: relative;
    }
    .contact-form .el-form-item .el-form-item__label::before {
        position: absolute;
        top: 5px;
        right: -12px;
    }
    .el-input__inner::placeholder, .el-textarea__inner::placeholder {
        color: #808080;
    }
    .contact-form .el-form-item .el-form-item__content .el-input .el-input__inner {
        border: none;
        color: #fff;
        background-color: #212121;
        height: 48px;
    }
    .contact-form .el-form-item .el-form-item__content .el-textarea .el-textarea__inner {
        border: none;
        color: #fff;
        background-color: #212121;
        min-height: 48px!important;
    }
    .contact-form .el-form-item .el-form-item__content .el-select .el-input__inner {
        border: none;
        color: #fff;
        background-color: #212121;
        height: 48px;
    }
    .contact-container .privacy {
        text-align: center;
        font-size: 11px;
        line-height: 12px;
        color: #999;
        padding-bottom: 32px;
    }
    .contact-container .privacy span {
        color: #007AFF;
    }
    .contact-container .dialog-footer {
        width: 100%;
        margin-top: 32px;
        margin-bottom: 12px;
    }
    .contact-container .dialog-footer .rampingBtn {
        height: 52px;
        font-size: 15px;
    }
    .contact-container .dialog-footer .success-tip {
        height: 48px;
        line-height: 48px;
        font-size: 15px;
        color: #47FC22;
        text-align: center;
    }
    .contact-container .dialog-footer .error-tip {
        height: 48px;
        line-height: 48px;
        font-size: 15px;
        color: red;
        text-align: center;
    }
}
@media (min-width: 600px) {
    .contact {
        position: relative;
        z-index: 101;
    }
    .contact>.left-imprint{
		width: 256px;
		height: 243px;
		position: absolute;
		top: 0;
		left: 0;
		/* opacity: 0.7; */
		background-image: url('@/assets/images/contact_back_left.png');
		pointer-events: none;
	}
	.contact>.right-imprint{
		width: 256px;
		height: 243px;
		position: absolute;
		top: 0;
		right: 0;
		/* opacity: 0.7; */
		background-image: url('@/assets/images/contact_back_right.png');
		pointer-events: none
	}
    .contact-container .form-title {
        text-align: center;
        font-size: 50px;
        font-weight: 700;
        padding-top: 80px;
        padding-bottom: 20px;
        color: #fff;
        position: relative;
    }
    .contact-container .form-title::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        width: 70px;
        height: 4px;
        background-color: #47FC22;
    }
    .contact-form {
        width: 1016px;
        margin: 0 auto;
        margin-top: 48px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .contact-form .el-form-item {
        width: 500px;
        margin-bottom: 16px;
        flex-shrink: 0;
        flex-grow: 0;
    }
    .contact-form .el-form-item.short-pc-item {
        width: 242px;
    }
    .contact-form .el-form-item .el-form-item__error {
        padding-top: 1px;
    }
    .contact-form .el-form-item .phone-input {
        width: 100%;
        height: 48px;
        background-color: #212121;
        border-radius: 4px;
        display: flex;
        align-items: center;
    }
    /* .contact-form .el-form-item .phone-input .prepend {
        width: 20px;
        text-align: right;
    } */
    .contact-form .el-form-item .phone-input .area {
        padding-left: 10px;
        width: 78px;
    }
    .contact-form .el-form-item .phone-input .phone {
        flex: 1;
    }
    .contact-form .el-form-item .phone-input .el-input__inner {
        height: 20px!important;
        padding: 0 10px;
    }
    .contact-form .el-form-item .phone-input .area .el-input__inner {
        border-right: 1px solid #fff;
        padding-left: 0;
    }
    .contact-form .el-form-item .el-select {
        width: 100%;
    }
    .contact-form .el-form-item .el-form-item__label {
        padding-left: 16px;
        padding-bottom: 8px;
        font-size: 12px;
        color: #fff;
        line-height: 16.5px;
        position: relative;
    }
    .contact-form .el-form-item .el-form-item__label::before {
        position: absolute;
        top: 5px;
        right: -12px;
    }
    .el-input__inner::placeholder, .el-textarea__inner::placeholder {
        color: #808080;
    }
    .contact-form .el-form-item .el-form-item__content .el-input .el-input__inner {
        border: none;
        color: #fff;
        background-color: #212121;
        height: 48px;
    }
    .contact-form .el-form-item .el-form-item__content .el-textarea .el-textarea__inner {
        border: none;
        color: #fff;
        background-color: #212121;
        min-height: 48px!important;
    }
    .contact-form .el-form-item .el-form-item__content .el-select .el-input__inner {
        border: none;
        color: #fff;
        background-color: #212121;
        height: 48px;
    }
    .contact-container .privacy {
        width: 520px;
        margin: 0 auto;
        text-align: center;
        font-size: 12px;
        line-height: 13.2px;
        padding: 24px 0 80px 0;
        color: #999;
    }
    .contact-container .privacy span {
        cursor: pointer;
        color: #007AFF;
    }
    .contact-container .dialog-footer {
        width: 1016px;
        margin: 24px auto;
    }
    .contact-container .dialog-footer .rampingBtn {
        width: 250px;
        height: 52px;
        margin: 0 auto;
        font-size: 15px;
    }
    .contact-container .dialog-footer .success-tip {
        height: 48px;
        line-height: 48px;
        font-size: 15px;
        color: #47FC22;
        text-align: center;
    }
    .contact-container .dialog-footer .error-tip {
        height: 48px;
        line-height: 48px;
        font-size: 15px;
        color: red;
        text-align: center;
    }
}
</style>