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

      <section className="section-portofolio pb-5 ">
        <MyComponentInstance.Heading title="Daftar Proyek" />
        <MyComponentInstance.ProjectSearchInput
          placeholder="Cari proyek..."
          keyword={keyword}
          keywordChange={onKeywordChangeHandler}
        />
        <MyComponentInstance.ProjectListItem items={items} />
      </section>
    </>
  );
};

export default Project;
