<template>
  <div class="wrapper">
    <Button @click="handleClickOnEnterCHK">OnEnterCHK不传参</Button>
    <Button @click="handleClickOnLogInt">OnLogInt 数字</Button>
    <Button @click="handleClickOnLogString">OnLogString 字符串</Button>
    <Button @click="handleClickOnLogObject">OnLogObject 对象</Button>
    
    <div class="wrapper">
      <iframe ref="unityIframe" id="unityDom" height="100%" width="100%" src="/unity3D/unity.html" frameborder="0"></iframe>
    </div>
  </div>

</template>
<script>

export default {
  
  data() {
    return {

    }

  },
  mounted() {
    window.addEventListener('message', this.getUnityData, false);

    //Unity调用vue事件
    this.$refs.unityIframe.contentWindow.OnClickNone = function () {
      alert(666)
    }
    //Unity调用vue事件
    this.$refs.unityIframe.contentWindow.OnClickParam = function (msg) {
      alert(msg)
    }
  },
  methods: {
    //获取Unity的数据
    getUnityData(e) {
      // console.log(666, e.data)
      // debugger
    },
    //发送给unity的消息
    handleClick() {
      // 直接调用iframe里的函数方法
      // this.$refs.unityIframe.contentWindow.subFunction(122344)

      //监听形式 
      // this.$refs.unityIframe.contentWindow.postMessage('6666666666','*')

    },
    //事件1
    handleClickOnEnterCHK() {
      //获取iframe属性
      this.$refs.unityIframe.contentWindow.myGameInstance.SendMessage('Interaction', 'OnEnterCHK')
    },
    //事件2
    handleClickOnLogInt() {
      //获取iframe属性
      this.$refs.unityIframe.contentWindow.myGameInstance.SendMessage('Interaction', 'OnLogInt', 5);
    },
    //事件3
    handleClickOnLogString() {
      //获取iframe属性
      this.$refs.unityIframe.contentWindow.myGameInstance.SendMessage('Interaction', 'OnLogString', 'LogStr');
    },
    //事件4
    handleClickOnLogObject() {
      //获取iframe属性
      this.$refs.unityIframe.contentWindow.myGameInstance.SendMessage('Interaction', 'OnLogObject', JSON.stringify({ name: 1, age: 2 }))
    }

  },
  beforeDestroy() { // 在页面销毁前去掉监听，防止内存泄露
    window.removeEventListener('message')
  },
  created() {

  },
}
</script>
 
<style >
.wrapper {
  width: 100%;
  height: 100%;
  position: relative;


}

  #unityDom {
    position: absolute;
    left: 0;
    border: 1px solid #ccc;
  }
</style>