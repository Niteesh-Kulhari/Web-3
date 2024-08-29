interface ButtonProps {
  text: string;
}

export default function Button({ text }: ButtonProps) {
  return (
    <div>
      <button
        className=" w-full px-4 py-2 shadow-lg bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {text}
      </button>
    </div>
  );
}
