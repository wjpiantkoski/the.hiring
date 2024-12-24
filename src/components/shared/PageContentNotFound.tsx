interface PageContentNotFoundProps {
  content?: string;
}

const PageContentNotFound = ({
  content = "Not found",
}: PageContentNotFoundProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-extrabold">{content}</h1>
    </div>
  );
};

export default PageContentNotFound;
