'use strict'



module.exports = {

	fizzBuzz: function(num){

		if(num % 15 == 0){

			return "FizzBuzz";

		}

		else if(num % 5 == 0){

			return "Buzz";

		}

		else if(num % 3 == 0){

			return "Fiz";

		}

		else{

			return num;

		}

	} 

}