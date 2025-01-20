const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const speakBtn = document.querySelector("#speak");
const time = document.querySelector("#time")
const internet = document.querySelector("#internet")
const turn_on = document.querySelector("#turn_on")
const commandsContainer = document.querySelector(".commands");
const msgs = document.querySelector(".messages")

// create a new chat
function createMSg(who, msg) {
    let newmsg = document.createElement("p")
    newmsg.innerText = msg;
    newmsg.setAttribute("class", who)
    msgs.appendChild(newmsg)
    msgs.scrollTop = msgs.scrollHeight;

    console.log("New message created:", newmsg); 
}

document.querySelector("#start_friday_btn").addEventListener("click", () => {
    Recognition.start()
})

commandsContainer.style.display = "none";

// speech recognition setup
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const Recognition = new SpeechRecognition();

Recognition.continuous = true

// sr start
Recognition.onstart = function () {
    console.log("vr active");
};


let windowsB = [];

// Process the recognized command
Recognition.onresult = function (event) {
    let current = event.resultIndex;
    let transcript = event.results[current][0].transcript;
    transcript = transcript.toLowerCase();
    let userdata = localStorage.getItem("friday_setup")
    createMSg("usermsg", transcript)
    console.log('my words : ${transcript}');


    if (transcript.includes("hello")) {
        readout("hello sir");
    }
    if (transcript.includes("who are you")) {
        readout("This is friday just try me out and see what i can do for you");
    }
    if (transcript.includes("good night")) {
        readout("good night sir");
    }
    if (transcript.includes("how are you")) {
        readout("I am doing well, thank you for asking! How are you doing today? ");
    }
    if (transcript.includes("what can you do")) {
        readout("I can do all sorts of things, but i will try to give you short overview.");
    }
    if (transcript.includes("thank you") || transcript.includes("thankx")) {
        readout("You're welcome! Let me know if you have any other questions.");
    }

    if (transcript.includes("what are your commands")) {
        readout("sir, I folllow the following commands");
        document.querySelector(".commands").style.display = "block";
    } else {
        document.querySelector(".commands").style.display = "none";
    }

    if (transcript.includes("close this")) {
        readout("closed");
        document.querySelector(".commands").style.display = "flex";
        setup.style.display = "none"
    }
    if (transcript.includes("close all tabs")) {
        readout("closing all tabs sir");
        windowsB.forEach((e) => {
            e.close()
        })
    }
    
    if (transcript.includes("open youtube")) {
        readout("opening youtube sir");
        let a = window.open("https://www.youtube.com/");
        windowsB.push(a)
    }
    if (transcript.includes("open google")) {
        readout("opening google sir");
        let a = window.open("https://www.google.com/");
        windowsB.push(a)
    }
    if (transcript.includes("open linkedin")) {
        readout("opening linkedin sir");
        window.open("https://www.linkedin.com/");
    }
    if (transcript.includes("open chrome")) {
        readout("opening chrome sir");
        window.open("https://www.chrome.com/");
    }
    if (transcript.includes("open instagram")) {
        readout("opening instagram sir");
        window.open("https://www.instagram.com/");
    }
    if (transcript.includes("open gmail")) {
        readout("opening gmail sir");
        window.open("https://www.gmail.com/");
    }
    if (transcript.includes("open whatsapp")) {
        readout("opening whatsapp sir");
        window.open("https://www.whatsapp.com/");
    }
    if (transcript.includes("open vscode")) {
        readout("opening vscode sir");
        window.open("https://code.visualstudio.com/");
    }
    if (transcript.includes("open calculator")) {
        readout("opening calculator sir");
        window.open("https://www.bing.com/search?q=calculator&filters=dtbk:%22MCFvdmVydmlldyFvdmVydmlldyFhZDU2N2QyMy03OTY4LTQ4ZjUtYTljOC1lMjM2MDEwMzc1ZTM%3d%22+sid:%22ad567d23-7968-48f5-a9c8-e236010375e3%22+tphint:%22f%22&FORM=DEPNAV");
    }
        if (transcript.includes("open canva")) {
        readout("opening canva sir");
        window.open("https://www.canva.com/?msockid=2be909b0ccd86c3b015b1d96cdb86dab");
    }
    if (transcript.includes("open calender")) {
        readout("opening calender sir");
        window.open("https://calendar.google.com/calendar/u/0/r?pli=1");
    }
    if (transcript.includes("open notepad")) {
        readout("opening notepad sir");
        window.open("https://onlinenotepad.org/notepad");
    }
    if (transcript.includes("open google map ")) {
        readout("opening google map sir");
        window.open("https://www.google.co.in/maps");
    }
    if (transcript.includes("open music player ")||transcript.includes("open music") ) {
        readout("opening music player sir");
        window.open("https://gaana.com/");
    }
    if (transcript.includes("open powerpoint")) {
        readout("opening powerpoint sir");
        window.open("https://www.microsoft.com/en-us/microsoft-365/powerpoint?msockid=2be909b0ccd86c3b015b1d96cdb86dab");
    }
    if (transcript.includes("open ms word")) {
        readout("opening msword sir");
        window.open("https://www.microsoft.com/en-us/microsoft-365/word?ocid=ORSEARCH_Bing&msockid=2be909b0ccd86c3b015b1d96cdb86dab");
    } 
    if (transcript.includes("open ms excel")) {
        readout("open ms excel sir");
        window.open("https://www.microsoft.com/en-in/microsoft-365/excel?msockid=2be909b0ccd86c3b015b1d96cdb86dab");
    }
    if (transcript.includes("open amazon") ) {
        readout("opening amazon sir");
        window.open("https://www.amazon.in/");
    }
    if (transcript.includes("open flipkart ")) {
        readout("opening flipkart sir");
        window.open("https://www.flipkart.com/");
    }
    if (transcript.includes("open contacts ")) {
        readout("opening contacts sir");
        window.open("https://contacts.google.com/");
    }
    if (transcript.includes("open play store ")) {
        readout("opening play store sir");
        window.open("https://play.google.com/store/games?device=windows");
    }
    if (transcript.includes("open photos ") ) {
        readout("opening photos sir");
        window.open("https://photos.google.com/?pli=1");
    }
    if (transcript.includes("open netflix ") ) {
        readout("opening netflix sir");
        window.open("https://www.netflix.com/in/");
    }
    if (transcript.includes("open phonepe ")) {
        readout("opening phonepe sir");
        window.open("https://www.phonepe.com/");
    }
    if (transcript.includes("open paytm ") ) {
        readout("opening paytm sir");
        window.open("https://paytm.com/");
    }
    if (transcript.includes("open google pay")) {
        readout("opening google pay sir");
        window.open("https://pay.google.com/about/");
    } 
    if (transcript.includes("open pocket fm")) {
        readout("opening pocket fm sir");
        window.open("https://pocketfm.com/");
    }
    if (transcript.includes("open snapchat")) {
        readout("opening snapchat sir");
        window.open("https://web.snapchat.com/");
    }
    if (transcript.includes("open truecaller")) {
        readout("opening truecaller sir");
        window.open("https://www.truecaller.com/");
    }
    if (transcript.includes("open telegram") ) {
        readout("opening telegram sir");
        window.open("https://web.telegram.org/a/");
    }
    if (transcript.includes("open game") ) {
        readout("opening game sir");
        window.open("https://poki.com/?msockid=2be909b0ccd86c3b015b1d96cdb86dab");
    }
    if (transcript.includes("open messeges")) {
        readout("opening messeges sir");
        window.open("https://messages.google.com/web/");
    }
    if (transcript.includes("open hotstar")) {
        readout("opening hotstar sir");
        window.open("https://www.hotstar.com/in");
    }
    if (transcript.includes("open spotify")) {
        readout("opening spotify sir");
        window.open("https://open.spotify.com/");
    }
    if (transcript.includes("open zoom")) {
        readout("opening zoom sir");
        window.open("https://app.zoom.us/wc");
    }
    if (transcript.includes("open jio cinema")) {
        readout("opening jio cinema sir");
        window.open("https://www.jiocinema.com/");
    }
    if (transcript.includes("open digi locker")) {
        readout("opening digi locker sir");
        window.open("https://www.digilocker.gov.in/");
    }
    if (transcript.includes("open resume builder")) {
        readout("opening resume builder sir");
        window.open("https://resume.io/?ga_utm_source=bing&utm_medium=ppc&utm_campaign=434120185&utm_adgroup=resume-builder&utm_custom=Resume.io|IN|PS|NB&utm_content=&utm_term=resume%20builder&matchtype=e&device=c&location=156830&msclkid=4fafcc9a03021fe2c818abc8b495e04c");
    }
    if (transcript.includes("open gla 8092")) {
        readout("opening gla 8092 sir");
        window.open("https://glauniversity.in:8092/#");
    }

    // google search
    if (transcript.includes("search for ")) {
        readout("Here's the result");
        let input = transcript.split("");
        input.splice(0, 11);
        input.pop();
        input = input.join("").split("").join("+");
        console.log(input);
        window.open(`https://www.google.com/search?q=${input}`);
    }
    // youtube search 
    if (transcript.includes("play ")) {
        readout("Here's the result");
        let input = transcript.split("");
        input.splice(0, 11);
        input.pop();
        input = input.join("").split(" ").join("+");
        console.log(input);
        window.open(`https://www.youtube.com/results?search_query=${input}`);
    }
    //github commands
    if (transcript.includes("open github")) {
        readout("opening github sir")
        window.open("https://github.com/")
    }

    else{
        readout("Sorry, I didn't understand that.");
    }

};

Recognition.onend = function () {
    console.log("vr deactive");
};

startBtn.addEventListener("click", () => {
    Recognition.start();
})

stopBtn.addEventListener("click", () => {
    Recognition.stop();
})

//friday speech
function readout(message) {
    const speech = new SpeechSynthesisUtterance();
    // different voices
    const allvoices = speechSynthesis.getVoices()
    speech.text = message;
    speech.voice = allvoices[165];
    speech.volume = 1
    window.speechSynthesis.speak(speech);
    console.log("speaking out");
    createMSg("jmsg", message)
}

// Wish you according to time
function wishMe() {
    let day = new Date();
    let hours = day.getHours();
    if (hours >= 0 && hours < 12) {
        readout("Good Morning Sir,How can I assist you?");
    } else if (hours >= 12 && hours < 16) {
        readout("Good Afternoon Sir,How can I assist you?");
    } else {
        readout("Good Evening Sir,How can I assist you?");
    }
}

//Automatically greet the user on page load
window.addEventListener('load', () => {
    wishMe();
});

// time setup
let date = new Date();
let hrs = date.getHours();
let mins = date.getMinutes();
let secs = date.getSeconds();


// friday commands adding
fridayComs.forEach((e) => {
    document.querySelector(".commands").innerHTML += `<p>#${e}</p><br/>`;
});


// time - clock
time.textContent = `${hrs}:${mins}:${secs}`;
setInterval(() => {
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    time.textContent = `${hrs}:${mins}:${secs}`;
}, 1000);

//time setup
function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 24; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    currentTime = strTime
    time.textContent = strTime
}

formatAMPM(date)
setInterval(() => {
    formatAMPM(date)
}, 60000);


// internet setup
navigator.onLine ? (internet.textContent = "online") : (internet.textContent = "offline")

