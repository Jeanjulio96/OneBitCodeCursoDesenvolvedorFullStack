function slowDown(velocity,printer){
   let deceleration = 20

   while(velocity > 0){
      printer(velocity)
      velocity -= deceleration
   }
}

alert("Nave parada. As comportas podem ser abertas.")

let spaceShipVelocity = 150

slowDown(spaceShipVelocity, function(velocity){
   console.log("velocidade atual " + velocity)
})

























