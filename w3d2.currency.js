var fixerEndpoint = "http://data.fixer.io/api/latest?access_key=6f9a7be458e0c8a102ca8c6a903b5c40";


// function convertCurrency(event) {
//   if ('type' in event.target && event.target.type === 'button') {
//     // console.log('handle currency conversion here');
//   }
// }

document.body.addEventListener('click', convertCurrency);

function convertCurrency() {
	$('.btn').on('click', function(e) {
		e.preventDefault();
		$.get(fixerEndpoint, function(response) {
			var rate = response["rates"][e.target.value];
			let fieldInput = $('#fieldInput').val();
			let output = Math.floor(fieldInput * rate).toFixed(2);
			$('#output_amount').text(output);
			$('#output_currency').text(e.target.value);
		})
	});
}

convertCurrency();