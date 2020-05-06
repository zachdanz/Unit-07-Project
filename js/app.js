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
let lastSelected = localStorage.getItem('timezone');

if(lastSelected) {
    timezoneSelect.value = lastSelected; 
}

// Toggle Settings

const emailToggle = document.querySelector("#emailNotif");
const publicToggle = document.querySelector("#publicProf");

function save() {	
    localStorage.setItem("isSubscribed", emailToggle.checked);	
    localStorage.setItem("isPublic", publicToggle.checked);
    lastSelected = timezoneSelect.options[timezoneSelect.selectedIndex].value;
    localStorage.setItem('timezone', lastSelected);
    console.log(localStorage);
    alert("Preferences Saved.");
}

function cancel() {
    const isSubscribed = localStorage.getItem("isSubscribed") === 'true' ? true : false;
    const isPublic = localStorage.getItem("isPublic") === 'true' ? true : false;
    const timezone = localStorage.getItem("timezone");
    console.log({isSubscribed, isPublic, timezone});
    emailToggle.checked = isSubscribed;
    publicToggle.checked = isPublic;
    timezoneSelect.value = timezone;
    alert("Settings not saved.");
}

// Buttons

const saveButton = document.querySelector("#save");
const cancelButton = document.querySelector("#cancel");

saveButton.addEventListener('click', () => {
   save(); 
});

cancelButton.addEventListener("click", () => {
    cancel();
});

//for loading
emailToggle.checked = JSON.parse(localStorage.getItem("isSubscribed"));
publicToggle.checked = JSON.parse(localStorage.getItem("isPublic"));