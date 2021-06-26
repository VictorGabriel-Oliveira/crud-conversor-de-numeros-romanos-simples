const numbersRomans = {
    'i':1,
    'v':5,
    'x':10,
    'l':50,
    'c':100,
    'd':500,
    'm':1000
}


function numbersRomansParse(event){
    let i=0
    let resultadoAtual = numbersRomans[event[i]]
    let resultadoPosterior = numbersRomans[event[i+1]] || 0
    
    for(i; i < event.length -1;i++){

        if(resultadoAtual >= resultadoPosterior){
            resultadoAtual = resultadoAtual + resultadoPosterior
        }else{
            resultadoAtual = resultadoPosterior - resultadoAtual
        }
       
        
       
    }
    
    console.log(resultadoAtual)
    
   

    
    
    
    
    
   
}
