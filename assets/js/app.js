function validateUser()
{
	if(localStorage && localStorage.getItem('user_name'))
	{
		$("#user_name").html(localStorage.getItem('user_name'));
	}
}

function mensaje(title, content, type, )
{
	$.confirm({
	    title: 'Mensaje',
	    content: 'asd',
	    type: 'orange',
	    typeAnimated: true,
	    buttons: {
	        tryAgain: {
	            text: 'Entendido',
	            action: function(){
	            }
	        },
	        close: {
                text: 'Cerrar'
            }
	    }
	});
}