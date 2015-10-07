define('App', ['jquery', 'maskloader'], function($){



	$('#bt-body').click(function(){
		var maskloader = $('body').maskLoader();
		
		setTimeout(function(){
			maskloader.destroy();
		},3000);
	});

	$('#bt-panel').click(function(){
		var maskloader = $('.panel-info').first().maskLoader();
		
		setTimeout(function(){
			maskloader.destroy();
		},3000);
	});

	$('#bt-formgroup').click(function(){
		var maskloader = $('.form-group').first().maskLoader();
		
		setTimeout(function(){
			maskloader.destroy();
		},3000);
	});

	

});