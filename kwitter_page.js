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
//YOUR FIREBASE LINKS

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        console.log(firebase_message_id);
                        console.log(message_data);
                        var name = message_data['name'];
                        var messages = message_data['message'];
                        var like = message_data['like'];
                        name_tag = "<h4>" + name + " <img class='user_tick' scr='tick.png'></h4>";
                        message_tag = "<h4 class='message_h4'>" + messages + "</h4>";
                        like_button = "<button class='btn btn-success' id=" + firebase_message_id + " vlaue=" + like + " onclick='like(this.id)'>";
                        span = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
                        row = name_tag + message_tag + like_button + span;
                        document.getElementById("output").innerHTML += row;
                        //End code
                  }
            });
      });
}
getData();
username = localStorage.getItem("user_name");
userroom = localStorage.getItem("Room_name");

function like(message_id) {
      console.log(message_id);
      button = message_id;
      likes = document.getElementById(button).value;
      updatelikes = Number(likes) + 1;
      console.log(updatelikes);
      firebase.database().ref(userroom).child(message_id).update({
            like: updatelikes

      });



}

function send() {
      mgs = document.getElementById("input").value;
      firebase.database().ref(userroom).push({
            like: 0,
            message: mgs,
            name: username

      });
      document.getElementById("input").value = "";



}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("Room_name");
      window.location("index.html");


}