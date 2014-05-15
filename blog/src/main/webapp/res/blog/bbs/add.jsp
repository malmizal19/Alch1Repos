<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="/blog/bbs/ckeditor/ckeditor.js"></script>
</head>
<body>
<img  src="/blog/1.jpg">
<form action="/lst.jsp" method="post">
  <textarea class="content" id="content" name="content" ></textarea>
</form>
<script type="text/javascript">
	CKEDITOR.replace("content");
</script>

<!-- 
 <script type="text/javascript">
  var editor = CKEDITOR.replace('content',{
   ckeditor에서 custom configuration 파일을 사용하려면 webroot까지 써줘야한다.
   customConfig: '/ckeditor/ckwriter.js'}
  );  
 </script>﻿ 
 -->
 
</body>
</html>