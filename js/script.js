function myFirstApp(name, age) {

	alert("Привет, меня зовут " + name + ","+ " мне " + age + " года," + " и это моя первая программа!");

	function showSkills() {
		let skills = [
		"html",
		"css",
		"photoshop"
		]

		for (let i = 0; i < skills.length; i++) {
			document.write(skills[i] + "<br>");
		}
	}

	showSkills();

	function checkAge() {
		if (age > 18) {
			alert("Welcome on the board!")
		} else {
			alert("Sorry, let's meet some later :(")
		}
	}

	checkAge();

	function calcPow(num) {
		console.log(num*num)
	}
	calcPow(4);
}

myFirstApp("Olga", 22)