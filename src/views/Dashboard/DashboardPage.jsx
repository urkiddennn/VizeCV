import React, { useState } from "react";
import { jsPDF } from "jspdf";

function DashboardPage() {
  const [resumeData, setResumeData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    experience: "",
    skills: "",
    profilePicture: null,
  });

  const [selectedStyle, setSelectedStyle] = useState("style1");
  const [selectedTemplate, setSelectedTemplate] = useState("template1");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setResumeData((prevData) => ({
          ...prevData,
          profilePicture: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const exportToPDF = () => {
    const doc = new jsPDF();

    if (resumeData.profilePicture) {
      const img = resumeData.profilePicture;
      doc.addImage(img, "JPEG", 15, 15, 40, 40); // Customize the position and size of the image
    }

    doc.setFontSize(22);
    doc.text(resumeData.name || "Your Name", 15, 70);

    doc.setFontSize(16);
    doc.text(`Email: ${resumeData.email || "Email Address"}`, 15, 80);
    doc.text(`Phone: ${resumeData.phone || "Phone Number"}`, 15, 90);

    doc.setFontSize(14);
    doc.text("Education:", 15, 110);
    doc.text(resumeData.education || "Your education details...", 15, 120);

    doc.text("Work Experience:", 15, 140);
    doc.text(resumeData.experience || "Your work experience...", 15, 150);

    doc.text("Skills:", 15, 170);
    doc.text(resumeData.skills || "Your skills...", 15, 180);

    doc.save("resume.pdf");
  };

  return (
    <div className="w-full h-screen flex">
      <div className="w-1/2 h-full p-8 bg-gray-100 overflow-y-auto">
        <h2 className="text-2xl font-semibold mb-4">Enter Your Information</h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={resumeData.name}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={resumeData.email}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={resumeData.phone}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <textarea
            name="education"
            placeholder="Education Details"
            value={resumeData.education}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <textarea
            name="experience"
            placeholder="Work Experience"
            value={resumeData.experience}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <textarea
            name="skills"
            placeholder="Skills"
            value={resumeData.skills}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <div>
            <label className="block mb-2 font-semibold">
              Upload Profile Picture
            </label>
            <input
              type="file"
              onChange={handleImageUpload}
              className="border p-2 rounded"
            />
          </div>
        </form>

        {/* Style Selector */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Choose Resume Style</h3>
          <select
            value={selectedStyle}
            onChange={(e) => setSelectedStyle(e.target.value)}
            className="border p-2 rounded w-full"
          >
            <option value="style1">Classic</option>
            <option value="style2">Modern</option>
            <option value="style3">Creative</option>
          </select>
        </div>

        {/* Template Chooser */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Choose Template</h3>
          <select
            value={selectedTemplate}
            onChange={(e) => setSelectedTemplate(e.target.value)}
            className="border p-2 rounded w-full"
          >
            <option value="template1">Template 1</option>
            <option value="template2">Template 2</option>
            <option value="template3">Template 3</option>
          </select>
        </div>

        <div className="mt-6">
          <button
            onClick={exportToPDF}
            className="text-md font-semibold text-white bg-green-500 py-4 px-10 rounded-full"
          >
            Download PDF
          </button>
        </div>
      </div>

      <div className="w-1/2 h-full p-8 bg-white overflow-y-auto">
        <h2 className="text-2xl font-semibold mb-4">Resume Preview</h2>
        <div
          className={`border p-4 rounded shadow-md ${
            selectedStyle === "style1"
              ? "text-black"
              : selectedStyle === "style2"
              ? "text-blue-600"
              : "text-purple-600"
          }`}
        >
          {resumeData.profilePicture && (
            <div className="mb-4">
              <img
                src={resumeData.profilePicture}
                alt="Profile"
                className="w-24 h-24 rounded-full mx-auto"
              />
            </div>
          )}
          <h1 className="text-xl font-bold">
            {resumeData.name || "Your Name"}
          </h1>
          <p className="text-sm">{resumeData.email || "Email Address"}</p>
          <p className="text-sm">{resumeData.phone || "Phone Number"}</p>
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Education</h3>
            <p>{resumeData.education || "Your education details..."}</p>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Work Experience</h3>
            <p>{resumeData.experience || "Your work experience..."}</p>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Skills</h3>
            <p>{resumeData.skills || "Your skills..."}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
