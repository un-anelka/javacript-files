const posts=[
    {title:"Post One", body:"This is Post one"},
    {title:"Post Two", body:"This is Post two"},
];

function getPosts(){
    setTimeout((timeOut)=>{
        let output="";
        posts.forEach((post,index)=> 
        output+=`<li> ${post.title}</li>`);
        document.querySelector('div').innerHTML=output
    },1000)
    
};

function createPost(post){
    return new Promise((resolve, reject)=>{
        setTimeout((timeOut)=>{
            posts.push(post)
            const error=false;
            if (!error){
                resolve();
            }
            else{
                reject("Error: Something went wrong");
            }
        }, 3000)
    })
}

// createPost({title: "Post Three", body:"This is post three"})
//     .then(getPosts)
//     .catch(err=>console.log(err));//err can be replaced by something else

     // Async/await
     async function init(){
        await createPost({title: "Post Three", body:"This is post three"});
        getPosts()
    }

    init()

    //Promise.all

    // const Promise1=Promise.resolve("Hello world");
    // const Promise2=10;
    // const Promise3=new Promise((resolve, reject)=>setTimeout(resolve, 2000, 'Goodbye'));
    // // const promise4= fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json());

    // Promise.all([Promise1,Promise2,Promise3]).then( (values)=>console.log(values));