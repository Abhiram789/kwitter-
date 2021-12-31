var firebaseConfig = {
  apiKey: "AIzaSyBiTrArUsaIINbj5g-RNYyL-QRpMG8g66U",
  authDomain: "c-93-cf4d8.firebaseapp.com",
  databaseURL: "https://c-93-cf4d8-default-rtdb.firebaseio.com",
  projectId: "c-93-cf4d8",
  storageBucket: "c-93-cf4d8.appspot.com",
  messagingSenderId: "317375688547",
  appId: "1:317375688547:web:b2931032a7bf9ca3636d56",
};


user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
  Room_names = childKey;
  console.log("Room Name - " + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
});
});

}

getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "kwitter.html";
}