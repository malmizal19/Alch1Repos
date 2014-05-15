<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
<head>
	<title>Home</title>
</head>
<body>
<h1>
	Blog Home!
</h1>
<img src="/1.jpg">
<form action="/blog/bbs/BbsLst">
	<input type="submit" value="lst"/>
</form>


<form action="/blog/bbs/BbsAddView">
	<input type="submit" value="add"/>
</form>

</body>
</html>
