var questionNums = [
	{
		question: '1) I prefer a Pokemon that is cute.',
		questNumber: 1
	}, 
	{
		question: '2) I like a Pokemon that fights.',
		questNumber: 2

	},
	{
		question: '3) My idea of a perfect day is sleeping and watching movies all day.',
		questNumber: 3
	},
	{
		question: '4) In my spare time, I like to travel and explore.',
		questNumber: 4

	},
	{
		question: '5) Loyalty is important to me.',
		questNumber: 5

	},
	{
		question: '6) I enjoy playing Pokemon Go.',
		questNumber: 6

	},
	{
		question: '7) I am a visual learner.',
		questNumber: 7

	},
	{
		question: '8) I am an early bird and go to bed early.',
		questNumber: 8

	},
	{
		question: '9) I played Pokemon as a child and even play now!',
		questNumber: 9

	},
	{
		question: '10) I enjoy listening to music.',
		questNumber: 10

	}
]

var values = [
	{
		value: '1',
		choice: '1 (Strongly Disagree)'
	},
	{
		value: '2',
		choice: '2'
	},
	{
		value: '3',
		choice: '3'
	},	{
		value: '4',
		choice: '4'
	},	{
		value: '5',
		choice: '5 (Strongly Agree)'
	}
];

function questions(num) {
	var newFieldset;

	for (var i = 0; i < num; i++) {
		newFieldset = 'questNumber' + questionNums[i].questNumber
		var fieldset = $('<fieldset>').addClass('legacy-form-row').attr({
			'id': newFieldset
		})
		var legend = $('<legend>').addClass('questions').text(questionNums[i].question);
		$('form').append(fieldset);
		$('#' + newFieldset).append(legend);	

		for (var j = 0; j < values.length; j++) {
			var input = $('<input>').attr({
				'id': 'pref-' + questionNums[i].questNumber + '-' + values[j].value,
				'name': 'quest[' + questionNums[i].questNumber +']',
				'type': 'radio',
				'value': values[j].value
			})
			var label = $('<label>').addClass('radio-label').attr({
				'for': 'pref-' + questionNums[i].questNumber + '-' + values[j].value 
			})
			label.text(values[j].choice)
			$('#' + newFieldset).append(input, label)
		}
	}
	var button = $('<button>').attr('class', 'legacy-form-row').text('Submit')
	$('.speaker-form').append(button)
}

questions(questionNums.length);

