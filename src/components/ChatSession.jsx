import { FaUserCircle } from "react-icons/fa";
import { PiRobotBold } from "react-icons/pi";
import { IoIosClose } from "react-icons/io";

const ChatSession = ({ session, onClose }) => {
  if (!session) {
    // Display a default message if no chat session is selected
    return (
      <div className="md:w-3/4 h-screen flex justify-center items-center bg-gray-100 rounded">
        <p className="text-gray-500 text-xl font-semibold">No chat session selected</p>
      </div>
    );
  }

  return (
    <div className="md:w-3/4 h-screen p-4 overflow-auto border rounded bg-gradient-to-br from-white to-gray-100">
      <div className="mb-2 pb-2 flex justify-between items-center border-b">
        <h2 className="text-xl font-bold">{session.name}</h2>
        <IoIosClose className="size-8 cursor-pointer" onClick={onClose} />
      </div>
      <div className="space-y-4">
        {session.messages.map((message) => (
          <div
            key={message.id}
            className={`p-2 border ${
              message.action === "USER"
                ? "text-right w-max ml-auto bg-[#2E3B5B] text-white rounded-tr-lg rounded-bl-lg rounded-tl-lg"
                : "w-max mr-auto bg-[#000929] text-white rounded-tr-lg rounded-bl-lg rounded-br-lg"
            }`}
          >
            <span className="flex items-center gap-1 text-lg font-semibold">
              {message.action === "USER" ? (
                <FaUserCircle className="ml-auto" />
              ) : (
                <PiRobotBold className="" />
              )}
              {message.action}
            </span>
            <p>{message.content}</p>
            <span className="block text-xs">
              {new Date(message.timestamp).toLocaleString('en-GB', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              })}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatSession;