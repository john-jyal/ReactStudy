<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="root" value="${pageContext.request.contextPath}"/>

<c:if test="${userinfo == null}">
	<script laguage="javascript">
		alert("로그인이 필요한페이지입니다."); 
 		window.location='${root}/';
	</script> 
</c:if>

<c:if test="${userinfo != null }">
<c:if test="${userinfo.userid != 'admin' }">
	<script laguage="javascript">
		alert("권한이 없습니다.");
		window.location='${root}/listNotice';
	</script>
</c:if>
<!DOCTYPE html>
<html lang="ko">
<head>
  <title>공지사항 작성</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="../../resources/assets/css/main.css" />
  <script type="text/javascript">
  function writeNotice() {
	if(document.getElementById("subject").value == "") {
		alert("제목 입력!!!!");
		return;
	} else if(document.getElementById("content").value == "") {
		alert("내용 입력!!!!");
		return;
	} else {
	  	document.getElementById("writeform").action = "${root}/writeNotice";
	  	document.getElementById("writeform").submit();
	}
  }
  
  function list(){
	  location.href="/listNotice";
  }
  </script>
  <style type="text/css">
  </style>
</head>
<body>
<%@ include file="../header.jsp" %>
<section id=banner></section>
<div class="container" align="center">
			<div class="col-lg-8" align="right">
			<strong>${userinfo.username}(${userinfo.userid})</strong>님 환영합니다.
			<a href="${root}/user.do?act=logout">로그아웃</a>
			<a href="${root}/user.do?act=info">회원정보</a>
			</div>

	<div class="col-lg-6" align="center">
	<br>
		<h2>공지사항 작성</h2>
		<form id="writeform" method="post" action="">
		<input type="hidden" name="act" id="act" value="writenotice">
		<input type="hidden" name="userid" id="userid" value="${userinfo.userid}">
			<div class="form-group" align="left">
				<label for="subject" style="color: #6cc091; text-shadow: 0 0 2.8px white">제목:</label>
				<input type="text" class="form-control" id="subject" name="subject">
			</div>
			<div class="form-group" align="left">
				<label for="content" style="color: #6cc091; text-shadow: 0 0 2.8px white">내용:</label>
				<textarea class="form-control" rows="15" id="content" name="content"></textarea>
			</div>
			<button type="button" onclick="javascript:writeNotice();">글 작성</button>
			<button type="button" onclick="javascript:list();">취소</button>
<!-- 			<button type="reset" >초기화</button> -->
		</form>
	</div>
</div>
<%@ include file="../footer.jsp" %>
</body>
</html>
</c:if>