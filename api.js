const API = "https://api-berserk.herokuapp.com";//https://api-berserk.herokuapp.com/
//http://192.168.1.108:4000
const keyA="productos"
const  keyB="negocio"
export const deleteTask = async (id) => {
  await fetch(`${API}/${id}`, {
    method: "DELETE",
  });
};

export const addCard = async (idp) => {
  const res = await fetch(API, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ipd),
  });
  return await res.json();
};

export const getPro = async (id) => {

  const res = await fetch(`${API}/${keyA}/${id}`, {
    method: "GET",
  });

   const a = await res.json();
   console.log(a)
   return a
};

export const getAllPro = async () => {

    const res = await fetch(`${API}/${keyA}`, {
      method: "GET",
    });
  
    const d = await res.json();
    console.log(d)
    return d
 };
     
  



export const savePro = async (newP) => {
  const res = await fetch(`${API}/${keyA}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newP),
  });
  return await res.json();
};

export const getProID= async (PId) => {
  const res = await fetch(`${API}/${PId}`);
  const b =await res.json();
  console.log(b)
  return b
};

export const updatePro= async (PId, newP) => {
  console.log(PkId, newP)
  const res = await fetch(`${API}/${PId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newP),
  });
  return res;
};




export const getAllResta = async () => {

  const res = await fetch(`${API}/${keyB}`, {
    method: "GET",
  });

  const d = await res.json();
  console.log(d)
  return d
};





