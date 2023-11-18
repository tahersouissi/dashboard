
import multiparty from 'multiparty';
import { resolve } from 'styled-jsx/css';
export default async function handle(req,res){

    const form = new multiparty.Form();
    const {fields,files}=await  new Promise((resolve,reject)=>{
        form.parse(req,(err,fields,files)=>{
            if(err) throw err;
            resolve({fields,files});
    });
    } );

    console.log('length:',files);
    
    res.json('ok');

}

export const config = {
    api : {bodyParser : false},
};