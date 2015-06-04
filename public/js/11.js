function distance(a,b) {
  var d;

  var x1 = a.x;
  var y1 = a.y;

  var x2 = b.x;
  var y2 = b.y;

  i = x1 - x2;
  j = y1 - y2;


  d = Math.sqrt(Math.pow(i,2) + Math.pow(j,2));

  return d;

}
