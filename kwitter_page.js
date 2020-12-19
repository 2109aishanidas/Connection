var firebaseConfig = {
      apiKey: "AIzaSyD52Xn2KXSQsunCKPSXgQsQrP9hdD_BSMU",
      authDomain: "social-media-363a3.firebaseapp.com",
      databaseURL: "https://social-media-363a3.firebaseio.com",
      projectId: "social-media-363a3",
      storageBucket: "social-media-363a3.appspot.com",
      messagingSenderId: "583122712972",
      appId: "1:583122712972:web:1d3dae7d6ee2f732f07ea9"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);//YOUR FIREBASE LINKS
user_name=localStorage.getItem("user_name")
room_name=localStorage.getItem("room_name")
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id)
console.log(message_data)
name = message_data['Name']
message = message_data['Message']
like = message_data['like']
name_tag ="<h4>"+name+"<img src='tick.png' class='user_tick'></h4>"
message_tag = "<h4 class= 'message_h4'>"+message+"</h4>"
like_button = "<button class='btn btn-warrning' id="+firebase_message_id+" value ="+like+" onclick ='updateLikes(this.id)'><span class='glyphicon glyphicon-thumbs-up'>like "+like+"</span></button><hr>"
row = name_tag+message_tag+like_button
document.getElementById('output').innerHTML+=row
//End code
      } });  }); }
getData();
function send(){
 message=document.getElementById("message").value
 firebase.database().ref(room_name).push({
      Name : user_name ,
      Message:message,
      like : 0

 })
document.getElementById("message").value=""
   
}
function updateLikes(message_id){
      console.log("clicked on like button -"+message_id)
      button_id=message_id
      likes =document.getElementById(button_id).value
      updated_likes=Number(likes)+1
      console.log(updated_likes)
      firebase.database().ref(room_name).child(message_id).update({
            like:updated_likes})
}
function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")    
      window.location.replace("kwitter.html")
      }