<template>
    <div class="pagination">
      <!-- 上一页按钮 -->
      <button
        @click="changePage(currentPage - 1)"
        :disabled="loading || currentPage === 1"
      >
        <i class="iconfont icon-arrow-left-bold"></i>
        Back
      </button>
  
      <!-- 页码显示 -->
    <button
        v-for="(page, index) in visiblePages"
        :key="index"
        :disabled="loading"
        @click="changePage(page)"
        :class="{ active: currentPage === page }"
    >
        {{ page }}
    </button>
      <!-- 下一页按钮 -->
      <button
        @click="changePage(currentPage + 1)"
        :disabled="loading || currentPage === totalPages"
      >
        Next
        <i class="iconfont icon-arrow-right-bold"></i>
      </button>
  
      <!-- 当前页码显示 -->
      <!-- <div class="current-page">
        当前页: {{ currentPage }} / {{ totalPages }}
      </div> -->
  
      <!-- 跳转到特定页 -->
      <div class="goto-page">
        Page
        <input v-model="goToPage" @input="onInput" @keyup.enter="goToPageNum" />
        <span @click="goToPageNum">Go</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      total: {
        type: Number,
        required: true
      },
      size: {
        type: Number,
        default: 10 // 每页显示的条数，默认为10
      },
      current: {
        type: Number,
        default: 1 // 默认的当前页
      },
      isMobile: {
        type: Boolean,
        default: false
      },
      loading: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        goToPage: null, // 跳转的页码
        currentPage: 1
      };
    },
    computed: {
      totalPages() {
        // 根据 total 和 size 计算总页数
        return Math.ceil(this.total / this.size);
      },
      visiblePages() {
        let pages = [];
        const limit = this.isMobile ? 5 : 7
        if (this.totalPages <= limit) {
          // 当总页数 <= 7 时，显示所有页码
          for (let i = 1; i <= this.totalPages; i++) {
            pages.push(i);
          }
        } else {
          if (this.isMobile) {
            // 总页数 > 5 时，动态显示页码
            if (this.currentPage <= 2) {
              // 当前页接近开头时显示前3页 + 省略号 + 最后一页
              pages = [1, 2, 3, '...', this.totalPages];
            } else if (this.currentPage >= this.totalPages - 2) {
              // 当前页接近结尾时显示第一页 + 省略号 + 后5页
              pages = [1, '...', this.totalPages - 2, this.totalPages - 1, this.totalPages];
            } else {
              // 当前页在中间时显示第一页 + 省略号 + 当前页的前后各2页 + 省略号 + 最后一页
              pages = [1, '...', this.currentPage, '...', this.totalPages];
            }
          } else {
            // 总页数 > 7 时，动态显示页码
            if (this.currentPage <= 4) {
              // 当前页接近开头时显示前5页 + 省略号 + 最后一页
              pages = [1, 2, 3, 4, 5, '...', this.totalPages];
            } else if (this.currentPage >= this.totalPages - 3) {
              // 当前页接近结尾时显示第一页 + 省略号 + 后5页
              pages = [1, '...', this.totalPages - 4, this.totalPages - 3, this.totalPages - 2, this.totalPages - 1, this.totalPages];
            } else {
              // 当前页在中间时显示第一页 + 省略号 + 当前页的前后各2页 + 省略号 + 最后一页
              pages = [1, '...', this.currentPage - 1, this.currentPage, this.currentPage + 1, '...', this.totalPages];
            }
          }
        }
        return pages;
      }
    },
    methods: {
      changePage(page) {
        if (page !== '...' && page >= 1 && page <= this.totalPages) {
          this.$emit('change', page); // 通知父组件页码变化
          this.currentPage = page
        }
      },
      goToPageNum() {
        const page = Number(this.goToPage);
        if (page >= 1 && page <= this.totalPages) {
          this.changePage(page);
        }
        this.goToPage = null; // 清空输入框
      },
      onInput(event) {
        const value = event.target.value;
        this.goToPage = value.replace(/[^1-9]/g, '')
      }
    },
    mounted() {
        this.currentPage = this.current
    }
  };
  </script>
  
  <style scoped>
  .pagination {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  button {
    min-width: 36px;
    height: 36px;
    padding: 9px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: #767F8C;
    border: 1px solid #E5E5E5;
    background-color: white;
    cursor: pointer;
    user-select: none;
  }
  
  button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  
  button.active {
    background-color: #47FC22;
    color: #111;
  }
  
  .current-page {
    margin-left: 10px;
    font-weight: bold;
  }
  
  .goto-page {
    margin-left: auto;
    color: #767F8C;
    font-size: 14px;
    display: flex;
    align-items: center;
  }
  
  .goto-page input {
    width: 60px;
    margin: 0 8px;
    border: 1px solid #E5E5E5;
    height: 36px;
    border-radius: 4px;
    text-align: center;
  }
  .goto-page span:hover {
    color: #315efb;
    cursor: pointer;
    user-select: none;
  }
  @media (max-width: 600px) {
    .goto-page {
      display: none;
    }
  }
  </style>