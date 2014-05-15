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
	BbsRst Hello world!  
</h1>

<% 
String text = request.getParameter("pContent"); 
out.println(text);
%>
</body>
</html>
