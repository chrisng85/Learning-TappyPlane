#pragma strict

var bgSpeed = 0.5f;

function Start () {
   //var background = GameObject.Find("background");
   //background.velocity = velocity;
}

function Update () {
  var velocity = new Vector2(Time.time * bgSpeed, 0); 
  GetComponent.<Renderer>().material.mainTextureOffset = velocity;
  //aux += new Vector2(bgSpeed *cameraSpeed * Time.deltaTime, 0);
}