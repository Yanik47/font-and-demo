import React, { useState } from "react";
import backBg from "/src/assets/deconstructed2.svg";
import Header from "../components/header";
import Footer from "../components/footer";
import Plan from "../components/createForm/plan";
import Teachers from "../components/createForm/teachers";
import Work from "../components/createForm/work";
import Talents from "../components/createForm/talents";
import ContactUsForm from "../components/contactUsForm";

function createForm() {
  const [image, setImage] = useState(null);
  const [hero, setHero] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [count, setCount] = useState(0);
  const [elements, setElements] = useState([]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleHeroChange = (e) => {
    const file = e.target.files[0];
    setHero(file);
  };

  const handleSubmit = () => {
    const courseData = {
      image,
      hero,
      title,
      description,
      elements,
    };
    console.log("Submitted Course Data:", courseData);
    alert("Course successfully submitted!");
  };

  const handleClear = () => {
    setImage(null);
    setHero(null);
    setTitle("");
    setDescription("");
    setCount(0);
    setElements([]);
    alert("Form cleared!");
  };

  const handleGenerate = () => {
    const newElements = Array.from({ length: count }, (_, index) => ({
      id: index,
      field1: "",
      field2: "",
    }));
    setElements(newElements);
  };

  const handleFieldChange = (id, fieldName, value) => {
    setElements((prev) =>
      prev.map((el) => (el.id === id ? { ...el, [fieldName]: value } : el))
    );
  };


  return (
    <div
      className="bg-contain bg-center flex flex-col justify-center"
      style={{ backgroundImage: `url(${backBg})`, backgroundColor: "#f1f5f9" }}
    >
      <Header />
      <div className="flex flex-col mt-6">
        <div className="flex flex-col md:flex-row justify-around items-center md:items-start w-full">
          <form
            onSubmit={handleSubmit}
            className="max-w-lg p-10 mt-6 mr-2 bg-white rounded-xl shadow-xl w-11/12 md:w-2/3"
          >
            <h1 className="text-3xl pb-5 font-excalifont font-bold">
              Main Info
            </h1>
            {/* Add Hero */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-left pl-1 pb-3 md:pb-2">
                Add Hero
              </h1>
              <input
                type="file"
                id="hero"
                accept="hero/*"
                onChange={handleHeroChange}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
              />
            </div>

            {/* Add Image */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-left pl-1 pb-3 md:pb-2">
                Add Image
              </h1>
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={handleImageChange}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
              />
            </div>

            {/* Title */}
            <div className="mb-4">
              <h2 className="text-xl font-bold text-left pl-1 pb-3 md:pb-2">
                Title
              </h2>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter title"
              />
            </div>

            {/* Description */}
            <div className="mb-4">
              <h2 className="text-xl font-bold text-left pl-1 pb-3 md:pb-2">
                Description
              </h2>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter description"
              ></textarea>
            </div>

            {/* Number Input */}
            <div className="mb-4 flex flex-col items-start">
              <h2 className="text-xl font-bold text-left pl-1 pb-3 md:pb-2">
                Enter number of graph elements
              </h2>
              <input
                type="number"
                id="count"
                value={count}
                onChange={(e) => setCount(Number(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter number"
              />
              <button
                type="button"
                onClick={handleGenerate}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Generate
              </button>
            </div>

            {/* Generated Elements */}
            {/* Generated Elements */}
            <div className="flex flex-col justify-start">
              {elements.map((el) => (
                <div
                  key={el.id}
                  className="flex-col mb-4 items-start justify-start text-left"
                >
                  <h1 className="text-xl font-bold pb-3">
                    Graph elem {el.id + 1}
                  </h1>
                  <textarea
                    value={el.field1}
                    onChange={(e) =>
                      handleFieldChange(el.id, "field1", e.target.value)
                    }
                    className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full min-h-[100px] break-words resize-y mb-4"
                    placeholder={`Description (${el.id + 1})`}
                  ></textarea>
                  <input
                    type="text"
                    value={el.field2}
                    onChange={(e) =>
                      handleFieldChange(el.id, "field2", e.target.value)
                    }
                    className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder={`Value (${el.id + 1})`}
                  />
                </div>
              ))}
            </div>

            {/* Submit */}
            <div>
              <button className=" px-4 py-2 bg-blue-500 text-white rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                Submit
              </button>
            </div>
          </form>
          <div className="md:mr-6 mt-8 md:mt-6 w-11/12 md:w-2/5">
            <Plan />
          </div>
        </div>
        {/* Other Sections */}
        <div className="flex flex-col md:flex-row justify-around mx-6 my-6 ">
          <Teachers />
          <Work />
          <Talents />
        </div>

        {/* Submit and Clear Buttons */}
        <div className="flex justify-around mt-6">
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Submit
          </button>
          <button
            onClick={handleClear}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Clear
          </button>
        </div>
      </div>
      <ContactUsForm />
      <Footer />
    </div>
  );
}
export default createForm;
