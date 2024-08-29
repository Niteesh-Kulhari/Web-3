interface InputProps {
  placeHolder: string;
  type: string;
}

export default function InputBar({ placeHolder, type }: InputProps) {
  return (
    <div >
      <input
        type={type}
        placeholder={placeHolder}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-black text-white"
      />
    </div>
  );
}
