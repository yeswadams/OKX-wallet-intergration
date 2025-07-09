// 1. Create a deeplink to the OKX exchange
const dappUrl = '<https://app.uniswap.org>'; // Replace with the actual dapp URL you want to link to

// 2. Encode Deeplink Parameters
// use encodeURIComponent to encode the dapp URL to ensure that special characters in the URL are handled correctly for inclusion in a web link
const encodedDappUrl = encodeURIComponent(dappUrl);

// 3. Build the Deeplink
// combine the encoded parameters to form the deeplink specific to your DApp for the OKX platform
const deeplink = "okx://wallet/dapp/url?dappUrl=" + encodedDappUrl;

// 4. Encode the Entire URL
// Encode the entire URL including the Deeeplink to ensure it is properly formatted in the web application. This creates the final deeplink that users will interact with
const encodeUrl = "<https://www.okx.com/download?Deeplink=>" + encodeURIComponent(deepLink);























