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

  return (
    <div className="my-2 max-w-md rounded-lg bg-white p-4 shadow-md">
      <div className="mb-4 flex items-center space-x-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 font-semibold text-white">
          {_.first(firstName)}
          {_.first(lastName)}
        </div>
        <div>
          <p
            className="text-lg font-semibold"
            data-tooltip-id={email}
            data-tooltip-content={email}
          >
            {firstName} {lastName}
          </p>
          <Tooltip id={email} place="bottom" type="dark" effect="solid" />
        </div>
      </div>

      <div>
        <p className="mb-2 text-xl font-semibold">{title}</p>{" "}
        <p className="text-gray-700">{body}</p>
      </div>

      <br />
      <hr />

      <div className="mt-4 flex justify-between">
        <div className="text-gray-600">
          <span className="mr-1">Reactions:</span>
          <span>{reactions ?? 0}</span>
        </div>
        <div className="text-gray-600">
          <span className="mr-1">Comments:</span>
          <span>{comments ?? 0}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
