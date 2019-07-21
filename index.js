var YoutubeVideo = /** @class */ (function () {
    function YoutubeVideo(videoTitle, channelName, videoURL, publishingDate, category, descriptionUnderTheVideo) {
        var _this = this;
        this.descriptionUnderTheVideo = "";
        this.noOfViews = 0;
        this.noOfLikes = 0;
        this.noOfDislikes = 0;
        this.listOfComments = [];
        this.addToCommentList = function (name, comment) {
            var temp = { nameOfCommentator: name,
                comment: comment };
            _this.listOfComments.push(temp);
        };
        this.viewCommentList = function () {
            var comment;
            for (var _i = 0, _a = _this.listOfComments; _i < _a.length; _i++) {
                comment = _a[_i];
                console.log(comment);
            }
        };
        this.getVideoURL = function () {
            return _this.videoURL;
        };
        this.getPublishingDate = function () {
            var date = _this.publishingDate[0] + " " + _this.publishingDate[1] + ", " + _this.publishingDate[2];
            return date;
        };
        this.getNoOfLikes = function () {
            return _this.noOfLikes;
        };
        this.incrementLikes = function () {
            console.log("if this video is in the list of liked videos of that particular user then we simply return \notherwise we will increment the no of likes by one and add the video to the list of liked videos ");
        };
        this.getNoOfDislikes = function () {
            return _this.noOfDislikes;
        };
        this.incrementDislikes = function () {
            console.log("we can implement some logic so that this method can be called only once by a single user and increment the no. of dislikes of the video");
        };
        this.getNoOfViews = function () {
            return _this.noOfViews;
        };
        this.incrementNoOfViews = function () {
            console.log("similarly this method can be called only once per user and increment the number of views of the video");
        };
        this.getVideoTitle = function () {
            return _this.videoTitle;
        };
        this.getChannelName = function () {
            return _this.channelName;
        };
        this.getCategoryOfTheVideo = function () {
            return _this.category;
        };
        this.getDescription = function () {
            return _this.descriptionUnderTheVideo;
        };
        this.videoTitle = videoTitle;
        this.channelName = channelName;
        this.videoURL = videoURL;
        this.publishingDate = publishingDate;
        this.category = category;
        if (descriptionUnderTheVideo) {
            this.descriptionUnderTheVideo = descriptionUnderTheVideo;
        }
    }
    return YoutubeVideo;
}());
var myvideo = new YoutubeVideo("Binary Tree Traversal", "Tushar Roy Coding Made Simple", "https://youtu.be/ZM-sV9zQPEs?list=PLrmLmBdmIlpv_jNDXtJGYTPNQ2L1gdHxu", ["April", 5, 2015], "Education", "Preorder, Inorder and Postorder traversal of binary tree");
myvideo.addToCommentList("Ayush", "very nice explaination sir");
myvideo.viewCommentList();
console.log(myvideo.getVideoURL());
console.log(myvideo.getPublishingDate());
console.log(myvideo.getNoOfLikes());
myvideo.incrementLikes();
console.log(myvideo.getNoOfDislikes());
myvideo.incrementDislikes();
console.log(myvideo.getNoOfViews());
myvideo.incrementNoOfViews();
console.log(myvideo.getVideoTitle());
console.log(myvideo.getChannelName());
console.log(myvideo.getCategoryOfTheVideo());
console.log(myvideo.getDescription());
