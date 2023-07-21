# The best way to debug your PubNub app

It's hard to catch bugs. It's even harder to catch them when you're working with multiple clients, servers, and networking between them - like when building with PubNub. Even when you find them, describing the steps to reproduce and opening a support ticket can be its own challenge.

Today, we'll cover the best technique for debugging complex PubNub apps, [Dashcam](https://dashcam.io). This guide will help you, and PubNub support, debug your app quickly. After all, any time spent on bugs is time that could be spent on features!

https://github.com/dashcamio/demo-pubnub/assets/318295/41e4e50f-38c6-4166-8587-d134a3f5e66d

[_See the full Dashcam demo here._](https://app.dashcam.io/replay/64b9a08096497100601dbfdf?share=xrsbBettcayvHD2gMglQjg)

Dashcam is a screen recorder for debugging. It's an all-in-one debugging tool that makes it simple to find and fix bugs in complex apps. When you encounter an error with PubNub, Dashcam will play back your screen in sync with terminal, logs, and network requests in a format called a "Dash." 

This form of debugging is known as time-travel debugging. Time Travel Debugging (TTD) can help you debug issues easier by letting you "rewind" your desktop, instead of having to reproduce the issue until you find the bug.

## Debugging PubNub with Dashcam

<img src="https://github.com/dashcamio/demo-pubnub/assets/318295/2ceae4ca-9602-4f78-93be-5ae8e054f2a7" width="900"/>

With Dashcam, you can rewind and playback your PubNub logs and network requests from both the server and the client! As the desktop screen recording plays, the logs will appear in sync. Now, you can step through your program execution to see what went wrong!

- **Server Logs:** Debug your PubNub channel creation and PAM by combining front-end and back-end logs
- **Console Logs from Chrome:** Capture logs from multiple tabs and play them back together
- **Network Requests from Chrome:** See all the outgoing and incoming network requests from the PubNub SDK

## Tips for Debugging PubNub

As PubNub is networking infrastructure, the network requests are super important. You can find those under **Chrome > Network** in the dash (we'll show you how to record logs in a minute).

<img src="https://github.com/dashcamio/demo-pubnub/assets/318295/1ebec530-c047-4f0b-a491-19f6e648e256" width="300"/>

Then you can click on a request to see the request and response information.

<img src="https://github.com/dashcamio/demo-pubnub/assets/318295/58e82171-7eb8-420c-b41f-89a63493c415" width="300" />

In this demo, we also enable `logVerbosity: true`, which enables PubNub's own debugging information to appear in the console.

<img src="https://github.com/dashcamio/demo-pubnub/assets/318295/6dffecc0-0338-4889-9e05-bf010a82fd40" width="300" />

### Share your bugs with PubNub

Not only can you view your own bugs with Dashcam, but Dashcam makes it easy to share bugs with others (and get help fixing them!). If you're having trouble with PubNub, capture your issue on Dashcam and send the dash to PubNub.

## Getting started with Dashcam and PubNub

In this guide, we'll be starting with [the PubNub JS Chat example](https://www.pubnub.com/tutorials/javascript-sdk-chat-app/?step=build-and-run). You can find our full code [here](https://github.com/dashcamio/demo-pubnub/).

We've modified the demo and added a simple backend server that subscribes to the same channels as the front end.

### Set Up Dashcam

#### Download Dashcam

Dashcam is a desktop app available for Mac and Windows. You can download it from the website, [here](https://dashcam.io). Once you've installed Dashcam, continue to Step 2.

#### Install the Dashcam Chrome Extension

![image](https://github.com/dashcamio/demo-pubnub/assets/318295/646f6e00-50d8-4770-8692-0c069d93df01)

If your PubNub app has a web frontend, you'll want to get [the Dashcam Chrome Extension](https://chrome.google.com/webstore/detail/dashcam/dkcoeknmlfnfimigfagbcjgpokhdcbbp). This will allow you to capture console logs and network requests from your application front-end.

With the desktop app open, you'll know the Chrome Extension is working if you see the "Connected" state indicator.

Don't worry, tracking is configured with a whitelist that you'll configure in the next step.

### Send logs to Dashcam

#### Capture website logs and network requests

In the "logs" panel of the Dashcam desktop app, add a `web` pattern that matches the url of the site you want to collect logs from. In our example we'll use the [`http-sever` package from npm](https://www.npmjs.com/package/http-server), which defaults to port `8080`.

```
http://localhost:8080
http*://*.yourapp.com*
```

Note that the patterns allow for wildcards like `*`, so you could use `localhost:*` for broader injection from any port.

![image](https://github.com/dashcamio/demo-pubnub/assets/318295/afd05af6-ed1c-4d22-b2fa-14e868338c73)

Now visit your website. Open Dashcam and click on the terminal icon. You should see a confirmation that Dashcam has received logs from the Chrome Extension.

![image](https://github.com/dashcamio/demo-pubnub/assets/318295/1fd3b702-445c-4d3a-ab0c-85aaa686938d)

Now, any dash you create with Dashcam will contain the logs from your front end!

#### Capture server logs from terminal

Now we're going to do a similar configuration for the server. Dashcam can tail any log file to capture those logs and display them in sync with your screen replay. You can select any number of log files or even make new ones just for Dashcam.

To set up logfile tracking, open the Dashcam desktop app. In the "Logs" settings of the Dashcam desktop app, add an `application` pattern. This pattern is typically a log file. If your application already has a log file somewhere, select that file instead. For this tutorial, we'll make a new file called `pubnub.log`.

```
/tmp/pubnub.log
```

Now that Dashcam is configured to watch this file, let's run our `server.js` and pipe the output to the file.

```
node server.js 2>&1 | tee -a /tmp/pubnub.log
```

Open Dashcam again, and verify that both your front-end and back-end logs are being captured by Dashcam!

![image](https://github.com/dashcamio/demo-pubnub/assets/318295/fb1c5c6e-8e98-4f76-8d69-1174d26bd599)

## Conclusion

That's it! Now you're all set up. Now whenever you encounter an issue with PubNub or otherwise, you'll be able to travel back in time to see what caused the bug. And when you get stumped, you can share your dash to get help.
