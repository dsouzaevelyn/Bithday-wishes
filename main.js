var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
var block_image_object = ""
function new_image()
{
	fabric.Image.fromURL('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pumpitupparty.com%2Fblog%2Fhistory-of-the-happy-birthday-song%2F&psig=AOvVaw14-qMskWpzFnoe5sTA-jry&ust=1641617853873000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPCp-pztnvUCFQAAAAAdAAAAABAD'), function(Img) {
     block_image_object = Img;

     block_image_object.scaleToWidth(700);
     block_image_object.scaleToHeight(510);
     block_image_object.set({
         top:0,
         left:0
     });
     canvas.add(block_image_object);
    });

    
	
}

function playSound(){
	x.play();
}

