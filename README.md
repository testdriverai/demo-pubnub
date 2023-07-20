# The best way to debug your PubNub app

It's hard to catch bugs. It's even harder to catch them when you're working with multiple clients, servers, and networking between them. Even when you find them, dscribing the steps to reproduce and opening a support ticket can be it's own challenge.

Today, we'll cover the best tequnique for debugging PubNub apps, Dashcam. This guide will help you, and PubNub support, debug your app quickly. After all, any time spent on bugs is time that could be spent on features!

https://github.com/dashcamio/demo-pubnub/assets/318295/aa93ea55-010b-4187-a1dd-6de761a8d5c7

Dashcam is an all-in-one debugging tool that makes it simple to find and fix bugs in complex apps. Dashcam is a screen recorder for debugging. When you encounter an error, Dashcam will play back your screen in-sync with terminal, logs, and network requests.

This form of debugging is known as time-travel debugging. Time Travel Debugging (TTD) can help you debug issues easier by letting you "rewind" your desktop, instead of having to reproduce the issue until you find the bug.

In this guide, we'll be starting with [the PubNub JS Chat example](https://www.pubnub.com/tutorials/javascript-sdk-chat-app/?step=build-and-run). You can find our full code [here](https://github.com/dashcamio/demo-pubnub/).

## 1. Download Dashcam

Dashcam is a desktop app available for Mac and Windows. You can download it from the website, [here](https://dashcam.io). Once you've installed Dashcam, continue to Step 2.

## 2. Install the Dashcam Chrome Extension

![image](https://github.com/dashcamio/demo-pubnub/assets/318295/646f6e00-50d8-4770-8692-0c069d93df01)

If your PubNub app has a web frontend, you'll want to get [the Dashcam Chrome Extension](https://chrome.google.com/webstore/detail/dashcam/dkcoeknmlfnfimigfagbcjgpokhdcbbp). This will allow you capture console logs and network requests from your application front-end.

With the desktop app open, you'll know the Chrome Extension is working if you see the "Connected" state indicator.

Don't worry, tracking is configured with a whitelist that you'll configure in the next step.

## 3. Capture website logs and network requests

In the "logs" panel of the Dashcam desktop app, add a `web` pattern that matches the url of the site you want to collect logs from. In our example we'll use the [`http-sever` package from npm](https://www.npmjs.com/package/http-server), which defaults to port `8080`.

```
http://localhost:8080
http*://*.yourapp.com*
```

Note that the patterns allow for wildcards like `*`, so you could use `localhost:*` for broader injestion from any port.

![image](https://github.com/dashcamio/demo-pubnub/assets/318295/afd05af6-ed1c-4d22-b2fa-14e868338c73)

Now visit your website. Open Dashcam and click on the terminal icon. You should see a confirmation that Dashcam has recieved logs from the Chrome Extension.

![image](https://github.com/dashcamio/demo-pubnub/assets/318295/1fd3b702-445c-4d3a-ab0c-85aaa686938d)

Now, any dash you create with Dashcam will contain the logs from your front-end!

## 4. Capture server logs from terminal

Now we're going to do a similar configuration for the server. Dashcam can tail any logfile to capture those logs and display them in sync with your screen replay. You can select any number of logfiles or even make new ones just for Dashcam.

To set up logfile tracking, open the Dashcam desktop app. In the "Logs" settings of Dashcam desktop app, add a `application` pattern. This pattern is typically a logfile. If your application already has a logfile somewhere, select that file instead. For this tutorial, we'll make a new file called `pubnub.log`.

```
/tmp/pubnub.log
```

Now that Dashcam is configured to watch this file, let's run our `server.js` and pipe the output to the file.

```
node server.js 2>&1 | tee -a /tmp/pubnub.log
```

Open Dashcam again, and verify that both your front-end and back-end logs are being captured by Dashcam!

![](https://media.cleanshot.cloud/media/31192/6diu1QCmRYzjuxBvuv5gJjBdgR4mIAPtCYnDv8Ow.jpeg?Expires=1689904446&Signature=tIBrIHr-fkOtQ-pefEK28cllc03wvgzorRQ7tbBjzsLT8zRwFSgVcN7Qojw3wFAayzbi3bniuJ~q-HBPrmpvBj-KxWejNVGUJ4TOVv9d9Mu1quoDp1ZSAMe1luuZMQ155x-UfpErgKlQIV2jyiZmZfPH-PG0sxVe6i5e-67phwXzjagH4rfPSaRrulL74GSUT3xeUn8O4kn2sio9mHD0EyEWuZMeCVTwbvw51ELaYHZ4PrkuL4tcKIvJkGSQfiaGsjwk46ATeRTno5gWDJWR~k8lQImtN7cMkqYypT5HMoJ9xjNZMzyhzb8KV3NRnpYXPdmLdG85Q5XJ1d49aUyMCQ__&Key-Pair-Id=K269JMAT9ZF4GZ)

## 5. Automatically detect errors

Now when Dashcam detects an error, it will make a clip!

https://github.com/dashcamio/demo-pubnub/assets/318295/49166d12-c7b7-449e-a993-84ceac8ee1a3

## 6. Debug with time travel

https://github.com/dashcamio/demo-pubnub/assets/318295/42aeb58f-778c-44bd-af52-6665baee66e6

## 7. Share your bug reports

https://github.com/dashcamio/demo-pubnub/assets/318295/8f2b905f-d291-4769-83fa-f11803150b3d
