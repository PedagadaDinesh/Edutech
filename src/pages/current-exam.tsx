import { AdminLayout } from "@/layouts";
import { useState } from "react";
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";

const currentExam = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [sortAttribute, setSortAttribute] = useState("date");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  // Mock array of exam details
  const examDetails = [
    {
      id: 1,
      name: "Mathematics 101",
      date: "2024-12-20",
      startTime: "10:00 AM",
      endTime: "12:00 PM",
      expireTime: "2024-12-20 12:30 PM",
      description: "Mainly Covers algebra, geometry, and arithmetic.",
      totalQuestions: 40,
      status: "Available",
    },
    {
      id: 2,
      name: "Physics Fundamentals",
      date: "2024-12-22",
      startTime: "02:00 PM",
      endTime: "04:00 PM",
      expireTime: "2024-12-22 04:30 PM",
      description: "Focus on Newtonian mechanics and thermodynamics.",
      totalQuestions: 50,
      status: "Available",
    },
    {
      id: 3,
      name: "Chemistry Basics",
      date: "2024-12-25",
      startTime: "09:00 AM",
      endTime: "11:00 AM",
      expireTime: "2024-12-25 11:30 AM",
      description: "Includes chemical reactions and stoichiometry.",
      totalQuestions: 35,
      status: "Closed",
    },
    {
      id: 4,
      name: "Biology Essentials",
      date: "2024-12-27",
      startTime: "01:00 PM",
      endTime: "03:00 PM",
      expireTime: "2024-12-27 03:30 PM",
      description: "Focus on human anatomy and cellular biology.",
      totalQuestions: 45,
      status: "Available",
    },
    {
      id: 5,
      name: "History Quiz",
      date: "2024-12-29",
      startTime: "10:30 AM",
      endTime: "12:00 PM",
      expireTime: "2024-12-29 12:30 PM",
      description: "Test your knowledge on world history and civics Questions.",
      totalQuestions: 30,
      status: "Available",
    },
    {
      id: 6,
      name: "Geography Test",
      date: "2024-12-30",
      startTime: "03:00 PM",
      endTime: "05:00 PM",
      expireTime: "2024-12-30 05:30 PM",
      description: "Mainly Covers continents, countries, and capitals.",
      totalQuestions: 40,
      status: "Closed",
    },
    {
      id: 7,
      name: "English Language",
      date: "2025-01-01",
      startTime: "11:00 AM",
      endTime: "01:00 PM",
      expireTime: "2025-01-01 01:30 PM",
      description: "Covers grammar, vocabulary, and comprehension.",
      totalQuestions: 50,
      status: "Available",
    },
    {
      id: 8,
      name: "Computer Science",
      date: "2025-01-03",
      startTime: "02:00 PM",
      endTime: "04:00 PM",
      expireTime: "2025-01-03 04:30 PM",
      description: "Includes programming basics and algorithms.",
      totalQuestions: 45,
      status: "Available",
    },
    {
      id: 9,
      name: "Economics Basics",
      date: "2025-01-05",
      startTime: "10:00 AM",
      endTime: "12:00 PM",
      expireTime: "2025-01-05 12:30 PM",
      description: "Focus on micro and macroeconomics principles.",
      totalQuestions: 40,
      status: "Available",
    },
    {
      id: 10,
      name: "Psychology Exam",
      date: "2025-01-07",
      startTime: "01:00 PM",
      endTime: "03:00 PM",
      expireTime: "2025-01-07 03:30 PM",
      description: "Covers basic concepts in behavioral psychology.",
      totalQuestions: 35,
      status: "Available",
    },
  ];

  const filteredExams = examDetails.filter(exam =>
    exam.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort exams based on selected attribute
  const sortedExams = [...filteredExams].sort((a, b) => {
    if (sortAttribute === "name") return a.name.localeCompare(b.name);
    if (sortAttribute === "date") {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateA.getTime() - dateB.getTime();
    }
    return 0;
  });

  // Pagination
  const indexOfLastExam = currentPage * itemsPerPage;
  const indexOfFirstExam = indexOfLastExam - itemsPerPage;
  const currentExams = sortedExams.slice(indexOfFirstExam, indexOfLastExam);

  return (
        <AdminLayout>
          <div className="mx-2 md:mx-4 lg:mx-5 2xl:mx-6">
          <h1 className="text-2xl font-bold text-gray-700 mb-5">
          Current Exams
        </h1>
           <div className="flex items-center justify-between mb-5">
           <div className="flex">
              <input
                type="text"
                placeholder="Search Exams..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-4 py-2 border placeholder:text-sm rounded-lg bg-transparent w-56 border border-primary font-semibold"
              />
              <select
                value={sortAttribute}
                onChange={(e) => setSortAttribute(e.target.value)}
                className="ml-4 px-4 py-2 border text-sm rounded-lg bg-transparent w-56 text-gray-600 border-primary font-semibold"
              >
                <option value="date">Sort by Date</option>
                <option value="name">Sort by Name</option>
              </select>
            </div>

            <div className="flex justify-center gap-2">
            <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-2.5 py-1 border-2 border-primary rounded-lg hover:bg-gray-300 transition disabled:opacity-50"
            >
                <HiOutlineArrowSmLeft className="h-6 w-6" />
            </button>
            
            <h1 className="text-gray-700 flex items-center">
                Page {currentPage} of {Math.ceil(examDetails.length / itemsPerPage)}
            </h1>

            <button
                onClick={() => setCurrentPage(prev => prev + 1)}
                disabled={currentPage * itemsPerPage >= examDetails.length}
                className="px-2.5 py-1 border-2 border-primary rounded-lg hover:bg-gray-300 transition disabled:opacity-50"
            >
                <HiOutlineArrowSmRight className="h-6 w-6" />
            </button>
            </div>

           </div>
    
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentExams.map((exam) => (
                <div
                  key={exam.id}
                  className={`p-6 rounded-lg shadow-lg bg-gradient-to-r ${
                    exam.status === "Available"
                      ? "from-green-50 to-green-100 border border-green-300"
                      : "from-gray-100 to-gray-200 border border-gray-300"
                  }`}
                >
                  <h2 className="text-lg font-bold text-gray-800 mb-2">{exam.name}</h2>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Date:</span> {exam.date}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Time:</span> {exam.startTime} - {exam.endTime}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Expires on:</span> {exam.expireTime}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">{exam.description}</p>
                  <p className="text-sm text-gray-600 mt-2">
                    <span className="font-semibold">Questions:</span> {exam.totalQuestions}
                  </p>
                  <div className="mt-4 flex justify-between items-center">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        exam.status === "Available"
                          ? "bg-green-200 text-green-800"
                          : "bg-gray-300 text-gray-700"
                      }`}
                    >
                      {exam.status}
                    </span>
                    {exam.status === "Available" && (
                      <button className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition">
                        Start Exam
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
    
           
          </div>
        </AdminLayout>
  );
};

export default currentExam;
