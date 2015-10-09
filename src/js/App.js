define('App', ['jquery', 'maskloader'], function($){



	$('#bt-body').click(function(){
		var maskloader = $('body').maskLoader();
		
		setTimeout(function(){
			maskloader.destroy();
		},3000);
	});

	$('#bt-panel').click(function(){
		var maskloader = $('.panel-info').maskLoader({textAlert:'Rafael'});
		
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
	

	/**
	* Exemplo de handle ajax.
	*/

	$.ajax({
		url:'http://cep.correiocontrol.com.br/82400470.json',
		maskLoaderSettings: {
			element:$('body').first(),
			background:'black',
			opacity:'0.2',
			textAlert:'TEST'
		},
		success:function(data){
			console.log(data);
		}
	});	
	

});