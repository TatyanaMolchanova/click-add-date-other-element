document.addEventListener("DOMContentLoaded", () => {
    
	let button = document.querySelectorAll('button')[0];
	console.log(button);

	button.addEventListener('click', function(){
		document.getElementById('demo').innerHTML = Date();
	})

  });

// $(document).ready(function() {
// 	$('button').click(function(){
// 		$('#demo').html(Date());
// 	});

// });
