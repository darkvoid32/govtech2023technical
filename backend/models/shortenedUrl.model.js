module.exports = mongoose => {
    const ShortenedUrl = mongoose.model(
      "shortenedUrl",
      mongoose.Schema(
        {
          fullUrl: String,
          shortenedUrl: String
        },
        { timestamps: true }
      )
    );
  
    return ShortenedUrl;
};