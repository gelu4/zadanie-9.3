var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";

var dinosaur = "triceratops";

var dinosaurUpperCase = dinosaur.toUpperCase();

console.log(dinosaurUpperCase);

var textVelociraptorReplace = text.replace("Velociraptor", dinosaurUpperCase);

console.log(textVelociraptorReplace); 

console.log(textVelociraptorReplace.length/2);

var halfTextVelociraptorReplace = textVelociraptorReplace.slice(0, 72);

console.log(halfTextVelociraptorReplace.length);

console.log(halfTextVelociraptorReplace);
