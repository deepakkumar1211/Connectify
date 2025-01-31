import React from "react";
import NoUser from '../../assets/no-user.jpg';

const people = [
  {
    profileImage:
      "https://media.istockphoto.com/id/864516870/photo/young-woman-photographing-the-autumn-season.jpg?s=612x612&w=0&k=20&c=M3G2SwKJ15zolsSaFABsneLitdWXCrrJ3LkTEKnIOys=",
    name: "Bhupendra Nirmalkar",
    // name: "RajKumar Dewangan",
    time: "1 month ago",
  },
  {
    name: "Bhupendra26",
    time: "2 days ago",
  },
  {
    profileImage:
      "https://media.istockphoto.com/id/864516870/photo/young-woman-photographing-the-autumn-season.jpg?s=612x612&w=0&k=20&c=M3G2SwKJ15zolsSaFABsneLitdWXCrrJ3LkTEKnIOys=",
    name: "Bhupendra Nirmalkar",
    // name: "Deepak Sahu",
    time: "2 weeks ago",
  },
  {
    profileImage:
      "https://media.istockphoto.com/id/864516870/photo/young-woman-photographing-the-autumn-season.jpg?s=612x612&w=0&k=20&c=M3G2SwKJ15zolsSaFABsneLitdWXCrrJ3LkTEKnIOys=",
    name: "Bhupendra Nirmalkar",
    // name: "RajKumar Dewangan",
    time: "1 month ago",
  },
  {
    name: "Bhupendra Nirmalkar",
    time: "2 days ago",
  },
  {
    profileImage:
      "https://media.istockphoto.com/id/864516870/photo/young-woman-photographing-the-autumn-season.jpg?s=612x612&w=0&k=20&c=M3G2SwKJ15zolsSaFABsneLitdWXCrrJ3LkTEKnIOys=",
    name: "Bhupendra Nirmalkar",
    // name: "Deepak Sahu",
    time: "2 weeks ago",
  }
];

// MAIN COMPONENT STARTS HERE
const FindPeople = () => {
  return (
    <>
      <div className="find-people mt-5 pb-2 w-fit border rounded-lg shadow-lg">
        <div className="rounded-t-lg">
          <div className="p-5 flex justify-between text-base font-semibold  border-b">
            <h2 className="text-gray-800">Find People</h2>
            <a href="#" className="text-primaryColor">
              See all
            </a>
          </div>
        </div>
        {people.map((person, index) => {
          return <PersonCard person={person} index={index} key={index}/>;
        })}
      </div>
      <div className="my-friends mt-5 pb-2 w-fit border rounded-lg shadow-lg">
        <div className="rounded-t-lg">
          <div className="p-5 flex justify-between text-base font-semibold  border-b">
            <h2 className="text-gray-800">My Friends</h2>
            <a href="#" className="text-primaryColor">
              See all
            </a>
          </div>
        </div>
        {people.map((person, index) => {
          return <PersonCard person={person} index={index} key={index}/>;
        })}
      </div>
    </>
  );
};

export default FindPeople;

const PersonCard = ({ person, index }) => {
  return (
    <li className="profile mx-10 my-2 p-3 px-5 list-none border rounded-md shadow-sm">
      <div>
        <div className="flex items-center justify-start gap-2">
          <img
            className="w-12 h-12 object-cover rounded-full"
            src={person.profileImage || NoUser}
          />
          <div className="text-start ml-2">
            <h3 className="text-sm text-gray-800 font-bold">
              {person.name || "Anonymous"}
              <span className="text-xs text-gray-400 block">
                {person.time || "new account.."}
              </span>
            </h3>
          </div>
        </div>
      </div>
      <div className="buttons mt-2 flex items-center justify-center gap-4 *:w-full *:px-3 *:py-1 *:rounded-md hover:*:shadow-md">
        <button className="border border-gray-500 bgwhihte
         text-gray-500 text-xs font-semibold duration-200">
          Ignore
        </button>
        <button className="border-2 border-primaryColor bg-primaryColor text-white text-xs font-bold duration-200">
          Follow
        </button>
      </div>
    </li>
  );
};
