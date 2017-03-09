

var bufferAvailable = []; // Buffer declaration
const BUFFER_LIMIT = 24; // buffer limit is 24
var spaceAvailable = BUFFER_LIMIT; // declaring space available with initial value set as buffer limit
var itemAvailable = 0; // declaring and initializing items available as 0
var activity = document.getElementById("activity");
var gui = document.getElementById("gui");
var getProducerinput = document.getElementById("producer");
var getConsumerinput = document.getElementById("consumer");
var pInput,cInput;
// click event for submit button.
// getting values from inpur field
document.getElementById("submit").addEventListener("click",function () {
    pInput = parseInt(getProducerinput.value); // getting producer value
    cInput = parseInt(getConsumerinput.value); // getting consumer value
    onclk();
});

//Once started
// function for Producer
function producer() {
    var newProducerMessage = document.createElement("b");
    if (spaceAvailable >= pInput) { // checking Space available is greater than or equal to producer
        for (var i = 0; i < pInput; i++) {
            bufferAvailable.push("item"); // pushing items in to space in buffer.
            var newPizza = document.createElement("li");
            newPizza.className = 'col-xs-2';
            gui.appendChild(newPizza);
        }
        // Notification for
        console.log("Producer pushed" + pInput + "items");

        newProducerMessage.textContent= "Producer pushed " + pInput + " items";
        newProducerMessage.style = "color:green";
        activity.appendChild(newProducerMessage);
        activity.appendChild(document.createElement("br"));

        console.log(bufferAvailable);
        itemAvailable = bufferAvailable.length; // signaling no of items available
        console.log(itemAvailable);
    } else { // condition for in availablity of space
        console.log("no space available");
        newProducerMessage.textContent = "No space available";
        newProducerMessage.style = "color:red";
        activity.appendChild(newProducerMessage);
        activity.appendChild(document.createElement("br"));

    }
}

//consumer function to consume items
function consumer() {
    var newConsumerMessage = document.createElement("b");
    setTimeout(function() { // to maintain a 1sec gap between producer and consumer
        if (itemAvailable >= cInput) { // checking for available items

            bufferAvailable.splice(0, cInput); // consuming items from the buffer
            for (var i = 0; i < cInput; i++) {
                gui.removeChild(gui.lastChild);
            }
            console.log("Consumer removed " + cInput + " items");
            newConsumerMessage.textContent= "Consumer removed " + cInput + " items";
            newConsumerMessage.style = "color:orange";
            activity.appendChild(newConsumerMessage);
            activity.appendChild(document.createElement("br"));
            console.log(bufferAvailable);
            spaceAvailable = BUFFER_LIMIT - bufferAvailable.length; // signaling no of space available
            console.log(spaceAvailable);
        } else {
            console.log("no items available");
            newConsumerMessage.textContent = "No items available";
            newConsumerMessage.style = "color:red";
            activity.appendChild(newConsumerMessage);
            activity.appendChild(document.createElement("br"));
        }
    }, 1000);
}
//click event triggered for submit button.
function onclk() {
    setInterval(producer, 2000); // initiating the producer function on click
    setInterval(consumer, 2000); // initiating the consumer function on click
    console.log("started");
}