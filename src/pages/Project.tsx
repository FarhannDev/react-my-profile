import { MyComponentInstance } from '../components/ui/shared/MyComponent';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import HTML from '../components/ui/shared/HTML';
import projects from '../models/Project';

const Project: React.FC = () => {
  const [items, setItems] = useState<Project[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(
    () => searchParams.get('search') || ''
  );

  const onKeywordChangeHandler: (keyword: string) => void = (
    keyword: string
  ) => {
    setKeyword(keyword);
    setSearchParams({ search: keyword });
  };

  useEffect(() => {
    const projectList: Project[] = projects?.filter((filteredData) =>
      filteredData.name.toLowerCase().includes(keyword.toLowerCase())
    );

    setItems(projectList);
  }, [keyword]);

  return (
    <>
      <HTML
        title="Portofolio - Farhan"
        description="Daftar Pengalaman"
        keywords="Portofolio, Farhan, Farhan Portofolio"
      />

      <div className="portofolio-container ">
        <MyComponentInstance.Heading title="Project" />
        <hr className="text-secondary" />

        <MyComponentInstance.ProjectSearchInput
          placeholder="Search project..."
          keyword={keyword}
          keywordChange={onKeywordChangeHandler}
        />
        <MyComponentInstance.ProjectListItem items={items} />
      </div>
    </>
  );
};

export default Project;
