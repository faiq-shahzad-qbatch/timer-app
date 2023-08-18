import React from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import _ from "lodash";

const Card = (props) => {
  const firstName = props.firstName;
  const lastName = props.lastName;
  const email = props.email;
  const title = props.title;
  const body = props.body;
  const reactions = props.reactions;
  const comments = props.comments;

  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-pink-500",
    "bg-purple-500",
    "bg-indigo-500",
    "bg-teal-500",
    "bg-orange-500",
    "bg-gray-500",
  ];

  return (
    <div className="my-2 max-w-xs rounded-lg border-[1px] border-black bg-white p-4 shadow-md md:max-w-md">
      {/* User Details */}
      <div className="mb-4 flex items-center space-x-4">
        {/* Initials */}
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-full ${_.sample(
            colors,
          )} font-semibold text-white`}
        >
          {_.first(firstName)}
          {_.first(lastName)}
        </div>
        {/* Name */}
        <div>
          <p
            className="text-lg font-semibold"
            data-tooltip-id={email}
            data-tooltip-content={email}
          >
            {firstName} {lastName}
          </p>
          <Tooltip id={email} place="top" type="dark" />
        </div>
      </div>

      {/* Post Content */}
      <div className="mb-2">
        <p className="mb-2 text-xl font-semibold">{title}</p>
        <p className="text-gray-700">{body}</p>
      </div>

      <hr />

      {/* Reactions + Comments */}
      <div className="mt-4 flex justify-between">
        <div className="text-gray-600">
          <span>Reactions: {reactions ?? 0}</span>
        </div>
        <div className="text-gray-600">
          <span>Comments: {comments ?? 0}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
