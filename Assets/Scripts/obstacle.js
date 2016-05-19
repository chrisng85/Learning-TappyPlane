#pragma strict

var velocity = new Vector2(-4, 0);
var pass = false;


function Start () {
  var rigidbody2D = GetComponent(Rigidbody2D);
  rigidbody2D.velocity = velocity;

  transform.position = new Vector3(transform.position.x, transform.position.y - Random.Range(-2.0,2.0), transform.position.z);
  pass = false;
}

function Update () {
  if (transform.position.x < -8.25 && !pass) {
    pass = true;
    player.score++;
  }

  if (transform.position.x < -12) {
    Destroy(this.gameObject);
  }
}