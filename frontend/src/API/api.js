import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3001/'
})
export const assortimentAPI = {
    async GetAssortiment() //changingIsFetching, setAssortiment - я незнаю зачем эти параметры
    {
        let response = await instance.get("assortiment") ;        
        return response.data;
        
    }
}

export const imgWorkAPI = {
    async GetImgWork() //changingIsFetching, setAssortiment - я незнаю зачем эти параметры
    {
        let response = await instance.get("work/img") ;        
        return response.data;
        
    }
}

export const gradAPI = {
    async PutPhoto(photo) //changingIsFetching, setAssortiment - я незнаю зачем эти параметры
    {
        const formData = new FormData();
        formData.append("file", photo);
       
        return await instance.post("grad/Add", formData, {   
            headers:{
                'Content-Type' : "multipart/form-data"  //Content-Type: 'multipart/form-data'
            }
        }) ;  
    }
}

// // оформляем отправку данных
// var form = new FormData();
// form.append("name", file.name);
// form.append("size", file.size);
// form.append("file", file);



// export const gradAPI = {
//     async PutPhoto(photo) //changingIsFetching, setAssortiment - я незнаю зачем эти параметры
//     {
//         const article = { title: 'React POST Request Example' };
      
//         let response = await instance.post("grad/Add", article) ; 
       
        
//     }
// }
