var firebaseConfig = {
      apiKey: "AIzaSyCZpmyMfahaDEv9RgsuFfxmlpSPEnzJbRI",
      authDomain: "kiwtter-74659.firebaseapp.com",
      databaseURL: "https://kiwtter-74659-default-rtdb.firebaseio.com",
      projectId: "kiwtter-74659",
      storageBucket: "kiwtter-74659.appspot.com",
      messagingSenderId: "78720350771",
      appId: "1:78720350771:web:073f3d0d8c1a0a8a97c146"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("Room Name " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='moveto(this.id)'>#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;

            });
      });
}
getData();

user_name = localStorage.getItem("user_name");
document.getElementById("header").innerHTML = "Welcome" + user_name + "!";

function add_room() {
      user_room = document.getElementById("room_input").value;
      localStorage.setItem("room_input", user_room);

      firebase.database().ref("/").child(user_room).update({
            purpose: "add room name"



      });


}
function moveto(Room){
console.log(Room);
localStorage.setItem("Room_name",Room);
window.location="kwitter_page.html";


}

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("Room_name");
window.location("index.html");


}