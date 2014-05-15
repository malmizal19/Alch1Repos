<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
	<title>Home</title>
<script type="text/javascript" src="/res/blog/bbs/ckeditor/ckeditor.js"></script>

</head>

<body>
<form action="/blog/bbs/BbsAdd" method="post">
  <textarea class="pContent" id="pContent" name="pContent" ></textarea>
</form>
<script type="text/javascript">
	CKEDITOR.replace("pContent");
</script>
</body>
</html>
