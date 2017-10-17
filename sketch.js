function setup() {
  var colorList = ['#ee3368',
                  '#ba1e4b',
                  '#f8c5d7',
                  '#771136',
                  ];
                  
  createCanvas(400,400);
  
  //1
  
  for(var x = 50; x < 500; x+= 100){
  for(var y = 50; y < 500; y+=100){
  
  var index=floor(random()* colorList.length);
  var colorHex= colorList[index];
  noStroke();
  fill(color(colorHex));
  ellipse(x,y,100);
  
  }   
  }  
 
  //2
  for(var x = 0; x < 500; x+= 100){
  for(var y = 0; y < 500; y+=100){
  
  if(x==200 && y==200){
  noStroke();
  fill(0,0,255,85);
  ellipse(x,y,100);
  } 
  else(x!=200 && y!=200)
  
  noStroke();
  fill(22,48,114,90);
  ellipse(x,y,100);  
  
  }  
  }  
 
}  
  

