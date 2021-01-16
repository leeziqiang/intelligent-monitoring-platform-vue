<template>


  <div class="el-header" >
    <div class="left_box">
      <!--    logo和项目名称-->
      <div class="left_logo" >
        <img src="../../assets/img/logo2.png"/>
      </div>
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-middle"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-submenu index="1" >
          <template slot="title" >研究领域</template>
          <el-submenu index="1-1">
            <template slot="title">目标检测</template>
            <el-menu-item index="1-1-1">通用检测</el-menu-item>
            <el-menu-item index="1-1-2">遥感图像检测</el-menu-item>
            <el-menu-item index="1-1-3">安全帽检测检测</el-menu-item>
            <el-menu-item index="1-1-4">人脸识别</el-menu-item>
          </el-submenu>
          <el-menu-item index="1-2">目标跟踪</el-menu-item>
          <el-menu-item index="1-3">异常行为检测</el-menu-item>
          <el-menu-item index="1-4">人群密度估计</el-menu-item>
        </el-submenu>
        <el-menu-item index="2">关于我们</el-menu-item>
        <el-menu-item index="3" disabled>未来展望</el-menu-item>
        <el-menu-item index="3" disabled>案例应用</el-menu-item>
        <el-menu-item index="3" disabled>组内活动</el-menu-item>
      </el-menu>
    </div>

    <div class="right_box">
      <el-dropdown style="left: 0px">
        <el-avatar :size="60" :src="circleUrl" style="margin-right: 5px;margin-top: 2px"></el-avatar>
        <!--下拉菜单-->
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-house">个人主页</el-dropdown-item>
          <el-dropdown-item icon="el-icon-setting">我的设置</el-dropdown-item>
          <el-dropdown-item icon="el-icon-switch-button" v-show="isLogin">退出</el-dropdown-item>
          <el-dropdown-item icon="el-icon-switch-button" v-show="!isLogin">登录/注册</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

    </div>
  </div>


</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      isLogin: false,
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },

  }
}
</script>

<style  scoped>
  .el-header{
    background-color: #545c64;
    display: flex;
    justify-content: space-between;
    height: 68px;
    padding: 0px;
  }
  .left_box{
    display: flex;
  }
  .left_logo{
    display: flex;
  }
  .el-menu-middle{
    height: 100%;
  }
  .left_logo img{
    width: 216px;
    height: 100%;
  }
  .right_box{
  }


</style>
