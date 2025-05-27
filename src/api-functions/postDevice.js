const postDevice = async (device) => {
    

    try{
        const res = await fetch(`/api/devices` , {
            method: 'POST' , 
            headers : {
                'Content-Type' : 'application/json'
            } ,
            body : JSON.stringify(device)
        })

        console.log(res);
        

        return res
        
    }catch (err) {
        console.log("Erro =>" , err);
        return false
    }

    

}

export default postDevice