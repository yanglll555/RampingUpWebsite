<template>
    <div class="apply-container">
        <div class="dialog-header">
            <div class="form-title">
                Apply Now
            </div>
            <img class="close" @click="close" src="@/assets/images/dialog_close.png" alt="">
        </div>
        <el-form ref="form" class="apply-form" :model="form" label-position="top" :rules="rules">
            <el-form-item label="Name" class="short-pc-item short-mobile-item" prop="name">
                <el-input v-model="form.name" placeholder="Enter your name"></el-input>
            </el-form-item>
            <el-form-item label="Email" class="short-pc-item short-mobile-item" prop="contact">
                <el-input v-model="form.contact" placeholder="Enter your Email"></el-input>
            </el-form-item>
            <el-form-item label="LinkedIn">
                <el-input v-model="form.linkIn_link" placeholder="Enter your LinkedIn"></el-input>
            </el-form-item>
            <el-form-item label="Upload Resume" prop="upload_resume">
                <el-upload
                    class="upload-demo"
                    drag
                    action="#"
                    :show-file-list="false"
                    :http-request="httpRequest">
                    <img src="@/assets/images/upload.png" class="upload-icon" alt="">
                    <div class="el-upload__text blue" v-if="uploadFile?.name">
                        {{ uploadFile.name }}
                    </div>
                    <div class="el-upload__text" v-else>Support PDF, DOC, and other formats</div>
                </el-upload>
            </el-form-item>
            <el-form-item label="introduction">
                <el-input v-model="form.introduction" placeholder="Enter your introduction" type="textarea" :autosize="{ minRows: 3, maxRows: 6 }"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <div class="rampingBtn" @click="submit">
                <i class="el-icon-loading" style="margin-right: 10px;" v-if="loading"></i>
                Submit
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
const REGULAR_EMAIL = /^[\w\.\_]+@[\S]+\.([a-z]{2,6}|[\u2E80-\u9FFF]{2,3})$/
export default {
    data() {
        return {
            form: {},
            uploadFile: null,
            loading: false,
            uploadLoading: false
        }
    },
    methods: {
        httpRequest(data) {
            this.uploadLoading = true
            const formData = new FormData()
            formData.append('files', data.file)
            fetch('https://strapi.runworld.com.cn/api/upload', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.length) {
                    this.uploadFile = data[0]
                }
            })
            .finally(() => {
                this.uploadLoading = false
            })
        },
        close() {
            this.form = {}
            this.$nextTick(() => {
                this.$refs['form'].clearValidate()
                this.$store.commit('updateShowApply', false)
            })
        },
        submit() {
            if (this.loading || this.uploadLoading) return
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
        validateFile(rule, value, callback) {
            if (this.uploadFile?.id) {
                callback()
            } else {
                callback(new Error('Upload your Resume'))
            }
        },
        submitForm() {
            this.form.upload_resume = this.uploadFile.id
            this.form.applied_company = String(this.applyCompany)
            this.form.applied_job = String(this.applyJob)
            const url = 'https://strapi.runworld.com.cn/api/career-talent-pools'
            this.loading = true
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({data: this.form})
            })
            .then((res) => {
                if (res.status === 200) {
                    this.close()
                    setTimeout(() => {
                        this.$store.commit('updateShowResult', true)
                    }, 300)
                }
            })
            .finally(() => {
                this.loading = false
            })
        }
    },
    computed: {
        ...mapGetters(['showApply','applyCompany','applyJob']),
        rules() {
            return {
                name: [
                    { required: true, message: 'Enter your First name' }
                ],
                contact: [
                    { required: true, message: 'Enter your Email' },
                    { validator: this.validateEmail }
                ],
                upload_resume: [
                    { required: true, validator: this.validateFile }
                ]
            }
        }
    }
}
</script>

<style>
@media (max-width: 600px) {
    .apply-dialog {
        border-radius: 16px 16px 0 0;
    }
    .apply-dialog .apply-container {
        padding: 20px 0;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .apply-dialog .dialog-header {
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 24px;
        flex-shrink: 0;
    }
    .apply-dialog .dialog-header .close {
        height: 40px;
    }
    .apply-dialog .form-title {
        font-size: 24px;
        font-weight: 600;
        color: #000;
    }
    .apply-dialog .dialog-footer {
        padding: 0 20px 0 20px;
    }
    .apply-dialog .dialog-footer .rampingBtn {
        height: 48px;
        line-height: 48px;
        font-size: 15px;
        flex-shrink: 0;
    }
    .apply-form {
        flex: 1;
        overflow-y: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 0 20px;
    }
    .apply-form .el-form-item {
        width: 100%;
        margin-bottom: 16px;
        flex-shrink: 0;
        flex-grow: 0;
    }
    .apply-form .el-form-item .el-upload {
        width: 100%;
    }
    .apply-form .el-form-item .el-upload .el-upload-dragger {
        width: 100%;
        height: 150px;
        border: 0.5px solid #E5E5E5;
        background-color: #F2F2F2;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
    }
    .apply-form .el-form-item .el-upload .el-upload-dragger .upload-icon {
        width: 24px;
        height: 24px;
    }
    .apply-form .el-form-item .el-upload .el-upload-dragger .el-upload__text {
        font-size: 14px;
        color: #808080;
    }
    .apply-form .el-form-item .el-upload .el-upload-dragger .el-upload__text.blue {
        color: #315efb;
    }
    .apply-form .el-form-item.short-mobile-item {
        width: 165px;
    }
    .apply-form .el-form-item .el-form-item__error {
        padding-top: 1px;
    }
    .apply-form .el-form-item .el-form-item__label {
        padding-left: 16px;
        padding-bottom: 8px;
        font-size: 12px;
        color: #333;
        line-height: 16.5px;
        position: relative;
    }
    .apply-form .el-form-item .el-form-item__label::before {
        position: absolute;
        top: 5px;
        right: -12px;
    }
    .apply-form .el-form-item .el-form-item__content .el-input .el-input__inner {
        background-color: rgb(242, 242, 242);
        height: 48px;
    }
    .apply-form .el-form-item .el-form-item__content .el-textarea .el-textarea__inner {
        background-color: rgb(242, 242, 242);
    }
    .apply-form .el-form-item .el-form-item__content .el-select .el-input__inner {
        background-color: rgb(242, 242, 242);
        height: 48px;
    }
}
@media (min-width: 600px) {
    .apply-dialog .el-dialog__body {
        padding: 20px;
    }
    .apply-dialog .el-dialog {
        border-radius: 16px;
    }
    .apply-dialog .el-dialog__header {
        display: none;
    }
    .apply-dialog .dialog-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 40px;
        margin-bottom: 20px;
    }
    .apply-dialog .form-title {
        font-size: 24px;
        font-weight: 600;
        color: #1A1A1A;
    }
    .apply-dialog .dialog-header .close {
        width: 40px;
        height: 40px;
        cursor: pointer;
    }
    .apply-dialog .dialog-footer .rampingBtn {
        height: 48px;
        font-size: 15px;
        margin-top: 22px;
    }
    .apply-form {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .apply-form .el-form-item {
        width: 100%;
        margin-bottom: 16px;
        flex-shrink: 0;
        flex-grow: 0;
    }
    .apply-form .el-form-item .el-upload {
        width: 100%;
    }
    .apply-form .el-form-item .el-upload .el-upload-dragger {
        width: 100%;
        height: 150px;
        border: 0.5px solid #E5E5E5;
        background-color: #F2F2F2;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
    }
    .apply-form .el-form-item .el-upload .el-upload-dragger .upload-icon {
        width: 24px;
        height: 24px;
    }
    .apply-form .el-form-item .el-upload .el-upload-dragger .el-upload__text {
        font-size: 14px;
        color: #808080;
    }
    .apply-form .el-form-item .el-upload .el-upload-dragger .el-upload__text.blue {
        color: #315efb;
    }
    .apply-form .el-form-item.short-pc-item {
        width: 216px;
    }
    .apply-form .el-form-item .el-form-item__error {
        padding-top: 1px;
    }
    .apply-form .el-form-item .el-form-item__label {
        padding-left: 16px;
        padding-bottom: 8px;
        font-size: 12px;
        color: #333;
        line-height: 16.5px;
        position: relative;
    }
    .apply-form .el-form-item .el-form-item__label::before {
        position: absolute;
        top: 5px;
        right: -12px;
    }
    .apply-form .el-form-item .el-form-item__content .el-input .el-input__inner {
        background-color: rgb(242, 242, 242);
        height: 48px;
    }
    .apply-form .el-form-item .el-form-item__content .el-textarea .el-textarea__inner {
        background-color: rgb(242, 242, 242);
    }
    .apply-form .el-form-item .el-form-item__content .el-select .el-input__inner {
        background-color: rgb(242, 242, 242);
        height: 48px;
    }
}
</style>
