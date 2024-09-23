function ReviewCard({
  avatarPath,
  authorName,
  authorUsername,
  authorRating,
  content,
  created_at,
}: any) {
  return (
    <div className="bg-white rounded-lg shadow-md mx-6 mb-6 p-6 mb-4">
      <div className="flex items-center">
        <img
          className="w-12 h-12 rounded-full object-cover"
          src={
            avatarPath
              ? `https://image.tmdb.org/t/p/w500${avatarPath}`
              : "/src/assets/profile.png"
          }
        />
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-gray-800">
            {authorName ? authorName : "Guest"}
          </h3>
          <p className="text-sm text-gray-500">@{authorUsername}</p>
        </div>
        <div className="ml-auto flex items-center">
          <span className="text-yellow-500 text-xl">★</span>
          <span className="ml-1 text-gray-700 font-bold">
            {authorRating ? authorRating : "No Rating"}
          </span>
        </div>
      </div>

      <div className="mt-3">
        <p className="text-gray-700">{content}</p>
      </div>

      <div className="mt-2 text-sm text-gray-500">Reviewed on {created_at}</div>
    </div>
  );
}

export default ReviewCard;
