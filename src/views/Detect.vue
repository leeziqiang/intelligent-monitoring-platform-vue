<template>
  <el-container >
    <el-header style="padding: 0 0px">
      <Header></Header>
    </el-header>
    <el-main>
      <UploadFile></UploadFile>
    </el-main>
    <el-footer style="padding: 0 0px;height: 418px">
      <Footer></Footer>
    </el-footer>
  </el-container>
<!--  <div style="">-->
<!--    <UploadFile></UploadFile>-->

<!--  </div>-->
</template>

<script>
import UploadFile from "./UploadFile";
import Header from "./vsst/Header";
import Footer from "./vsst/Footer";
export default {
  name: "Detect",
  components: {Footer, Header, UploadFile}


}
</script>

<style scoped>

</style>
