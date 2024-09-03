import * as React from 'react';
import { InputGroup, Form } from 'react-bootstrap';

type ProjectSearchInputProps = {
  keyword: string;
  keywordChange: (value: string) => void;
  placeholder: string;
};

const ProjectSearchInput: React.FC<ProjectSearchInputProps> = ({
  placeholder,
  keyword,
  keywordChange,
}) => {
  return (
    <>
      <div className="portofolio-search-container">
        <InputGroup className="portofolio-search-item ">
          <Form.Control
            type="search"
            value={keyword}
            onChange={(e) => keywordChange(e.target.value)}
            placeholder={placeholder}
            aria-label={placeholder}
            className="portofolio-search-input"
          />
        </InputGroup>
      </div>
    </>
  );
};

export default ProjectSearchInput;
