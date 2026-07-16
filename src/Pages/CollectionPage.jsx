import { useDispatch, useSelector } from "react-redux";
import CollectionCard from "../Components/CollectionCard";
import { clearCollection } from "../redux/features/collectionSlice";

const CollectionPage = () => {
  const collection = useSelector((state) => state.collection.items);
  const dispatch = useDispatch();
  const clearAll = () => {
    dispatch(clearCollection());
  };

  return (
    <div className="overflow-auto py-6 px-10">
      {collection.length > 0 ? (
        <div className="flex justify-between mb-6">
          <h2 className="text-2xl font-medium">Your Collection</h2>
          <button
            onClick={() => {
              clearAll();
            }}
            className="bg-red-600 px-8 py-3 text-lg font-medium rounded active:scale-95 transition cursor-pointer"
          >
            Clear Collection
          </button>
        </div>
      ) : (
        "Collection is empty"
      )}

      <div className="flex-start justify-center w-full flex-wrap gap-6 ">
        {collection.map((item, idx) => {
          return (
            <div key={idx}>
              <CollectionCard item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CollectionPage;
