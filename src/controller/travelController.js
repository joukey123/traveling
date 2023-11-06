export const home = (req, res) => res.render("home");
export const travel = (req, res) => {
  var YouTube = require("youtube-node");
  const youtube = new YouTube();
  const word = "뉴질랜드 여행";
  const limit = 3;

  //   youtube.setKey("AIzaSyBFt0Le4tsDRChIip8_AUevMr7lrt8B9cI"); //크로크무슈
  youtube.setKey("AIzaSyD-ynXsP4uQ4Mz4nXdz53qwwQ0awljbFdo"); //holland

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
};
