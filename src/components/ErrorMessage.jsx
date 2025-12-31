function ErrorMessage({ message }) {
  return (
    <p className="text-center text-red-500 font-medium py-10">
      {message}
    </p>
  );
}

export default ErrorMessage;
