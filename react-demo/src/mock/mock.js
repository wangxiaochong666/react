import axios from 'axios'
import axiosMock from 'axios-mock-adapter'

var mock=new axiosMock(axios);
var mockJSON=()=>{
    mock.onGet('/users1').reply(200,{
        user:{name:'zs'}
    })
    mock.onGet('/users2').reply((config)=>{
        return new Promise((resolve,reject)=>{
            resolve([200,{name:'zs'}])
        })
    })
}
export default mockJSON;