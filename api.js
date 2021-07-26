export const userlogin = async(newlogin) =>{
    const res = await fetch('http://192.168.0.109:4000/signin',{
        method:'POST',
        headers:{
            Accept:"application/json", "Content-Type":"application/json"
        },body:JSON.stringify(newlogin)
    });
    console.log(newlogin)
    return await res.json();
}