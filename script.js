
/* For Chatbot */
let messages = document.getElementById('messages');
let inputchatbot = document.getElementById('inputchatbot');
let btnchat = document.getElementById('btn-chat');

btnchat.addEventListener('click', sendMessage);

function sendMessage(){
    let message = inputchatbot.value;
    inputchatbot.value = "";
    let messagesElements = document.createElement("div");
    messagesElements.innerText = message;
    messagesElements.classList.add("user-message");
    messages.appendChild(messagesElements);

    let botMessages = generateMessages(message);

    setTimeout(function(){
        let botMessagesElements = document.createElement("div");
        botMessagesElements.innerText = botMessages;
        botMessagesElements.classList.add("bot-message");
        messages.appendChild(botMessagesElements);
    }, 1000);
}

function generateMessages(message){
    let responses = {
                        "hi":"Hi,  anong maari ko itulong sayo",
                        "hello":"Hello, ano ang inyo concern",
                        "kamusta kana":"Okay lang ako Ikaw kamusta may nais kaba tanungin o bilhin",
                        "magandang umaga":"Magandang Umaga, gusto mo ba swak sa budget mo",
                        "magandang gabi":"Magandang Gabi, may hinahanap kaba Design",
                        "magandang tanghali":"Magandang Tanghli",
                        "magandang hapon":"Magandang Hapon",
                        "maraming salamat po":"Maraming Salamat din po",
                        "paalam":"Paalam din sayo at Mag ingat ka",
                        "salamat":"Salamat",
                        "maari mo ba ako matulungan":"Oo naman ano ba ang iyong nais na tulong",
                        "gusto ko sana yun swak sa budget":"Sakto ang inyo pinuntahan ng website may mga swak gamit na damit at pants",
                        "may kalidad ba to?":"Oo naman lahat ng mga design dito ay may kalidad",
                        "may brand ba to?":"Sempre lahat ng mga binebenta namin ay may brand",
                        "oo":"Mero kaba saktong May mga swak sa budget at panglasa mo"
    };

    let response = "I'm Sorry, I don't understand.";

    for(let key in responses){
        if(message.toLowerCase().includes(key)){
            response = responses[key];
        }
    }

    return response;

}