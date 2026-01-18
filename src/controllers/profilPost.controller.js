const { ApifyClient } = require('apify-client');
require('dotenv').config();

const client = new ApifyClient({
    token: process.env.APIFY
});

const buildInput = (username) => {
    return {
        directUrls: [
            `https://www.instagram.com/${username}/`
        ],
        resultsType: "posts",
        resultsLimit: 20,
    }
}

async function runScraper(req , res) {
    let username = req.params.username;
    const run = await client
        .actor("apify/instagram-scraper")
        .call(buildInput(username || "humansofny"));

    console.log('Results from dataset');
    console.log(
        `💾 Check your data here: https://console.apify.com/storage/datasets/${run.defaultDatasetId}`
    );

    const { items } = await client
        .dataset(run.defaultDatasetId)
        .listItems();

    return res.status(200).json(items) ;
}

module.exports = { runScraper };
