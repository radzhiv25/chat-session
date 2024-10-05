import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const Sidebar = ({ onSessionClick }) => {
  const [chatSessions, setChatSessions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // Search query state
  const [startDate, setStartDate] = useState(""); // Start date state
  const [endDate, setEndDate] = useState(""); // End date state
  const [selectedSessionId, setSelectedSessionId] = useState(null); // To store the selected session ID

  const fetchChatSessions = async (page) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://admin-backend-docker-india-306034828043.asia-south2.run.app/nlp/api/chat_sessions?page=${page}&per_page=10`
      );
      const data = await response.json();
      setChatSessions((prev) => [...prev, ...data.chat_sessions]);
      setTotalPages(data.pages);
    } catch (error) {
      console.error("Error fetching chat sessions:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChatSessions(currentPage);
  }, [currentPage]);

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    if (
      scrollTop + clientHeight >= scrollHeight / 2 &&
      currentPage < totalPages
    ) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handleSessionClick = (session) => {
    setSelectedSessionId(session.id); // Set the selected session ID
    onSessionClick(session); // Call the parent function to display the session details
  };

  // Filter sessions based on the search query and date range
  const filteredSessions = chatSessions.filter((session) => {
    // Check if the search query matches the session id or name
    const matchesSearchQuery =
      session.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      session.id.toString().includes(searchQuery);

    // Parse the session timestamp
    const sessionDate = new Date(session.messages[0]?.timestamp);

    // Check if the session date falls within the selected date range
    const matchesDateRange =
      (!startDate || sessionDate >= new Date(startDate)) &&
      (!endDate || sessionDate <= new Date(endDate));

    return matchesSearchQuery && matchesDateRange;
  });

  return (
    <div
      className="md:w-1/4 md:h-screen h-1/4 overflow-auto p-2 border rounded"
      onScroll={handleScroll}
    >
      {/* Search Input */}
      <div className="mb-4">
        <label className="font-semibold">Search by ID or Name:</label>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search sessions by ID or Name..."
          className="w-full p-2 border border-gray-300 rounded mb-2 outline-none"
        />

        {/* Date Range Filters */}
        <div>
          <label className="font-semibold">Filter by date:</label>
          <span className="flex space-x-2 mb-2">
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Start date"
            />
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="End date"
            />
          </span>
        </div>
      </div>

      <div className="py-1 border divide-y rounded">
        {filteredSessions.map((session, index) => (
          <div
            key={`${session.id}-${index}`} // Ensure the key is unique by combining id and index
            className={`p-3 cursor-pointer ${
              selectedSessionId === session.id
                ? "bg-gray-100"
                : "bg-white"
            }`} // Conditionally apply styles based on selection
            onClick={() => handleSessionClick(session)}
          >
            <span className="flex items-center gap-1">
              <FaUserCircle className="text-2xl" />
              <h2 className="text-xl font-semibold"> Session {session.id}</h2>
            </span>
            <h3 className="text-md text-gray-400 font-medium">{session.name}</h3>
            <p className="text-sm">
              {new Date(session.messages[0]?.timestamp).toLocaleString("en-GB", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
        ))}
      </div>

      {loading && <div className="text-center">Loading more...</div>}
      {filteredSessions.length === 0 && !loading && (
        <div className="text-center">No results found</div>
      )}
    </div>
  );
};

export default Sidebar;