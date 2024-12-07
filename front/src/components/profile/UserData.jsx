import React, { useState } from "react";
import AltPhoto from "../../assets/profilePhoto.svg";

function UserData({ personal, user, achievements }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({
    email: user.email,
    phone: user.phone,
    password: user.password,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const saveChanges = () => {
    // Здесь можно добавить логику сохранения, например, отправку данных на сервер
    setIsEditing(false);
    console.log("Сохраненные данные:", editedUser);
  };

  return (
    <section className="flex flex-col md:flex-row mx-auto bg-slate-100 mt-0 p-6">
      {/* Left - Avatar and Achievements */}
      <div className="flex flex-col items-center mb-6 md:mb-0 md:w-5/12 bg-white py-4 px-6 rounded-lg shadow-lg">
        <img
          src={user.profilePictureUrl || AltPhoto}
          alt="User Profile"
          className="mb-4 w-full"
          onError={(e) => {
            e.target.src = AltPhoto;
          }}
        />
        <h2 className="text-lg font-semibold">{`${user.firstName} ${user.lastName}`}</h2>
        <p>
          <strong>Location:</strong> {user.location}
        </p>
        <p className="md:hidden text-gray-500 text-center mt-2">{user.bio}</p>
        <div className="mt-4"></div>
        <div className="md:hidden">
          <h3 className="font-semibold mt-6">Achievements</h3>
          <div className="flex flex-row items-center justify-around text-center mt-2 ">
            {achievements.map((achievement) => (
              <div
                key={achievement.achievementId}
                className="flex flex-col items-center text-center"
              >
                <img
                  src={achievement.image}
                  alt="achivement"
                  className="w-14 h-14 mx-5 md:mx-0 rounded-full"
                ></img>
                <p className="text-sm">{achievement.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right - User Details */}
      <div className="flex flex-col justify-around w-auto md:w-2/3 px-4 bg-white rounded-lg shadow-lg md:ml-6">
        <div>
          <h2 className="text-lg font-semibold my-4">Profile</h2>
          <p className="hidden md:block text-gray-500 text-left mt-2">{user.bio}</p>
        </div>
        <div className="flex flex-col space-y-2 pt-4">
          <div className="flex flex-col justify-start items-start">
            <p className="w-[25%] md:w-[15%] text-left font-semibold">
              Username:
            </p>
            {isEditing ? (
              <input
                type="text"
                name="username"
                value={editedUser.username}
                onChange={handleInputChange}
                className="border px-2 py-2 w-full rounded-md"
              />
            ) : (
              <div className="p-2 w-full bg-gray-100 border border-gray-400 rounded-md text-md text-left">
                {personal.username}
              </div>
            )}
          </div>
          <div className="flex flex-col justify-start items-start">
            <p className="w-[25%] md:w-[15%] text-left font-semibold">Email:</p>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={editedUser.email}
                onChange={handleInputChange}
                className="border px-2 py-2 w-full rounded-md"
              />
            ) : (
              <div className="p-2 w-full bg-gray-100 border border-gray-400 rounded-md text-md text-left">
                {personal.email}
              </div>
            )}
          </div>
          <div className="flex flex-col justify-start items-start">
            <p className="w-[25%] md:w-[15%] text-left font-semibold">Phone:</p>
            {isEditing ? (
              <input
                type="text"
                name="phone"
                value={editedUser.phone}
                onChange={handleInputChange}
                className="border px-2 py-2 w-full rounded-md"
              />
            ) : (
              <div className="p-2 w-full bg-gray-100 border border-gray-400 rounded-md text-md text-left">
                {personal.phone}
              </div>
            )}
          </div>
          <div className="flex flex-col justify-start items-start">
            <p className="w-[25%] md:w-[15%] text-left font-semibold">
              Password:
            </p>
            {isEditing ? (
              <input
                type="password"
                name="password"
                value={editedUser.password}
                onChange={handleInputChange}
                className="border px-2 py-2 w-full rounded-md"
              />
            ) : (
              <div className="p-2 w-full bg-gray-100 border border-gray-400 rounded-md text-md text-left pt-3">
                **************
              </div>
            )}
          </div>
        </div>
        <div className="hidden md:block">
          <h3 className="font-semibold mt-6">Achievements</h3>
          <div className="flex flex-row items-center justify-around text-center mt-2 ">
            {achievements.map((achievement) => (
              <div
                key={achievement.achievementId}
                className="flex flex-col items-center text-center"
              >
                <img
                  src={achievement.image}
                  alt="achivement"
                  className="w-14 h-14 rounded-full"
                ></img>
                <p className="text-sm">{achievement.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end my-4 md:mt-4">
          {isEditing ? (
            <button
              onClick={saveChanges}
              className="bg-blue-400 text-white px-6 py-1 rounded mr-2"
            >
              Save
            </button>
          ) : (
            <button
              onClick={toggleEdit}
              className="bg-gray-300 text-white px-6 py-1 rounded mr-2"
            >
              Edit
            </button>
          )}
          {isEditing && (
            <button
              onClick={toggleEdit}
              className="bg-red-400 text-white px-6 py-1 rounded"
            >
              Cancel
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default UserData;
