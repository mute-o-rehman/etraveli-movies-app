import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const MovieHeader = ({
  handleOrderByChange,
  handleFilterChange,
  orderBy,
  filterText,
}) => {
  return (
    <div className="row mb-4">
      <div className="col-xs-12 col-md-2 mb-2">
        <Form.Group controlId="orderBy">
          <Form.Select
            value={orderBy}
            onChange={(e) => handleOrderByChange(e.target.value)}
          >
            <option value="episode_id">Sort By ...</option>
            <option value="release_date">Year</option>
            <option value="episode_id">Episode</option>
          </Form.Select>
        </Form.Group>
      </div>
      <div className="col-xs-12 col-md-10 mb-2 movie-search-bar">
        <Form.Group controlId="filterText">
          <InputGroup>
            <FontAwesomeIcon icon={faSearch} />
            <Form.Control
              type="text"
              placeholder="Type to filter"
              value={filterText}
              onChange={(e) => handleFilterChange(e.target.value)}
            />
          </InputGroup>
        </Form.Group>
      </div>
    </div>
  );
};

export default MovieHeader;
