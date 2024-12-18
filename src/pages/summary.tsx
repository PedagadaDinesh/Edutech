/* eslint-disable @next/next/no-img-element */
import { AdminLayout } from "@/layouts";
import { useState } from "react";
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";

const HighestScores = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortAttribute, setSortAttribute] = useState("score");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const subjects = [
    { name: "Mathematics", code: "MTH101", score: 98, remarks: "Excellent" },
    { name: "Physics", code: "PHY102", score: 92, remarks: "Very Good" },
    { name: "Chemistry", code: "CHM103", score: 89, remarks: "Good" },
    { name: "Biology", code: "BIO104", score: 95, remarks: "Outstanding" },
    { name: "English", code: "ENG105", score: 88, remarks: "Good" },
    { name: "History", code: "HIS106", score: 94, remarks: "Excellent" },
    { name: "Geography", code: "GEO107", score: 91, remarks: "Very Good" },
    { name: "Computer Science", code: "CSE108", score: 97, remarks: "Outstanding" },
    { name: "Economics", code: "ECO109", score: 90, remarks: "Very Good" },
    { name: "Political Science", code: "POL110", score: 87, remarks: "Good" },
  ];

  // Filter exams based on search term
  const filteredExams = subjects.filter(exam =>
    exam.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort exams based on selected attribute
  const sortedExams = [...filteredExams].sort((a, b) => {
    if (sortAttribute === "name") return a.name.localeCompare(b.name);
    if (sortAttribute === "score") return b.score - a.score; // Descending sort
    return 0;
  });

  // Pagination
  const indexOfLastExam = currentPage * itemsPerPage;
  const indexOfFirstExam = indexOfLastExam - itemsPerPage;
  const currentExams = sortedExams.slice(indexOfFirstExam, indexOfLastExam);

  // Get top 3 scores
  const topThreeScores = sortedExams.slice(0, 3);

  // Summary of top 3 scores with details
  const summary = topThreeScores.map((exam, index) => ({
    rank: index + 1,
    subjectCode: exam.code,
    subjectName: exam.name,
    marks: exam.score,
    remarks: exam.remarks,
    description: `Student is performing ${exam.remarks} in ${exam.name} with a high score of ${exam.score}.`
  }));

  // Aggregate total score for top 3
  const summaryScore = topThreeScores.reduce((acc, exam) => acc + exam.score, 0);

  return (
    <AdminLayout>
      <div className="mx-2 md:mx-4 lg:mx-5 2xl:mx-6">
        <h1 className="text-2xl font-bold text-gray-700 mb-5">
          Highest Scores in All Subjects
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
              <option value="score">Sort by Score</option>
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
              Page {currentPage} of {Math.ceil(subjects.length / itemsPerPage)}
            </h1>

            <button
              onClick={() => setCurrentPage(prev => prev + 1)}
              disabled={currentPage * itemsPerPage >= subjects.length}
              className="px-2.5 py-1 border-2 border-primary rounded-lg hover:bg-gray-300 transition disabled:opacity-50"
            >
              <HiOutlineArrowSmRight className="h-6 w-6" />
            </button>
          </div>

        </div>
        <div className="overflow-x-auto border">
          <table className="w-full border-collapse bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-primary text-left">
                <th className="p-4 text-white text-sm font-semibold">#</th>
                <th className="p-4 text-white text-sm font-semibold">Subject Code</th>
                <th className="p-4 text-white text-sm font-semibold">Subject Name</th>
                <th className="p-4 text-white text-sm font-semibold">Marks</th>
                <th className="p-4 text-white text-sm font-semibold">Remarks</th>
              </tr>
            </thead>
            <tbody>
              {currentExams.map((subject, index) => (
                <tr
                  key={index}
                  className={`transition-all ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  }`}
                >
                  <td className="p-4 text-gray-800 text-sm">{index + 1}</td>
                  <td className="p-4 text-gray-800 text-sm">{subject.code}</td>
                  <td className="p-4 text-gray-800 text-sm">{subject.name}</td>
                  <td className="p-4 text-gray-800 text-sm font-semibold">
                    {subject.score}
                  </td>
                  <td className="p-4 text-gray-600 text-sm">{subject.remarks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-5">
          <h2 className="text-xl font-bold text-gray-700">Summary of Top 3 Scores</h2>
          <p className="text-gray-800">Total Score: {summaryScore}</p>
          <ul>
            {summary.map((item, index) => (
              <li key={index} className="text-gray-700 mt-2">
                <strong>Rank {item.rank}</strong>: {item.subjectName} (Code: {item.subjectCode}) - 
                {item.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AdminLayout>
  );
};

export default HighestScores;
