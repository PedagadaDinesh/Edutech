import { AdminLayout } from '@/layouts';
import React from 'react';

interface UserProfileProps {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  state: string;
  city: string;
  country: string;
  profilePicture: string;
}

const ViewProfile: React.FC<UserProfileProps> = ({
  firstName,
  lastName,
  email,
  phoneNumber,
  state,
  city,
  country,
  profilePicture,
}) => {
  return (
    <AdminLayout>
     <div className='flex justify-center items-center'>
     <section className="flex p-4 w-[50%]">
        <div className="w-full bg-white rounded-3xl shadow-xl border p-8 relative overflow-hidden">
          {/* Decorative Gradient Background */}
          <div className="absolute inset-0 w-full h-40 bg-gradient-to-r from-gray-800 to-gray-200 rounded-t-3xl"></div>
          
          {/* Header Section */}
          <div className="relative flex items-center z-10">
            <div className="relative w-36 -mt-16">
              <img
                src="./profile.jpg"
                alt="Profile"
                className="w-36 h-36 rounded-full object-cover absolute left-[10.5rem] top-[5.2rem] border-4 border-white"
              />
            </div>
          </div>

          {/* Profile Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-56 text-gray-700">
                {[
                    { label: 'First Name', value: firstName },
                    { label: 'Last Name', value: lastName },
                    { label: 'Phone', value: phoneNumber },
                    { label: 'State', value: state },
                    { label: 'City', value: city },
                    { label: 'Country', value: country },
                ].map((item, index) => (
                    <div
                    key={index}
                    className="flex items-center justify-center gap-2 bg-gray-100 p-4 rounded-lg shadow-md transition duration-300"
                    >
                    <span className="font-semibold text-gray-600">{item.label}:</span>
                    <span className="text-gray-800">{item.value}</span>
                    </div>
                ))}
                </div>
          {/* Action Button */}
          <div className="flex justify-center mt-10 text-white">
            <a href="/edit" className="bg-gradient-to-r from-gray-800 to-gray-600 px-6 py-3 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
              Edit Profile
            </a>
          </div>
        </div>
      </section>
     </div>
    </AdminLayout>
  );
};

export default function App() {
  return (
    <ViewProfile
      firstName="John"
      lastName="Doe"
      email="john.doe@example.com"
      phoneNumber="+1234567890"
      state="California"
      city="Los Angeles"
      country="USA"
      profilePicture="https://via.placeholder.com/150"
    />
  );
}
