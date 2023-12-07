const questions = document.querySelectorAll('.question_content');





questions.forEach(question => {

	question.addEventListener('click', function(e) {
		deleteShowClasses();
		deletePlusIcon()

		let parentElement = e.target.parentElement.parentElement;

		parentElement.querySelector('.answer').classList.add('show');
		let minus = parentElement.querySelector('.minus');
		let plus = parentElement.querySelector('.plus');

		plus.style.display = 'none';
		minus.style.display = 'block';
	});

});



function deleteShowClasses() {
	document.querySelectorAll('.answer').forEach(ans => {
		ans.classList.remove('show');
	});

}
function deletePlusIcon() {
	document.querySelectorAll('.plus').forEach(p => {
		p.style.display = 'block';
	})
	document.querySelectorAll('.minus').forEach(mn => {
		mn.style.display = 'none';
	})
}
