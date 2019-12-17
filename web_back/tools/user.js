//使用user.js对项目中与用户操作有关的请求功能进行保存

var user = {
  login: function(option) {
    $.ajax({
      type: "post",
      url: DL,
      data: {
        user_name: option.data.username,
        password: option.data.password
      },
      success: function(res) {
        if (res.code === 200) {
          option.success();
          //   option.fail();
        }
      }
    });
  },
  logout: function(option) {
    $.ajax({
      type: "post",
      url: TC,
      success: function(res) {
        if (res.code === 200) {
          option.success();
        }
      }
    });
  }
};
