<template>
  <div class="footer_box">
    <div class="footer_container">
        <div class="media">
          <img src="../../assets/img/logo2.png"/>
          <div class="icon-container">
<!--            <i class="icon icon-mini-program active"></i>-->
            <img src="../../assets/img/erweima.png" style="height: 200px;width: 160px;margin-top: 20px;margin-left: 20px">
          </div>
        </div>
        <dl class="footer_introduction">

            <dd style="margin-right: 30px; color: #CCCCCC">
              <p>友情链接</p>
              <ul style="list-style: none">
                <li>
                  <a href="http://eie.scu.edu.cn/index.jsp" style="text-decoration: none; color: #FFFFFF">四川大学研究电子信息学院</a>
                </li>
                <li>
                  <a href="https://www.cnki.net/" style="text-decoration: none; color: #FFFFFF">中国知网</a>
                </li>
                <li>
                  <a href="http://lib.scu.edu.cn/" style="text-decoration: none; color: #FFFFFF">四川大学图书馆</a>
                </li>
              </ul>
            </dd>
          <dd style="margin-right: 150px; color: #CCCCCC">
            <p>资源</p>
            <ul style="list-style: none">
              <li>
                <a href="https://www.baidu.com" style="text-decoration: none; color: #FFFFFF">接入指南</a>
              </li>
              <li>
                <a href="https://www.baidu.com" style="text-decoration: none; color: #FFFFFF">API文档</a>
              </li>
              <li>
                <a href="https://www.baidu.com" style="text-decoration: none; color: #FFFFFF">常见问题</a>
              </li>
            </ul>
          </dd>
          <dd style="margin-right: 150px; color: #CCCCCC">
            <p>关于</p>
            <ul style="list-style: none">
              <li>
                <a href="https://www.baidu.com" style="text-decoration: none; color: #FFFFFF">我们的工作</a>
              </li>
              <li>
                <a href="https://www.baidu.com" style="text-decoration: none; color: #FFFFFF">隐私政策</a>
              </li>
              <li>
                <a href="https://www.baidu.com" style="text-decoration: none; color: #FFFFFF">服务协议</a>
              </li>
            </ul>
          </dd>
          <div class="address" style="margin-right: -500px;margin-top: 250px;color: #FFFFFF">地址：四川省成都市武侯区一环路路南一段24号 邮编:610065 </div>
        </dl>
    </div>

    <div class="copyright_container" style="border-top: 1px #CCC solid">
      <p class="copyright">
        <span style="font-size: 12px; color: white">
          "© 2020-2020 个人博客 版权所有 | 蜀ICP备2020036136号"
        </span>
      </p>
      <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802025959" style="color: white;margin-left: 44% ;font-size: 12px; width: 180px;text-decoration: none">
          京公网安备 11010802025959号
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
  .footer_box{
    background-color: #545c64;
    height: 418px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .footer_container{
    display: flex;

  }
  .media{
    height: 300px;
    width: 200px;

    margin-top: 40px;
    margin-left: 120px;
  }
  .media img {
    height: 48px;
    width: 172px;

  }
  .footer_introduction{
    width: 1000px;
    height: 300px;
    margin-left: 200px;
    margin-top: 40px;
    display: flex;
    flex-direction: row-reverse;
  }
  .copyright_container{
    height: 60px;
    display: flex;
    flex-direction: column;
    /*justify-content: center;*/
    text-align: center;
  }
  .copyright{
    margin-top: 0px;
    /*display: flex;*/

    /*justify-content: center;*/
  }
</style>
