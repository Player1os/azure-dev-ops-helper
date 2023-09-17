<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Personal Site</title>
	</head>
	<body>
		<app-root name="World"></app-root>
		<script src="<?= file_exists('./main.js') ? '.' : 'http://localhost:8000' ?>/main.js" type="module"></script>
	</body>
</html>
