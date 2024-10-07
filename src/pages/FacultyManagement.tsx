import { useState } from "react";
import FacultyCard from "@/components/shared/FacultyCard";
import { facultyList } from "@/data/faculty";

const FacultyManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const faculties = facultyList;

  // Function to handle input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Filter faculties based on search term
  const filteredFaculties = faculties.filter((faculty) => {
    const facultyName = faculty.facultyName?.toLowerCase() || "";
    const designation = faculty.designation?.toLowerCase() || "";
    const subjects = faculty.subjects.join(", ").toLowerCase(); // Join subjects into a single string for searching

    return (
      facultyName.includes(searchTerm.toLowerCase()) ||
      designation.includes(searchTerm.toLowerCase()) ||
      subjects.includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="pt-24 pb-16 md:mx-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Faculty Overview </h1>
      {/* Search Input */}
      <div className="mb-6 max-w-96 mx-auto">
        <input
          type="text"
          placeholder="Search by name, designation, or subject..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="border rounded-md p-2 w-full"
        />
      </div>

      {/* Faculty List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredFaculties.length > 0 ? (
          filteredFaculties.map((faculty) => (
            <FacultyCard key={faculty.facultyId} faculty={faculty} />
          ))
        ) : (
          <p>No faculty members found.</p>
        )}
      </div>
    </div>
  );
};

export default FacultyManagement;
