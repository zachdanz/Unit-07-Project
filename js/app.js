//====================================//
//            Alert Banner            //
//====================================//

const alertBanner = document.getElementById("alert");

alertBanner.innerHTML =
`
    <div class="alertBanner">
        <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks
        to complete</p>
        <p class="alertBannerClose">Close</p>
    </div>
`
alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alertBannerClose")){
        $(alertBanner).slideUp(350);
    }
});

//====================================//
//               Messaging            //
//====================================//

const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");
    
// ensure user and message fields are filled out

send.addEventListener('click', () => {
    if (user.value === "" && message.value === "") {
        alert("Please fill out user and message fields before sending");
    } else if (user.value === "" ) {
        alert("Please fill out user field before sending");
    } else if (message.value === "" ) {
        alert("Please fill out message field before sending");
    } else {
        alert(`Message successfully sent to: ${user.value}`);
    }
});


//====================================//
//            Notifications           //
//====================================//

const bellDiv = document.querySelector(".bellDiv");

bellDiv.addEventListener('click', () => {
    const notificationDropdown = document.querySelector(".notificationDropdown");
    function displayNotifications() {
        if(notificationDropdown.style.display === 'none') {
            notificationDropdown.style.display = 'block';
        } else {
            notificationDropdown.style.display = 'none';
        }
    }
    displayNotifications();
});

//====================================//
//            Local Storage           //
//====================================//

// Timezone Select

let timezoneSelect = document.querySelector("#timezone-offset");
let selectOption = timezoneSelect.options[timezoneSelect.selectedIndex];
let lastSelected = localStorage.getItem('select');

if(lastSelected) {
    timezoneSelect.value = lastSelected; 
}

timezoneSelect.onchange = function () {
   lastSelected = timezoneSelect.options[timezoneSelect.selectedIndex].value;
   console.log(lastSelected);
   localStorage.setItem('select', lastSelected);
}

// Toggle Settings

let emailToggle = document.querySelector("#emailNotif");
let publicToggle = document.querySelector("#publicProf");

function save() {	
    let emailToggle = document.querySelector("#emailNotif");
    let publicToggle = document.querySelector("#publicProf");
    localStorage.setItem("checkbox1", emailToggle.checked);	
    localStorage.setItem("checkbox2", publicToggle.checked);
    console.log(localStorage);
}

let saveButton = document.querySelector("#save");

saveButton.addEventListener('click', () => {
   save(); 
});


//for loading
emailToggle.checked = JSON.parse(localStorage.getItem("checkbox1"));
publicToggle.checked = JSON.parse(localStorage.getItem("checkbox2"));