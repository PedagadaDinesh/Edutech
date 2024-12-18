import React, { useState } from "react";
import { AdminLayout } from "@/layouts";
import { v4 as uuidv4 } from "uuid";
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";

const generateRandomScores = () => {
  const subjects = [
    "Mathematics", "Physics", "Chemistry", "Biology", "English",
    "History", "Geography", "Computer Science", "Economics", "Political Science"
  ];

  const randomScores = Array.from({ length: 25 }, () => ({
    id: uuidv4(),
    name: subjects[Math.floor(Math.random() * subjects.length)],
    code: `SUB${Math.floor(Math.random() * 100)}`,
    score: Math.floor(Math.random() * (91 - 60) + 60), // Random score between 60 and 90
    remarks: Math.random() > 0.5 ? "Good" : "Excellent"
  }));

  return randomScores;
};

const ViewScores = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortAttribute, setSortAttribute] = useState("score");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const scores = generateRandomScores();

  const filteredScores = scores.filter(score =>
    score.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedScores = [...filteredScores].sort((a, b) => {
    if (sortAttribute === "name") return a.name.localeCompare(b.name);
    if (sortAttribute === "score") return b.score - a.score;
    return 0;
  });

  const indexOfLastScore = currentPage * itemsPerPage;
  const indexOfFirstScore = indexOfLastScore - itemsPerPage;
  const currentScores = sortedScores.slice(indexOfFirstScore, indexOfLastScore);

  return (
    <AdminLayout>
      <div className="mx-2 md:mx-4 lg:mx-5 2xl:mx-6">
        <h1 className="text-2xl font-bold text-gray-700 mb-5">
          All Subject Scores
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
              Page {currentPage} of {Math.ceil(scores.length / itemsPerPage)}
            </h1>

            <button
              onClick={() => setCurrentPage(prev => prev + 1)}
              disabled={currentPage * itemsPerPage >= scores.length}
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
                <th className="p-4 text-white text-sm font-semibold">Score</th>
                <th className="p-4 text-white text-sm font-semibold">Remarks</th>
              </tr>
            </thead>
            <tbody>
              {currentScores.map((score, index) => (
                <tr
                  key={score.id}
                  className={`transition-all ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  }`}
                >
                  <td className="p-4 text-gray-800 text-sm">{index + 1}</td>
                  <td className="p-4 text-gray-800 text-sm">{score.code}</td>
                  <td className="p-4 text-gray-800 text-sm">{score.name}</td>
                  <td className="p-4 text-gray-800 text-sm font-semibold">
                    {score.score}
                  </td>
                  <td className="p-4 text-gray-600 text-sm">{score.remarks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default ViewScores;
