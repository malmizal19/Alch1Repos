<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
	<title>Home</title>
</head>

<body>
<form action="/admin/book/BkAdd" method="post">
 	<div>
 		<input type="text" id="pBkId" name="pBkId"/>
 	</div>
 	<div>
 		<input type="text" id="pBkTitle" name="pBkTitle"/>
 	</div>
 	<div>
 		<input type="text" id="pBkAuthNm" name="pBkAuthNm"/>
	</div>
	<div>
		<textarea class="content" id="pBkContent" name="pBkContent" ></textarea>
	</div>
	<div>
		<input type="submit" value="save"/>
	</div>
</form>
</body>
</html>
