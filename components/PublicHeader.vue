<template>
	<div class="universal_container">
		<nuxt-link to="/">
			<img class="logo" src="@/assets/images/logo.png" alt="">
		</nuxt-link>

		<!-- web -->
		<nav class="Header__nav">
			<ul>
				<li v-for="(item, i) in router_map" :key="i" @mouseenter="mouseentermenu(item)" @mouseleave="mouseleavemenu(item)" @click="linkTo(item.path)" :class="{
					'nav-active': item.dropdown.includes($route.path),
					'need-dropdown': !item.path
				}">
					{{item.name}}
					<template v-if="item.childs?.length">
                        <i class="el-icon-arrow-up" v-if="item.pullChild && showDropdown"></i>
                        <i class="el-icon-arrow-down" v-else></i>
                    </template>
					<div class="dropdown" v-show="item.childs && showDropdown">
						<div class="dropdown-item" @click="linkTo(child.path)" v-for="(child, j) in item.childs" :key="j">
							<img :src="require(`@/assets/images/${child.icon}.png`)" alt="">
							{{child.name}}
						</div>
					</div>
				</li>
			</ul>
		</nav>
		<div class="btn-container">
			<!-- <div class="header-btn">Login</div> -->
			<div class="header-btn" @click="$router.push('/contact')">Contact</div>
		</div>

		<!-- h5 -->
		<img class="menu-btn" src="@/assets/images/a-h5-menu-btn.png" @click="showMenu = true" alt="">

		<div class="blur-background" :class="showMenu ? 'show' : ''" @click="showMenu = false"></div>

		<div class="h5-sidebar"
			:class="showMenu ? 'show' : ''"
			ref="h5Sidebar"
			@touchstart="touchstart"
			@touchmove="touchmove"
			@touchend="touchend">
			<H5Sidebar @hideSidebar="showMenu = false;" />
		</div>
		<el-drawer v-if="isMobile" :visible.sync="showApply" size="80%" custom-class="apply-dialog" :show-close="false" :withHeader="false" :wrapperClosable="false" direction="btt">
			<ApplyForm />
		</el-drawer>
		<el-dialog v-else center :visible.sync="showApply" class="apply-dialog" :close-on-click-modal="false" width="528px" :show-close="false">
			<ApplyForm />
		</el-dialog>
		<el-dialog center :visible.sync="showResult" :close-on-click-modal="true" class="result-dialog" :width="isMobile ? '345px' : '451px'" :show-close="false" @close="$store.commit('updateShowResult', false)">
			<div class="job-result">
				<img class="img" src="@/assets/images/job_submit_icon.png" alt="">
				<div class="msg">Thank you for applying!</div>
				<div class="tip">You can check out other positions to learn more about them</div>
				<div class="rampingBtn" @click="viewMore">View More Jobs</div>
			</div>
		</el-dialog>
	</div>
</template>

<script>
import menus from '@/mixin/menu'
import { mapGetters } from 'vuex'

export default {
	mixins: [menus],
	data() {
		return {
			viewportWidth: 0,
			showDropdown: true,

			showMenu: false,
			startX: 0,
			sidebarWidth: 0,
			sidebarRight: 0
		}
	},
	mounted() {
		this.updateViewportWidth();
	},
	computed: {
		...mapGetters(['showApply', 'showResult']),
		isMobile() {
			return this.viewportWidth < 600
		}
	},
	watch: {
		showMenu: {
			handler(bool) {
				const sidebar = this.$refs.h5Sidebar; 
				if (bool) {
					sidebar.style.right = 0
				} else {
					sidebar.style.right = '-100%'
				}
			}
		}
	},
	methods: {
		viewMore() {
			this.$store.commit('updateShowResult', false)
			this.$router.push('/job-board')
		},
		updateViewportWidth() {
			this.viewportWidth = window.innerWidth;
		},
		linkTo(path) {
			if (path) {
				this.$router.push(path)
				this.showDropdown = false
				setTimeout(() => {
					// 模拟跳转后隐藏弹窗
					this.showDropdown = true
				}, 100)
			}
		},
		touchstart(event) {
			this.showMenu = 'pending' // 为了可以让watch监听到touchend的变化
			this.sidebarRight = 0
			const sidebar = this.$refs.h5Sidebar;
			this.sidebarWidth = sidebar.offsetWidth;
			this.startX = event.touches[0].clientX;
		},
		touchmove(event) {
			const currentX = event.touches[0].clientX;
			const deltaX = currentX - this.startX;
			
			let right = this.sidebarRight - deltaX
			if (right > 0) {
				right = 0
			} else if (right < -this.sidebarWidth) {
				right = -this.sidebarWidth
			}
			this.sidebarRight = right

			this.$refs.h5Sidebar.style.right = right + 'px';

			this.$nextTick(() => {
				this.startX = event.touches[0].clientX
			})
		},
		touchend() {
			let limit = 0.5
			if (Math.abs(this.sidebarRight) > (this.sidebarWidth * limit)) {
				this.showMenu = false
			} else {
				this.showMenu = true
			}
		},
		mouseentermenu(item) {
			if (item.childs?.length) {
				item.pullChild = true
				this.$forceUpdate()
			}
		},
		mouseleavemenu(item) {
			if (item.childs?.length) {
				item.pullChild = false
				this.$forceUpdate()
			}
		}
	}
}
</script>

<style scoped>
@media (max-width: 600px) {
	.universal_container {
		height: var(--h5-headerHeight);
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.logo {
		height: 30px;
	}

	.menu-btn {
		width: 24px;
		height: 24px;
	}

	.blur-background {
		width: 100vw;
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
		background-color: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
		opacity: 0;
		visibility: hidden;
		transition: opacity 0.3s, visibility 0.3s;
	}
	.blur-background.show {
		opacity: 1;
		visibility: visible;
	}

	.h5-sidebar {
      position: fixed;
      top: 0;
      right: -100%;
      width: var(--h5-sidebarWidth);
      height: 100vh;
      background: var(--backColor);
      box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
      transition: right 0.3s;
    }

	.h5-sidebar.show {
		right: 0;
	}

	.Header__nav, .btn-container {
		display: none;
	}
}
@media (min-width: 600px) {
	.universal_container {
		height: var(--headerHeight);
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.logo {
		height: 30px;
	}
	.Header__nav {
		height: 100%;
	}
	.Header__nav ul {
		display: flex;
		align-items: center;
		height: 100%;
	}
	.Header__nav li {
		font-size: 14px;
		font-weight: 500;
		margin: 0 20px;
		cursor: pointer;
		position: relative;
		z-index: 1000;
		height: 100%;
		display: flex;
		align-items: center;
	}
	.Header__nav li>i {
		margin-left: 5px;
	}
	.nav-active::after {
		position: absolute;
		content: '';
		bottom: 20px;
		left: 0;
		width: 100%;
		height: 2px;
		background-color: #47FC22;
	}
	.Header__nav li .dropdown {
		min-width: 253px;
		max-width: 286px;
		max-height: 0;
		overflow: hidden;
		position: absolute;
		top: var(--headerHeight);
		left: 0;
		border-radius: 16px;
		background-color: #fff;
		transition: max-height 0.3s ease 0.1s;
	}
	.Header__nav .need-dropdown:hover .dropdown {
		max-height: 1000px;
		display: inline-block;
	}
	.Header__nav li .dropdown-item {
		width: 100%;
		margin: 8px 0;
		padding: 0 24px;
		height: 48px;
		box-sizing: content-box;
		font-size: 16px;
		text-align: left;
		color: #000;
		align-items: center;
		display: inline-flex;
		white-space: nowrap;
	}
	.Header__nav li .dropdown-item:first-child {
		margin-top: 16px;
	}
	.Header__nav li .dropdown-item:last-child {
		margin-bottom: 16px;
	}
	.Header__nav li .dropdown-item img{
		width: 24px;
		height: 24px;
		margin-right: 12px;
	}
	.Header__nav li .dropdown-item:hover {
		background-color: #e1e1e1;
	}

	.menu-btn {
		display: none;
	}

	.blur-background {
		display: none;
	}

	.h5-sidebar {
		display: none;
	}
}
</style>

<style>
.el-dialog__wrapper {
    backdrop-filter: blur(15px);
}

.result-dialog {
	display: flex;
	justify-content: center;
	align-items: center;
}
.result-dialog .el-dialog {
	border-radius: 16px;
}
.result-dialog .el-dialog__header {
	display: none;
}
.result-dialog .el-dialog__body {
	padding: 40px 0;
}
.result-dialog .job-result {
	display: flex;
	flex-direction: column;
	align-items: center;
}
.result-dialog .job-result .img {
	width: 120px;
	height: 120px;
}
.result-dialog .job-result .msg {
	font-size: 24px;
	line-height: 38.4px;
	color: #1A1A1A;
	margin-top: 20px;
}
.result-dialog .job-result .tip {
	width: 312px;
	font-size: 16px;
	line-height: 25.6px;
	color: #999999;
	text-align: center;
	margin-top: 4px;
}
.result-dialog .job-result .rampingBtn {
	width: 280px;
	height: 48px;
	font-size: 15px;
	border-radius: 6px;
	margin-top: 20px;
}
</style>