<template>
    <div class="sidebar">
        <img src="@/assets/images/logo.png" alt="" class="logo">
        <ul class="sidebar-list">
            <li
                v-for="(item, index) in router_map_h5"
                :key="index"
                :class="{
                    'active': item.path === $route.path || item?.dropdown?.includes($route.path)
                }">
                <div class="name" @click="linkTo(item)">
                    {{ item.name }}
                    <template v-if="item.childs?.length">
                        <i class="el-icon-arrow-up" v-if="item.pullChild"></i>
                        <i class="el-icon-arrow-down" v-else></i>
                    </template>
                </div>
                <transition name="el-zoom-in-top">
                    <div v-if="item.pullChild">
                        <div
                            v-for="(child, i) in item.childs"
                            :key="i"
                            :class="{
                                'name': true,
                                'child': true,
                                'active-child': child.path === $route.path
                            }"
                            @click="linkTo(child)">
                            {{ child.name }}
                        </div>
                    </div>
                </transition>
            </li>
        </ul>
        <div class="header-btn" @click="contact">Contact</div>
    </div>
</template>

<script>
import menus from '@/mixin/menu'

export default {
    mixins: [menus],
    computed: {
        router_map_h5() {
            return [
                {
                    name: 'Home',
					path: '/',
					dropdown: ['/']
                },
                ...this.router_map
            ]
        }
    },
    methods: {
        linkTo(item) {
            if (item.path) {
                this.$router.push(item.path)
                this.$emit('hideSidebar')
            } else if (item.childs?.length) {
                item.pullChild = !item.pullChild
                this.$forceUpdate()
            }
        },
        contact() {
            this.$emit('hideSidebar')
            this.$router.push('/contact')
        }
    }
}
</script>

<style scoped>
/* H5组件，不需要区分媒体查询 */
.sidebar {
    width: 100%;
    height: 100%;
    padding: 20px;
    color: #fff;
    position: relative;
}
.logo {
    width: 100%;
    padding-bottom: 20px;
    border-bottom: 1px solid #666666;
    
}
.sidebar-list {
    margin-top: 20px;
    height: calc(100% - 200px);
    overflow-y: auto;
}

.sidebar-list li {
    min-height: 40px;
}
.sidebar-list li.active>.name, .sidebar-list li .active-child {
    background-color: rgb(29, 29, 29);
}

.sidebar-list .name {
    border-radius: 8px;
    margin: 8px 0;
    padding: 0 10px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.sidebar-list .child {
    margin-left: 10px;
}

.header-btn {
    position: absolute;
    left: 20px;
    right: 20px;
    bottom: 70px;
}
</style>
