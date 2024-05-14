import ErrorDetails from "./ErrorDetails";
function ErrorPage() {
  return (
    <div className="w-full min-h-lvh bg-second-primary dark:bg-first-primary flex flex-col transition-colors duration-300">
      <ErrorDetails />
    </div>
  );
}

export default ErrorPage;
