function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-indigo-600 text-white px-5 py-2 cursor-pointer rounded hover:bg-indigo-700 transition"
    >
      {children}
    </button>
  );
}

export default Button;
