<!DOCTYPE html>
<html>
<head>
	<title>My first Vue app</title>
	<script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
</head>
<body>
<div id="app">
	<?= (message)."
" ?>
</div>
<script>
	var app = new Vue({
		el: '#app',
		data: {
			message: 'Hello Vue!'
		}
	})
</script>
</body>
</html>