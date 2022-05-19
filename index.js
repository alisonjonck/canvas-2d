
(function() {
  const canvas = document.getElementById("myCanvas")
  canvas.width = 300
  canvas.height =  300
  
  const ctx = canvas.getContext("2d")
  const img = new Image()
  img.src = "me.jpg"
  
  ctx.beginPath()
  ctx.moveTo(0,0)
  ctx.lineTo(300,300)
  ctx.stroke()
})()
