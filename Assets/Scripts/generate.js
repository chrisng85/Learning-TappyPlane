#pragma strict

var rocks : GameObject;

function Start () {
  InvokeRepeating("CreateObstacle", 1, 2);
}

function CreateObstacle () {
  Instantiate(rocks);
}

function Update () {
  
}