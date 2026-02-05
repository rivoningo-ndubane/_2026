const messages = [
    `I hope you are doing well ... ... ... <br>
    theres something i would like to say or ask.`,

    `I know things haven't been great between us lately.<br>
    We have been fighting because of small little things `,

    `Deep down though i believe we will be ok.<br>
    this is my biggest hope honestly💐.<br>
    I want to tell you that I love you<span>❤</span> and i really do.`,

    `You are someone i want to be with always whether we strong,<br>
    weak, angry at each other or  happy and whether we outside, <br>
    or inside, even in your messy room or mine.`,

    `And i hope you feel the same, especially since i've been <br>
    annoying you a lot lately😟. Bear with me please and lets tackle<br>
    this year with open minds<span>❤</span> ... ... ...`,

    `This request is a symbol of my hope for our relationship<br>
    So ... ... ... WILL YOU BE MY VALENTINE?💐`,
];

// Get references to the buttons
const prev = document.getElementById("prev");
const next = document.getElementById("next");

// Prevent going back from the get go
prev.disabled = true;

// Track certain web details
let webDetails = {
    count: 0,
    lightness: 10,
    saturation: 0,
};

// Event handlers
// Next button
next.addEventListener('click', (e) => {
    e.preventDefault();

    // Update web details
    webDetails.count++;
    webDetails.saturation += 10;
    webDetails.lightness += 7.5;

    // At the end buttons
    const yes = document.getElementById("yes");
    const or = document.getElementById("or");
    const no = document.getElementById("no");

     // Text content
    const paraText = document.querySelector(".paraText");
    paraText.innerHTML = messages[webDetails.count];

    // Styling
    const body = document.querySelector("body");
    body.style.cssText = 
    `background-color: hsl(0, ${webDetails.saturation}%, ${webDetails.lightness}%);`;

    if(webDetails.count+1 >= messages.length){
        next.disabled = true;

        yes.textContent = "YES";
        or.textContent = "or";
        no.textContent = "NO";

        // event handlers
        yes.addEventListener('click', (e) => {
            if (webDetails.count+1 < messages.length){
                return;
            }

            paraText.innerHTML = `Bold choice but Congratulations, you are now My Valentine.<br>
                                  Im happy you chose yes<span>❤</span>😊.<br>
                                (Screenshot this and send to me)`;
            
            yes.textContent = "";
            or.textContent = "";
            no.textContent = "";

            prev.disabled = true;
        })

        no.addEventListener('click', (e) => {
            if (webDetails.count+1 < messages.length){
                return;
            }

            paraText.innerText = `Ouch, that hurts baby😓🥀.
                                (Screenshot this and send to me)`;
            
            yes.textContent = "";
            or.textContent = "";
            no.textContent = "";

            // Styling
            const body = document.querySelector("body");
            body.style.cssText = 
            `background-color: hsl(0, 0%, 10%);`;

            prev.disabled = true;
        })
    }
    else {
        prev.disabled = false;
    }
})

// Previous button
prev.addEventListener('click', (e) => {
    e.preventDefault();

    // Update web details
    webDetails.count--;
    webDetails.saturation -= 10;
    webDetails.lightness -= 7.5;

    // At the end buttons
    const yes = document.getElementById("yes");
    const or = document.getElementById("or");
    const no = document.getElementById("no");

    if(webDetails.count <= 0){
        prev.disabled = true;
    }
    else {
        next.disabled = false;
        yes.textContent = "";
        or.textContent = "";
        no.textContent = "";
    }

    // Text content
    const paraText = document.querySelector(".paraText");
    paraText.innerHTML = messages[webDetails.count];

    // Styling
    const body = document.querySelector("body");
    body.style.cssText = 
    `background-color: hsl(0, ${webDetails.saturation}%, ${webDetails.lightness}%);`;
})
