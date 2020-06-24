
const users= ["Ada","Greta","Vim","Tim"];


let adminMiddleware={

  adminPost:function(req,res,next){
      
      users.forEach(function(admin){

      if(admin===req.body.nombre){

        console.log(req.body.nombre);
      res.send('Hola ' + req.body.nombre +' bienvenid@ nuevamente');
      
 
     }else{
         res.send('No tienes los privilegios para ingresar')
     }
  });
  
  }
}

module.exports=adminMiddleware;