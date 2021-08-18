const result_show = document.getElementById('calc24_result');
const goal_elem = document.getElementsByName('goal')[0];
const num_elem = document.getElementsByName('num[]');
document.getElementById('form_24game_solver').onsubmit = function(e) {
	let nums=[];
	for(let i=0; i<num_elem.length; i++){
		let value=Number(num_elem[i].value);
		if(value){
			nums.push(value);
		}
	}
	var goal = goal_elem.value;
	result_show.innerHTML = '';

	if (isNaN(goal) || goal < 0 || goal > 99 || !goal) {
		goal_elem.value = 24;
		result_show.innerHTML = '';
		window.alert('Goal must between 0 and 99.');
		return false;
	}
	try {
		var result = solve24game(nums, Number(goal));
		if (result.length == 0) {
			result_show.innerHTML = 'No Answer.';
		} else {
			for (let item of result) {
				result_show.innerHTML += item + ' = ' + Number(goal) + '<br/>';
			}
		}
	} catch(e) {
		console.error(e);
		result_show.innerHTML = '';
		alert(e.message);
	}
	return false;
}