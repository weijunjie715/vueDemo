<template>
    <div>
      <h1>欢迎登陆首页</h1>
      <form method="post" action="http://127.0.0.1:3001">
        <table>
          <tr><td>账号</td><td><input type="text" name="name" id="name"></td></tr>
          <tr><td>密码</td><td><input type="text" name="password" id="password"></td></tr>
          <tr><td colspan="9">
            <input type="submit" value="AAAA" />
            <input type="button" value="HAHHAHA" id="alertAA"/>
          </td></tr>
        </table>
      </form>
    </div>
</template>

<script>
  import $ from 'jquery'
  $(function () {
    addEventListener("load", function () {
      setTimeout(hideURLbar, 0);
    }, false);

    function hideURLbar() {
      window.scrollTo(0, 1);
    }
    $("#alertAA").click(function () {
      alert("A12345")
    })
  })
    export default {
        name: "IndexPage"
    }
</script>


<style scoped>

</style>
