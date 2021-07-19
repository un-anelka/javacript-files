// console.log("start")

// setTimeout((timeout)=>{
// console.log("We are in time out")
// }
// ,3000)
 
// const items=[1,2,3,4,5,6]

// items.forEach((item)=>{
//     console.log(item)
// })

// console.log("End")

console.log("Begin")


function userLogin(email, password, callback){
    setTimeout((timeout)=>{
        console.log("Now we have the data");
        
        callback ({User_email: email, user_password:password, hello: "Hello dear UN"})
        
    },5000);
}

function getUserVideos(email, callback){
    setTimeout((timeout)=>{
        callback(["video1","video2","video3"]);
    },1000);
}

function VideoDetails(video, callback){
    setTimeout((timeout)=>{
        callback(["Title of the video"]);
    },1000);
}
    
    


const user=userLogin("un@GMAIL.FR",123456, (user)=>{
    console.log(user.User_email);
    getUserVideos(user.user_email, (videos)=>{
        console.log(videos)
    });
    VideoDetails(user.videos, (title=>{
        console.log(title);
    }))
//     getUserVideos(user, (video)=>{
//         console.log(video[2])
//     })
});

console.log("Finish")