const posts=[
    {title:"Post One", body:"This is Post one"},
    {title:"Post Two", body:"This is Post two"},
];

const p=function getPosts(){
    setTimeout((timeOut)=>{
        let output="";
        posts.forEach((post,index)=> 
        output+=`<li> ${post.title}</li>`);
        document.body.innerHTML=output
    },1000)
    
};

function createPost(post, callBack){
    setTimeout(()=>{
        posts.push(post);
        callBack();
    },3000);
}

createPost({title:"Post Three", body:"This is post three"},p);


 