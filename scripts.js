var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";

var dinosaur = "triceratops";

var dinosaurUpperCase = dinosaur.toUpperCase();

console.log(dinosaurUpperCase);

var textVelociraptorReplace = text.replace("Velociraptor", dinosaurUpperCase);

console.log(textVelociraptorReplace); 

console.log(textVelociraptorReplace.length/2);

var halfTextVelociraptorReplace = textVelociraptorReplace.slice(0, text.length/2);

console.log(halfTextVelociraptorReplace.length);

console.log(halfTextVelociraptorReplace);

var text2 = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";

console.log(text2.substr(0, text2.length - 90));
	
var text3 = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";
console.log(text3.replace(' ', ''));
 
