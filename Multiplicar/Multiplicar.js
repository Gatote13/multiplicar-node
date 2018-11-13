//requires
const fs = require('fs');


let crearArchivo = ( base,  limite)=>{
    
    return new Promise( (resolve, reject) =>{
        
        
        if(!Number(base)){
            reject(`el valor ${base} no es un numero `);
            return;
        }
        
          if(!Number(limite)){
            reject(`el valor ${limite} no es un numero `);
            return;
        }
            
            
        let data = '';

        for(let i=0;i<=limite;i++){
            data += `${base} * ${i} = ${base*i} \n`;
        }

        fs.writeFile(`Tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
               resolve(`tabla-${base}.txt`);
        });
       
    });
} 


let listarTabla = ( base , limite)=>{
    
    return new Promise( (resolve, reject) =>{
        
        
        if(!Number(base)){
            reject(`el valor ${base} no es un numero `);
            return;
        }
        
         if(!Number(limite)){
            reject(`el valor ${limite} no es un numero `);
            return;
        }
            
            
        let data = '';

        for(let i=0;i<=limite;i++){
            data += `${base} * ${i} = ${base*i} \n`;
        }
        
         resolve(`${data}`);

    });
} 



module.exports =  {
    crearArchivo,
    listarTabla
}

