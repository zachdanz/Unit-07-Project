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
//             Autocomplete           //
//====================================//

// var input = document.getElementById("userField");
// new Awesomplete(input, {
//     list = [
//         "Victoria Chambers",
//         "Dale Byrd",
//         "Dawn Wood",
//         "Dan Oliver",
//         "Stephen Langton",
//         "Kerina McCarthy",
//         "Zachary Danz",
//         "Alec Danz",
//         "Jake Mizell",
//         "Mark Gold",
//         "Clyde Compton",
//         "Garrett Evan Anderson",
//         "Cameron Denise Chafin",
//         "Gwendolyn Marie",
//         "Nurtac Turkeli",
//         "Jacey Logan",
//         "Alonso Ayers",
//         "Kyra Cochran",
//         "Donovan Mcdowell",
//         "Brycen Mcguire",
//         "Kyan Pratt",
//         "Shyla Barron",
//         "Cassidy Flores",
//         "Elle Carroll",
//         "Jordan Sherman",
//         "Owen Ortega",
//         "Sabrina Jones",
//         "Quinn Osborne",
//         "Kayden Salinas",
//         "Lea Shea",
//         "Macey Erickson",
//         "Mathew Mckay",
//         "Cheyanne Dudley",
//         "Aubrie Keller",
//         "Marcel Stephenson",
//         "Mckenzie Gould",
//         "Kylee Sosa",
//         "Zackary Brown",
//         "Jasiah Matthews",
//         "Roselyn Joyce",
//         "Baylee Mckee",
//         "Chasity Roberts",
//         "Alissa Copeland",
//         "Halle Pena",
//         "Rosemary Soto",
//         "Jovani Ferguson",
//         "Alexander Green",
//         "Janelle Hawkins",
//         "Shyann Kerr",
//         "Levi Solomon",
//         "Trevin Valentine",
//         "Nataly Rivers",
//         "Mckenzie Keller",
//         "Angel Arnold",
//         "Daisy Anderson",
//         "Kaylee Calderon",
//         "Alisha Bonilla",
//         "June Bauer",
//         "Aldo Clements",
//         "Anton Ortiz",
//         "Conrad Snow",
//         "Ali Miller",
//         "Mckenna Hull",
//         "Trevin Hall",
//         "Angelique Barr"
//                      ]});

// Notifications //