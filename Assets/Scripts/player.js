#pragma strict
import UnityEngine.UI;

var jumpForce = new Vector2(0, 300);
static var score : int;
var highScore : int = 0; 

var scoreStr: Text;

function Start () {
  player.score = 0;
  if (PlayerPrefs.GetInt("highScore") != null) {
  	highScore = PlayerPrefs.GetInt("highScore");
  }
}

function Update () {
  var rigidbody2D = GetComponent(Rigidbody2D);
  var screenPosition = Camera.main.WorldToScreenPoint(transform.position);
  if (screenPosition.y > Screen.height || screenPosition.y < 0) {
    Die();
  }
  
  //touch input
  if(Input.touchCount > 0){
    if (Input.GetTouch(0).phase == TouchPhase.Began) {
     //flap();
    }  
  }
  
  if (Input.GetKeyUp("space")) {
    flap();
  }  

}

function flap() {
  if (Time.timeScale != 0) {
    GetComponent.<Rigidbody2D>().velocity = Vector2.zero;
    GetComponent.<Rigidbody2D>().AddForce(jumpForce);
  }
}

function OnCollisionEnter2D(other) {
  Die();
}

function Die() {
  if (player.score > highScore) {
    highScore = player.score;
    PlayerPrefs.SetInt("highScore",highScore);
  }
  Application.LoadLevel(Application.loadedLevel);
}

function OnGUI () {
  if (highScore > 0) {
    scoreStr.text = "Score : " + player.score + "   Best score: " + highScore;
  } else {
    scoreStr.text = "Score : " + player.score;
  }
  
  //debug
  
  var screenPosition = Camera.main.WorldToScreenPoint(transform.position);
  GUI.color = Color.red;
  GUILayout.Label("speed : " + Time.timeScale);
}