<template>
  <div>
    <canvas style="width: 320px; height: 520px;" canvas-id="canvas"></canvas>
  </div>
</template>


<script>
const userInfo = {
  avatar: "https://avatars2.githubusercontent.com/u/8192412?s=40&v=4",
  name: "积纳有品小程序"
};
const qrCode = "https://upapi.jinaup.com/static/image/QRCode.png";
const toBase64 =
  "https://upapi.jinaup.com/api/open/product/image/to/base64/1.0.0";

import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      result: {}
    };
  },
  computed: {
    ...mapState({
      detailStr: state => state.index.detailStr
    })
  },
  methods: {},
  onLoad() {
    this.result = this.detailStr;
  },
  mounted() {
    // 获取canvas
    var context = wx.createCanvasContext("canvas");
    // 绘制白色背景
    context.rect(0, 0, 320, 520);
    // 绘制用户名和头像
    context.drawImage(userInfo.avatar, 0, 0, 40, 40, 20, 12, 40, 40);
    context.save();
    context.setFontSize(12);
    context.fillText(`${userInfo.name}分享给你一个商品`, 60, 26);
    context.fillText(`邀请码: dasbdabdbaj`, 60, 46);
    context.restore();
    // 绘制商品大图和标题
    context.save();
    context.setFontSize(12);
    // 计算多行文本，自动换行
    let row = 0,
      pos = 0;
    for (let i = 0; i < this.result.title.length; i++) {
      let str = this.result.title.slice(pos, i);
      if (
        context.measureText(str).width > 266 &&
        context.measureText(str).width < 280
      ) {
        context.fillText(this.result.title.slice(pos, i), 20, 350 + 15 * row);
        row++;
        pos = i;
      }
    }
    if (pos < this.result.title.length) {
      context.fillText(
        this.result.title.slice(pos, this.result.title.length),
        20,
        350 + 15 * row
      );
    }
    context.restore();
    // 拿到图片的宽高
    wx.getImageInfo({
      src: this.result.mainImgUrl, //图片的路径，可以是相对路径，临时文件路径，存储文件路径，网络图片路径,
      complete: res => {
        console.log("res...", res);
        let rx, ry, rw, rh;
        if (res.width / res.height > 220 / 260) {
          ry = 0;
          rh = res.height;
          rw = res.height / 260 * 220;
          rx = (res.width - rw) / 2;
        } else {
          rx = 0;
          rw = res.width;
          rh = res.height / 220 * 260;
          ry = (res.height - rh) / 2;
        }
        context.drawImage(
          this.result.mainImgUrl,
          0,
          0,
          res.width,
          res.height,
          50,
          80,
          220,
          260
        );
        context.draw(true, () => {
          // 生成图片
          wx.canvasToTempFilePath({
            canvasId: "canvas",
            quality: 1,
            fileType: "jpg",
            complete: res => {
              console.log("tmpFile...", res);
              // 预览一下
              wx.previewImage({
                urls: [res.tempFilePath] //需要预览的图片链接列表,
              });
              // 保存到本地
            }
          });
        });
      }
    });
    // 绘制二维码
    context.save();
    context.setFontSize(15);
    context.fillText("长按识别二维码访问", 20, 480);
    context.restore();
    context.drawImage(qrCode, 0, 0, 1000, 1000, 200, 400, 90, 90);
    // 绘制商品价格
    context.save();
    context.setFontSize(10);
    context.setFillStyle("#ff0000");
    context.fillText("￥", 20, 450);
    context.setFontSize(18);
    context.fillText(this.result.salesPrice, 30, 450);
    context.setFontSize(10);
    context.setFillStyle("#999");
    // this.result.marketPrice = '88888.888888';
    context.fillText(
      `￥${this.result.marketPrice}`,
      155 - context.measureText(`￥${this.result.marketPrice}`).width,
      450
    );
    context.restore();
    context.draw();
  }
};
</script>


<style lang="scss" scoped>
canvas {
  width: 100%;
  border: 1px solid #000;
}
</style>