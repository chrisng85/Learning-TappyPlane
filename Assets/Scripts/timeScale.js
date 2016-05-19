#pragma strict

var spritePlay : Sprite;
var spritePause : Sprite;
var btnPausePlay : Image;

var oldSpeed = 0.0;

function Start () {

}

function Update () {

}

function onPause() {
  if (Time.timeScale != 0) {
    oldSpeed = Time.timeScale;
    Time.timeScale = 0.0;
    btnPausePlay.sprite = spritePlay;
  } else {
    Time.timeScale = oldSpeed;
    btnPausePlay.sprite = spritePause;
  } 
}

function onFast() {
  if (Time.timeScale != 0) {
    Time.timeScale = Time.timeScale * 2;
  }
}

function onSlow() {
  if (Time.timeScale != 0) {
    Time.timeScale = Time.timeScale / 2;
  }
}