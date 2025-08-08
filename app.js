// const video1 =document.getElementById('projectVideo1');
// const video2 =document.getElementById('projectVideo2');
// const video3 =document.getElementById('projectVideo3');
// const hoverSign =document.querySelector(".hover-sign");

// const videoList = [video1, video2, video3];
// if (Array.isArray(videoList)){
// videoList.forEach(function(video){
//     video.addEventListener('mouseover',function(){
//         video.play();
//         hoverSign.classList.add("active")
//     })
//     video.addEventListener('mouseout',function(){
//         video.pause()
//         hoverSign.classList.remove("active")
//     })

// })}



function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "vijaygdhs@gmail.com",
        Password : "CA93E3D4B654D7AB89B568CACF0A30D7EA6F",
        To : 'aananthi9585@gmail.com',
        From : document.getElementById("email").value,
        Subject : "new contact enquiry",
        Body : "Name :" +document.getElementById("name").value
        + "Email :" +document.getElementById("email").value
        + "Message :" +document.getElementById("message").value
    }).then(
  message => alert("Message sent Succesfully")
);

}