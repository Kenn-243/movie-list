function Loading(isLoading: boolean) {
  return (
    <div
      className={`${
        isLoading ? "block" : "hidden"
      } absolute inset-0 bg-base-300 bg-opacity-50 z-10 pointer-events-auto flex justify-center items-center`}
    >
      <span className={"loading loading-dots loading-lg z-10"}></span>
    </div>
  );
}

export default Loading;
