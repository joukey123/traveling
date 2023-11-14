export const home = (req, res) => res.render("home");
export const travel = (req, res) => {
  var YouTube = require("youtube-node");
  const youtube = new YouTube();
  const word = "뉴질랜드 여행";
  const limit = 6;

  youtube.setKey(process.env.YOUTUBE_KEY); //holland

  youtube.addParam("order", "rating");
  youtube.addParam("type", "video");
  youtube.addParam("videoLicense", "creativeCommon");

  youtube.search(word, limit, function (err, result) {
    if (err) {
      console.log(err);
      return;
    }

    const videos = result["items"];
    res.render("travel", { videos });
  });
  // res.render("travel");
};
