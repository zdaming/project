<template>
  <div :class="classObj" class="app-wrapper">
    <sidebar class="sidebar-container" />
    <el-container class="main-container">
      <el-header>
        <layout-header class="header-container" />
      </el-header>
      <!-- <tab-nav /> -->
      <el-main>
        <layout-main class="app-main" />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Sidebar from './aside/sidebar'
import LayoutHeader from './header/index'
// import TabNav from './tabNav/index'
import LayoutMain from './main/index'
import ResizeMixin from './mixin/ResizeHandler'

export default {
  name: 'layout',
  components: {
    // TabNav,
    Sidebar,
    LayoutHeader,
    LayoutMain
  },
  mixins: [ResizeMixin],
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar,
      device: state => state.app.device
    }),
    classObj () {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  %wh100 {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .app-main,
  .app-wrapper,
  .main-container {
    @extend %wh100;
  }

  .el-header {
    position: relative;
    height: 50px !important;
    padding: 0;
    background: #fff;
    overflow: hidden;
    box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
    -webkit-box-shadow: 0 1px 4px rgba(0, 21, 41, .08);

    .header-container {
      height: 100%;
    }
  }
</style>
