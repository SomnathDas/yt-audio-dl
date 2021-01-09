const ytdl = require('ytdl-core'); // npm i ytdl-core

// Main function which returns download url of audio file of a youtube video
async function ytDownloadShit(link) {
    // Getting info about the video
    let x = await ytdl.getBasicInfo(link);
    // Getting thumbnails
    let thumbnail = x.videoDetails.thumbnails;
    // Filtering thumbnails so that only maximum resolution one remains
    let thumbnailUrl = thumbnail.filter((x)=> x.url.includes("maxresdefault");
    // Assigning thumbnail url to the variable 'outputThumb';
    let outputThumb = thumbnailUrl[0].url;
    // Getting information about the video
    let y = await ytdl.getInfo(link);
    // Assigning video formats and it's info to the variable 'videoFormats'
    let videoFormats = y.formats;
    // Filtering out respective data and assigning url to the 'downUrl' variable
    let downUrl = videoFormats.filter((eachObject)=> eachObject.audioBitrate == 160).reduce((x, y)=> x = y); // You can adjust these configuration
    return [outputThumb, downUrl.url] // Index[0] contains thumbnail url and Index[1] contains download url 
}

//Try it here 
(async()=> {
    let result = await ytDownloadShit("https://www.youtube.com/watch?v=Lq8DPyMLxwk")
    
    console.log(`Thumbnail Url => ${result[0]}\nDownload Url => ${result[1]}`);
})();

// Follow me on instagram @samurai3246 uwu)/
// Make sure to star this repo (ノಠ益ಠ)ノ彡┻━┻

