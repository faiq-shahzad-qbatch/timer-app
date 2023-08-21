import "react-tooltip/dist/react-tooltip.css";

import React from "react";
import { Tooltip } from "react-tooltip";
import _ from "lodash";

const Card = ({
  firstName,
  lastName,
  email,
  title,
  body,
  reactions,
  comments,
}) => {
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
  ];

  return (
    <>
      <div className="m-4 max-w-xs rounded-md border-[1px] border-black bg-gradient-to-r from-blue-200 to-slate-300 p-4 shadow-md md:max-w-md">
        <div className="flex items-center space-x-4">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-full ${_.sample(
              colors,
            )} text-white`}
          >
            {_.first(firstName)}
            {_.first(lastName)}
          </div>

          <div>
            <Tooltip id={email} place="top" type="dark" />
            <p
              className="text-lg font-semibold"
              data-tooltip-id={email}
              data-tooltip-content={email}
            >
              {firstName} {lastName}
            </p>
          </div>
        </div>

        <div className="my-2">
          <p className="my-2 text-xl font-semibold">{title}</p>
          <p className="text-gray-700">{body}</p>
        </div>

        <hr />

        <div className="my-2 flex items-center justify-between">
          <div className="text-gray-600">
            <span>Reactions: {reactions ?? 0}</span>
          </div>
          <div className="text-gray-600">
            <span>Comments: {comments ?? 0}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
