// 1.Brazilian Vehicles and Prices

let vehicle=document.getElementById('vehicle')
async function vehicles(){
    try{
        var url_data =await fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas')
    var res= await url_data.json()
     console.log(res);
    res.forEach((ele)=>{
        let data =document.createElement('div')
        data.innerText=`Name:${ele.nome}`
        vehicle.appendChild(data) 
        let code_data =document.createElement('div')
        code_data.innerText=`Code:${ele.codigo}`
        vehicle.appendChild(code_data)
    })
}
    
catch{
    console.log(err);
    
    }   
}
    vehicles()