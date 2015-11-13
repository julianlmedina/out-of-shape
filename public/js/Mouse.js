/* onMouseMove Listener **/
window.addEventListener( 'mousemove', onMouseMove, false );

/* onMouseDown Listener **/				
window.addEventListener( 'mousedown', onMouseDown, false );

/* addEvent Listener **/
window.addEventListener( 'mouseup', onMouseUp, false );

//http://threejs.org/docs/#Reference/Core/Raycaster

// Create new Mouse instance
var mouse = new Mouse();

/* Prevent default action of onMouseDown. **/
function onMouseDown (event)
{
	event.preventDefault();
	//mouse.UpdateClick
}

/* Prevent default action of onMouseUp. **/
function onMouseUp (event)
{
	event.preventDefault();
	//mouse.UpdateClick
}

/* Prevent default action of onMouseMove. **/
function onMouseMove( event ) {

	// calculate mouse position in normalized device coordinates
	// (-1 to +1) for both components

	mouse.SetPosition(( event.clientX / window.innerWidth ) * 2 - 1, - ( event.clientY / window.innerHeight ) * 2 + 1);

}

/* Mouse function **/
function Mouse()
{
	/* Create new raycaster instance. **/
	var raycaster = new THREE.Raycaster();
	
	/* Create new position instance. **/
	var position = new THREE.Vector2();
	
	/* Set x and y positions. **/
	this.SetPosition = function(givenx, giveny)
	{
		position.x = givenx;
		position.y = giveny;
	}
	
	//this. 
	this.MouseOverObject = function()
	{

		// update the picking ray with the camera and mouse position	
		raycaster.setFromCamera( position, camera );
		var intersects = raycaster.intersectObjects( scene.children, false );

		if(intersects.length>0)
		{
			return intersects[0].object.name;
		}
		else
		{
			return "none";
		}
	}
}
