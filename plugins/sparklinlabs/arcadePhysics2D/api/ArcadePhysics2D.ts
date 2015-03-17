module Sup {
  export module ArcadePhysics2D {
    export function getAllBodies() { return SupEngine.ArcadePhysics2D.allBodies }
    export function setGravity( gravity ) {
      SupEngine.ArcadePhysics2D.gravity.set( gravity.x, gravity.y, 0 );
    }
    export function intersects( body1, body2 ) {
      return SupEngine.ArcadePhysics2D.intersects( body1.__inner, body2.__inner );
    }
    export function collides( body1, body2 ) {
      var bodies = [];
      if ( Array.isArray( body2 ) ) {
        body2.forEach( (body) => {
          bodies.push( body.__inner );
          })
        }
      else {
        bodies.push( body2.__inner );
      }
      return SupEngine.ArcadePhysics2D.collides( body1.__inner, bodies);
    }
  }
}
