import NavigationBar from "@/components/shared/NavigationBar";
const NotFound = async () => {
  return (
    <>
      <NavigationBar />
      <main className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">Page not found</h1>
        <p className="text-stone-400">
          Please, use the navigation bar to get back to your data.
        </p>
      </main>
    </>
  );
};

export default NotFound;
