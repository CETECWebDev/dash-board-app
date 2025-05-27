const postDevice = async (device) => {
    

    try{
        const res = await fetch(`/api/devices` , {
            method: 'POST' , 
            headers : {
                'Content-Type' : 'application/json'
            } ,
            body : JSON.stringify(device)
        })

        if(res.status === 201){
            return ('Device Created')
        }else{
            return ('Something went wrong')
        }


    }catch (err) {
        console.log("Erro =>" , err);
        return false
    }

    

}

export default postDevice