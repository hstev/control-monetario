$(document).ready(function(){

	if(localStorage && localStorage.getItem('JSON_init'))
	{
		window.location.href = "reports.html";
	}

	// if(localStorage || !localStorage.getItem('user_name'))
	// {
	// 	alert(1);
	// }

	$("#btn_reports").click(function()
	{
		generarReporte();
	});
});

function generarReporte()
{
	var incoming = $("#incoming");
	var outcoming = $("#outcoming");
	var saving = $("#saving");


	if(incoming.val() == "")
	{
		incoming.focus();

		$.confirm({
	    	title: '¡Falta algo!',
		    content: 'Es necesario que ingreses cuanto ganas mensualmente',
		    type: 'orange',
		    typeAnimated: true,
		    buttons: {
		        tryAgain: {
		            text: 'Entendido',
		            action: function(){
		            }
		        }
		    }
		});


		return;
	}

	if(outcoming.val() == "")
	{
		outcoming.focus();
		
		$.confirm({
	    	title: '¡Falta algo!',
		    content: 'Es necesario que ingreses cuanto gastas mensualmente',
		    type: 'orange',
		    typeAnimated: true,
		    buttons: {
		        tryAgain: {
		            text: 'Entendido',
		            action: function(){
		            }
		        }
		    }
		});


		return;
	}

	if(incoming != "" && outcoming != "")
	{
		var parsed_incoming  = parseFloat(incoming.val());
		var parsed_outcoming = parseFloat(outcoming.val());
		var parsed_saving    = parseFloat(saving.val());

		var JSON_init = {incoming:parsed_incoming, outcoming: parsed_outcoming, saving: parsed_saving};

		localStorage.setItem('JSON_init', JSON.stringify(JSON_init));

		window.location.href = 'reports.html';
	}
}

