import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWatchlist } from "../../../reducers/collection/collectionSlicer";
import CollectionCard from "../../../components/CollectionCard";
import { RootState } from "../../../store/store";
import Loading from "../../../components/Loading";

function WatchlistPage() {
  const { loggedUser } = useSelector((state: RootState) => state.user);
  const { watchlists, isLoading } = useSelector(
    (state: RootState) => state.collection
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWatchlist(loggedUser!.id));
  }, [loggedUser, dispatch]);

  return (
    <div>
      <Loading isLoading={isLoading} />
      {watchlists.length > 0 ? (
        <div className="m-5 grid grid-cols-5 gap-4">
          {watchlists.map((collection) => (
            <div key={collection.id}>
              <CollectionCard collection={collection} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center mt-5">
          <h1>You haven't added any collections</h1>
        </div>
      )}
    </div>
  );
}

export default WatchlistPage;
