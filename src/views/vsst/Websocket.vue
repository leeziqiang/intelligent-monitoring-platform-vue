<template>
  <div>
    <h1>测试webSocket</h1>
    <button @click="getWebsocket" >点击请求后台数据</button>
    <img :src="imgUrl" width="1080" height="720"/>
  </div>
</template>

<script>
export default {
  name: "Websocket",
  data() {
    return {
      imgUrl: " ",
    }
  },
  created() { // 页面创建生命周期函数
    this.initWebSocket()
  },
  destroyed: function () { // 离开页面生命周期函数
    this.websocketclose();
  },
  methods: {
    initWebSocket: function () {
      // WebSocket与普通的请求所用协议有所不同，ws等同于http，wss等同于https
      this.websock = new WebSocket("ws://localhost:8081//video/websocket");
      // this.websock = new WebSocket("ws://202.115.52.99:8124");
      this.websock.onopen = this.websocketonopen;
      this.websock.onerror = this.websocketonerror;
      this.websock.onmessage = this.websocketonmessage;
      this.websock.onclose = this.websocketclose;

    },
    websocketonopen: function () {
      console.log("WebSocket连接成功");

    },
    websocketonerror: function (e) {
      console.log("WebSocket连接发生错误");
    },
    websocketonmessage: function (e) {
      // console.log(e.data);// console.log(e);
      var data= JSON.parse(e.data);
      if (data.code === 0) {
        console.log(data.message)
      } else if (data.code === 2000) {
        this.imgUrl="data:image/*;base64," + data.data.videoFrame
        // data.data.videoFrame="kongkong"
        //   this.websock.send(JSON.stringify(data))
          // console.log(JSON.stringify(data.data))
      }
    },
    websocketclose: function (e) {
      console.log("connection closed (" + e.code + ")");
    },
    getWebsocket:function(){
        this.$axios.get("http://localhost:8081/videoFromServer")
      // var url = "http://localhost:8081/teach"
      // 这里只是一个基于axios的ajax请求，你可以换成你的请求格式
      // this.$axios.get("http://localhost:8081/teach").then((res)=>{
      //   console.log(res)
      // })

    }
  }
}
</script>

<style scoped>

</style>
