const PubNub = require("pubnub");

const pubnub = new PubNub({
  publishKey: "pub-c-9c98cd2a-92ee-4951-a92c-3796ee1b739d",
  subscribeKey: "sub-c-06995b2a-b1f3-4079-929a-056e9d243775",
  userId: "server",
});

// add listener
const listener = {
  status: (statusEvent) => {
    if (statusEvent.category === "PNConnectedCategory") {
      console.log("Connected");
    }
  },
  message: (messageEvent) => {
    showMessage(messageEvent.message);
  },
  presence: (presenceEvent) => {
    // handle presence
  },
};
pubnub.addListener(listener);

// subscribe to a channel
pubnub.subscribe({
  channels: ["chat-channel"],
});
const showMessage = (msg) => {
  console.log("message: " + msg);
};

throw new Error("test");
