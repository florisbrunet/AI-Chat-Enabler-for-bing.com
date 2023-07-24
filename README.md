<img align="left" src="source/icon-128.png" width="64">

# AI Chat Enabler for bing.com

This extension makes bing.com think you are using a different browser by changing multiple User Agent headers, allowing the use of the AI Chat. No setup needed, installing the extension is enough. Clicking the extension icon will open the AI Chat.

This extension is not affiliated with, endorsed, or sponsored by Microsoft Corporation or Bing. All product and company names are trademarks™ or registered® trademarks of their respective holders. Use of them does not imply any affiliation with or endorsement by them.

Icon by Icons8 (https://icons8.com/).

No data is collected (feel free to check the source).

## How to install from the Chrome Web Store

Here is the link: [https://chrome.google.com/webstore/detail/kapjhgdgjhmchacdmebckkkmidojlglc](https://chrome.google.com/webstore/detail/kapjhgdgjhmchacdmebckkkmidojlglc)

## How to run locally

Clone the repository:

```
git clone https://github.com/florisbrunet/AI-Chat-Enabler-for-bing.com
```

Go to [chrome://extensions/](chrome://extensions/) and enable Developer Mode (right corner). Then click 'Load unpacked' and select the `source` directory from the cloned repository.

To update the extension, run a `git pull` inside the cloned repository and reload the extension in Chrome.

## How to build for production

Clone the repository:

```
git clone https://github.com/florisbrunet/AI-Chat-Enabler-for-bing.com
```

Create a zip of the source:

```
cd source
zip extension.zip *
```

Upload the zip folder to [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole/).