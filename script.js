let button = document.querySelector(".btn");
let paragraph = document.querySelector(".para");
let revealMsg = document.querySelector(".reveal-msg");


/* 
1. CREATE A FUNCTION THAT GENERATES A RANDOM NUMBER.
This number will be the index number of the randomly selected element within the given array.
𝗥𝗘𝗠𝗘𝗠𝗕𝗘𝗥!! 𝗜𝗻𝗱𝗲𝘅𝗲𝘀 𝘀𝘁𝗮𝗿𝘁 𝗮𝘁 𝟬, 𝘁𝗵𝗲𝗿𝗲𝗳𝗼𝗿𝗲 𝘁𝗵𝗶𝘀 𝗲𝗾𝘂𝗮𝘁𝗶𝗼𝗻 𝘄𝗶𝗹𝗹 𝗿𝗲𝘁𝘂𝗿𝗻 𝗻𝘂𝗺 - 𝟭 */  
const generateRandomNumber = num => Math.floor(Math.random() * num);


/* 
2. CREATE A FUNCTION THAT STORES THE CONTENT (i.e. the strings).*/
const collectiveWisdom = {
    signInfo: ['star', 'moon', 'sun', 'comet'],
    fortune: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
    advice: ['go out and eat', 'not read this', 'play more', 'trust no one']
};

/* 
3. CREATE AN ARRAY VARIABLE THAT WILL STORE THE OUTPUT */
let personalWisdom = [];

/*
4. ITERATE THROUGH EACH ELEMENT WITHIN EACH PROPERTY OF 𝘸𝘪𝘴𝘥𝘰𝘮𝘉𝘢𝘯𝘬() */
for (let prop in collectiveWisdom) {
    let optionIdx = generateRandomNumber(collectiveWisdom[prop].length);

    switch(prop) {
        case 'signInfo':
            personalWisdom.push(`Your sign info right now is: ${collectiveWisdom[prop][optionIdx].toUpperCase()}\n `);
            break;
        case 'fortune':
            personalWisdom.push(`You are having: ${collectiveWisdom[prop][optionIdx].toUpperCase()}\n `);         
            break;
        case 'advice':
            personalWisdom.push(`You should: ${collectiveWisdom[prop][optionIdx].toUpperCase()}\n.`);
            break;
        default:
            personalWisdom.push(`Not enough info!`);
            break;
    }
};

function formatWisdom(wisdom) {
    let formatted = personalWisdom.join('\n');
    console.log(formatted);
}
formatWisdom(personalWisdom);

button.classList.remove("hide");
paragraph.classList.remove("hide");
revealMsg.classList.add("hide");

button.addEventListener("click", function() {
    button.classList.add("hide");
    paragraph.classList.add("hide");
    revealMsg.classList.remove("hide");
    revealMsg.append(personalWisdom);
})