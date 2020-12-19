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
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
 user_name = localStorage.getItem("user_name")
 document.getElementById("user_name").innerHTML="Welcome "+user_name

function addRoom(){
room_name =document.getElementById("room_name").value
firebase.database().ref("/").child(room_name).update({
      porpose :"adding the room"
})
localStorage.setItem("room_name",room_name)
window.location="kwitter_page.html"

}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey; 
      //Start code
      console.log("Room name -"+Room_names)
        row="<div class= 'room_name' id='"+Room_names+"' onclick='redirectToRoomname(this.id)'>#"+Room_names+"</div>"
        document.getElementById("output").innerHTML+=row
      //End code
      });});}
getData();
function redirectToRoomname(name){
      console.log(name)
      localStorage.setItem("room_name",name)
      window.location="kwitter_page.html"
}
function logout(){
localStorage.removeItem("user_name")
localStorage.removeItem("room_name")    
window.location="kwitter.html"
}