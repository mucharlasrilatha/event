function fetchusername(userid)
{
    return new Promise((resolve,reject)=>
    {

    
    const username="cvr";
    setTimeout(()=>
    {
        resolve(username)},100);


    })


}
function fetchuserdetails(username)
{
    return new Promise((resolve,reject)=>
    {
        const userdetails={
            name:"cvr",
            email:"cvr@123"};
           setTimeout(()=>
    {
                resolve(userdetails)},100);
           
    })
}
function displayuserdetails(userdetails)
{
    console.log(userdetails.name);
    console.log(userdetails.email);

}
fetchusername(1)

    .then(response=>{console.log(response);return fetchuserdetails(response)})
    .then(result=>displayuserdetails(result))
    .catch(error=>(console.log(error)))
    

        