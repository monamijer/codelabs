let maxFinder = {
	max: 0,
	find: function(numbers){
    let self = this;
	  numbers.forEach(function(element){
		if(element > this.max){
		  this.max = element;
		};
	  }, this);
	}
};
maxFinder.find([2, 1, 0, 3]);
console.log(maxFinder.max);
