/**
 * Created by ezhilan on 2/13/17.
 */
//Variable Declaration
var B = []; // Buffer declaration
var buff_limit = 24; // buffer limit is 24
var S = buff_limit; // declaring space available with initial value set as buffer limit
var I = 0; // declaring and initializing items available as 0
// click event for submit button.
// getting values from inpur field
document.getElementById("submit").addEventListener("click",function () {
    var getProducerinput = document.getElementById("producer");
    var getConsumerinput = document.getElementById("consumer");
    window.P = parseInt(getProducerinput.value); // getting producer value
    window.C = parseInt(getConsumerinput.value); // getting consumer value
    onclk();
});
var itr = "item";
//Once started
// function for Producer
function producer() {
    var newProducerMessage = document.createElement("b");
    if (S >= window.P) { // checking Space available is greater than or equal to producer
        for (i = 0; i < window.P; i++) {
            B.push(itr); // pushing items in to space in buffer.
            var newPizza = document.createElement("li");
            document.getElementById("gui").appendChild(newPizza);
            //$("#gui").append("<li></li>");
        }
        // Notification for
        console.log("Producer pushed" + window.P + "items");

        newProducerMessage.textContent= "Producer pushed " + window.P + " items";
        newProducerMessage.style = "color:green";
        document.getElementById("activity").appendChild(newProducerMessage);
        document.getElementById("activity").appendChild(document.createElement("br"));
        //$("#activity").append("<b style=color:green>Producer pushed " + window.P + " items</b><br>");
        console.log(B);
        I = B.length; // signaling no of items available
        console.log(I);
    } else { // condition for in availablity of space
        console.log("no space available");
        newProducerMessage.textContent = "No space available";
        newProducerMessage.style = "color:red";
        document.getElementById("activity").appendChild(newProducerMessage);
        document.getElementById("activity").appendChild(document.createElement("br"));
        //$("#activity").append("<b style=color:red>No space available<b><br>");
    }
}

//consumer function to consume items
function consumer() {
    var newConsumerMessage = document.createElement("b");
    setTimeout(function() { // to maintain a 1sec gap between producer and consumer
        if (I >= window.C) { // checking for available items
            var gui = document.getElementById("gui");
            for (i = 0; i < window.C; i++) {
                B.splice(0, 1); // consuming items from the buffer
                gui.removeChild(gui.childNodes[0]);
                //$("li").first().remove();
            }
            console.log("Consumer removed " + window.C + " items");

            newConsumerMessage.textContent= "Consumer removed " + window.C + " items";
            newConsumerMessage.style = "color:orange";
            document.getElementById("activity").appendChild(newConsumerMessage);
            document.getElementById("activity").appendChild(document.createElement("br"));
            //$("#activity").append("<b style=color:orange>Consumer removed " + window.C + " items</b><br>");
            console.log(B);
            S = buff_limit - B.length; // signaling no of space available
            console.log(S);
        } else {
            console.log("no items available");
            newConsumerMessage.textContent = "No items available";
            newConsumerMessage.style = "color:red";
            document.getElementById("activity").appendChild(newConsumerMessage);
            document.getElementById("activity").appendChild(document.createElement("br"));
            //$("#activity").append("<b style=color:red>No items available<b><br>");
        }
    }, 1000);
}
//click event triggered for submit button.
function onclk() {
    var set_prod_func = setInterval(producer, 2000); // initiating the producer function on click
    var set_con_func = setInterval(consumer, 2000); // initiating the consumer function on click
    console.log("started");
}