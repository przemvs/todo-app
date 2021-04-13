import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  dataItem: PropTypes.shape({
    id: PropTypes.number
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
};

export const ActionCell = ({ dataItem, handleClick, type }) => {
  return (
    <td>
      <button onClick={() => handleClick(dataItem)} type="button">
        {type}
      </button>
    </td>
  );
};

ActionCell.propTypes = propTypes;
