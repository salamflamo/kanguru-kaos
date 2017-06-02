$(document).ready(function(){
		$('#try').click(function(){
			var string = $('.str').val();
			load('../backend-php/Crud.php');
			});
		$('#tbl-dekrip').click(function(){
			var string = $('.str').val();
			load('../backend-php/Crud.php?str='+string);
			});
















});
