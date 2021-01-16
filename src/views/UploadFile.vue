<template>
  <div>
    <el-upload
      class="avatar-uploader"
      action="http://202.115.53.183:8081/upload"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
      style="margin-left: 800px">
      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </div>
</template>

<script>

export default {
  name: "UploadFile",
  data() {
    return {
      imageUrl: ''
    };
  }
  ,
  methods: {
    handleAvatarSuccess(res, file) {
      // this.imageUrl = URL.createObjectURL();
      this.imageUrl=file.response.data.imgData.imgUrl;
      console.log(file)
    },

    beforeAvatarUpload(file) {
      console.log(file.type)
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 20;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 10MB!');
      }
      return isJPG && isLt2M;
    }
  },
};
</script>

<style scoped>
avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 500px;
  height: 500px;
  display: block;
}

</style>
