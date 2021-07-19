// const promise= new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         // resolve ({user: "ed"});
//         reject(new Error('The user Not logged in'));
//         // console.log("Got the user")
//     },2000);
// })

// promise.then((user)=>{
//     console.log(user)
// }).catch((err)=>{console.log(err.message)})


console.log("Begin")


function userLogin(email, password){

    return new Promise((resolve, reject)=>{
        setTimeout((timeout)=>{
            console.log("Now we have the data");
            
            resolve ({User_email: email, user_password:password, hello: "Hello dear UN"})
            
            
        },5000);
    });
}
     

function getUserVideos(email){
    return new Promise((resolve, reject)=>{
        setTimeout((timeout)=>{
            resolve(["video1","video2","video3"]);
        },1000);
    })
} 


function VideoDetails(video){
    return new Promise((resolve, reject)=>{
        setTimeout((timeout)=>{
            resolve({title:"Title of the video"});
        },1000);
    })
    
}


// // getUserVideos('un@hello.cr')
// // .then (email=>console.log(email))

// userLogin("UN@hello.gb","Password2")
// .then(user=>getUserVideos(user.pemail))
// .then(videos=>VideoDetails(videos[0]))
// .then(details=>console.log(details))

// console.log('Finish')


//Promise.All=> to run two or more promises at the same time

// const Yt=new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("Getting videos from Youtube")
//         resolve({videos: [1,2,3,4,5]})
//     },10000)
// })

// const FB=new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("Getting stuff from Facebook")
//         resolve({user: "name"})
//     },2000)
// })


// Promise.all([Yt,FB])
// .then(results=>{
//     console.log(results)
// })

//async/await

async function displayUSer(){
    try{
    const loggedUser=await userLogin("un","1234567");
    const videos= await getUserVideos(loggedUser.user_email);
    const details= await VideoDetails(videos[0]);
    console.log(details)}

    catch(err){console.log("we could not get the videos")}
};

displayUSer()
