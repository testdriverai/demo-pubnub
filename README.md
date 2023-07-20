# The best way to debug your PubNub app

It's hard to catch bugs. It's even harder to catch them when you're working with multiple clients, servers, and networking between them. Even when you find them, dscribing the steps to reproduce and opening a support ticket can be it's own challenge.

Today, we'll cover the best tequnique for debugging PubNub apps, Dashcam. This guide will help you, and PubNub support, debug your app quickly. After all, any time spent on bugs is time that could be spent on features!

// Dashcam Demo

Dashcam is an all-in-one debugging tool that makes it simple to find and fix bugs in complex apps. Dashcam is a screen recorder for debugging. When you encounter an error, Dashcam will play back your screen in-sync with terminal, logs, and network requests.

This form of debugging is known as time-travel debugging. Time Travel Debugging (TTD) can help you debug issues easier by letting you "rewind" your desktop, instead of having to reproduce the issue until you find the bug.

In this guide, we'll be starting with [the PubNub JS Chat example](https://www.pubnub.com/tutorials/javascript-sdk-chat-app/?step=build-and-run). You can find our full code [here]().

## 1. Download Dashcam

Dashcam is a desktop app available for Mac and Windows. You can download it from the website, [here](https://dashcam.io). Once you've installed Dashcam, continue to Step 2.

## 2. Install the Dashcam Chrome Extension

![](https://media.cleanshot.cloud/media/31192/uoaUhy4LYKw7lqsOcVinKHFXeZPPtV1P8pNzQUnr.jpeg?Expires=1689899840&Signature=aVmYPzVW-ZNsEMKMgz0PGZPWOZOu~jXe7z3hY7qRto6N-fGft2jWCIEo4Qs73AcPWDwSbjRnvCb6tkLFTETKuko7L9w9XZLHpWg5IvxHVQdv67Rklf09~VzK8yBcjTXAR3ljCTqmCQE67UiO1BVHgKKdJCX1VzNp1ZPq58~1~Jjc~pLstdR6Rc5SgvgzOY98m6fcgAty0hoogdSFvzFrgdQq52sIjs07ylCZuXMhGck7tiVer6yByHE69ZYn5fC32V76dbQBPGDfeYG8dwShuHellb2k8jFHPZhQRG~-Js5leUuOQxJiq1MUvRvjMszyhPiCL0z28iJN5sQq0gyGCg__&Key-Pair-Id=K269JMAT9ZF4GZ)

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

![](https://media.cleanshot.cloud/media/31192/ig9pLZkPIwM78elWmrIUiq9TxO2T0MCaNNu55fOG.jpeg?Expires=1689903692&Signature=rGOVNmSWm72iYzgQy-vrNkXC1Jb1wGop-N~yukbSFqVZ83sx5m2Z3CReuMOurvjsxsz-9bvHjlFU6QPLtUElrUlRnu2zvb86htEBAKF8tP276Hyax9WqNDof0BWqtxnbhwKHjbY4SZpHm2kb2DkqIcKl-1lqb4uQgOmLasGizPr~TrrDLr1GAuDXazY05601WZkvwHwulPRvVd8Low~OOYacorovStE6WTnVezitRJEYrWUjcPNkdMwhPzaK8sjSGnyNfgNdHO6jJ9aB50p9L9wPrYrCZNXDVU9de8jfaaPhrG4XrFAEHk25Wkpzk9VaQUEnV3BFxWem-YTCkvAdrA__&Key-Pair-Id=K269JMAT9ZF4GZ)

Now visit your website. Open Dashcam and click on the terminal icon. You should see a confirmation that Dashcam has recieved logs from the Chrome Extension.

![](https://media.cleanshot.cloud/media/31192/xHfrFhxAxFhKpZ3etKhrSxtcHzxnrbNoNpN0yP32.jpeg?Expires=1689904008&Signature=oCw8WNairKxp4dBgRpe1YU7ND9oztAahcI0cuugsR35QwNeBKJZjYm~UyZAqV8NBbDoxLUeBwONKxBQeqpkJ1IoQSP~nmaeYuHVjtWe7osb7GhNww8SDLVluVfBDL2l2fBsGzzQOLpLj0YXxzj872Zhzi7XXkeypVnVTkCA05moRLaDQp~KoJp2DKn24Bh7pLed81KVvVuLlpOVaV5VBh3dc2jdSytp9QiJ2e4FtuDA86CdKCcRsGGaOYD6Ti-BIcwdq8znIgaLcS8IdTtPQX0p-c~Aeelr-MDdtNrDaqsj-2SQCWpA744wWGrUTz1uGGBXfGjqZ-UZdPfOk~O6ANw__&Key-Pair-Id=K269JMAT9ZF4GZ)

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

## 6. Debug with time travel

## 7. Share your bug reports
