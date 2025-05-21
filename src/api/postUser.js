const postUser = async (user) => {

    console.log(user);
    

    try{
        const res = await fetch(`https://corsproxy.io/?url=http://89.235.119.239/gateway/employees/` , {
            method: 'POST' , 
            headers : {
                'Content-Type' : 'application/json'
            } ,
            body : JSON.stringify(user)
        })

        if(res.status === 201){
            return ('User Created')
        }else{
            return ('Something went wrong')
        }


    }catch (err) {
        console.log("Erro =>" , err);
        return false
    }

    

}

export default postUser