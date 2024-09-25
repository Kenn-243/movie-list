function CollectionCard({ collection }: any) {
  return (
    <div className="shadow-lg border rounded-lg overflow-hidden w-[220px]">
      <div className="relative">
        <img
          src={`https://image.tmdb.org/t/p/w500${collection.poster_path}`}
          alt={collection.title}
          className="w-full h-[330px] object-cover"
        />
      </div>
      <div className="p-4 bg-white">
        <h2 className="font-bold text-xl mb-2">{collection.title}</h2>
        <p className="text-gray-500 text-sm">
          Release Date: {collection.release_date}
        </p>
        <p className="text-gray-500 text-sm">
          Language: {collection.original_language.toUpperCase()}
        </p>
        <div className="mt-2">
          <span className="text-yellow-500 font-semibold">
            ⭐ {collection.vote_average}/10
          </span>
        </div>
      </div>
    </div>
  );
}

export default CollectionCard;
