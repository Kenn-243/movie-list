import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import CollectionCard from "../../../components/CollectionCard";
import { useEffect } from "react";
import { fetchFavorite } from "../../../reducers/collection/collectionSlicer";
import Loading from "../../../components/Loading";

function FavoritesPage() {
  const { loggedUser } = useSelector((state: RootState) => state.user);
  const { isLoading, favorites } = useSelector(
    (state: RootState) => state.collection
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavorite(loggedUser!.id));
  }, [loggedUser, dispatch]);

  return (
    <div>
      <Loading isLoading={isLoading} />
      {favorites.length > 0 ? (
        <div className="m-5 grid grid-cols-5 gap-4">
          {favorites.map((collection) => (
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

export default FavoritesPage;
