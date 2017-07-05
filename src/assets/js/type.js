/**
 * Created by 王仁 on 2017/4/1.
 * 邮箱：
 * 842837175@qq.com
 */

export default {
  data() {
    //当前页面所需绑定的变量放到这里
    return {
      test:'test'
    }
  },
  components: {
    //模版文件导入后在这里初始化

  },
  methods: {
    //所有构建的方法放在这里面

  },
  created() {
    //页面渲染之前要执行的代码放在这里面
    common.test();

    //禁止在当前页面返回上个页面
    history.pushState(null, null, document.URL);
    window.addEventListener('popstate', function() {
      history.pushState(null, null, document.URL);
    });

  },
  mounted() {
    //页面渲染之后要执行的代码放在这里面

  },

}
