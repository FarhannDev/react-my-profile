import Loadable from 'react-loadable';

function MyComponent() {
  const Heading = Loadable({
    loader: () => import('./Heading').then((module) => module.default),
    loading: () => null,
  });
  const TopMenuNavigation = Loadable({
    loader: () =>
      import('./navbar/TopNavigation').then((module) => module.default),
    loading: () => null,
  });
  const BottomNavigation = Loadable({
    loader: () =>
      import('./navbar/BottomNavigation').then((module) => module.default),
    loading: () => null,
  });
  const ButtonActionDefault = Loadable({
    loader: () =>
      import('./button/ButtonActionDefault').then((module) => module.default),
    loading: () => null,
  });
  const ButtonActionDownload = Loadable({
    loader: () =>
      import('./button/ButtonActionDownload').then((module) => module.default),
    loading: () => null,
  });
  const ButtonActionRedirect = Loadable({
    loader: () =>
      import('./button/ButtonActionRedirect').then((module) => module.default),
    loading: () => null,
  });
  const ButtonAction = Loadable({
    loader: () =>
      import('./button/ButtonAction').then((module) => module.default),
    loading: () => null,
  });

  const ProfileHeading = Loadable({
    loader: () =>
      import('../v1/profile/ProfileHeading').then((module) => module.default),
    loading: () => null,
  });
  const ProfileInfo = Loadable({
    loader: () =>
      import('../v1/profile/ProfileInfo').then((module) => module.default),
    loading: () => null,
  });
  const ProfileInfoAboutMe = Loadable({
    loader: () =>
      import('../v1/profile/ProfileInfoAboutMe').then(
        (module) => module.default
      ),
    loading: () => null,
  });
  const ProfileSummary = Loadable({
    loader: () =>
      import('../v1/profile/ProfileSummary').then((module) => module.default),
    loading: () => null,
  });
  const EducationItem = Loadable({
    loader: () =>
      import('../v1/education/EducationItem').then((module) => module.default),
    loading: () => null,
  });
  const EducationItemList = Loadable({
    loader: () =>
      import('../v1/education/EducationItemList').then(
        (module) => module.default
      ),
    loading: () => null,
  });
  const ExperienceItem = Loadable({
    loader: () =>
      import('../v1/experience/ExperienceItem').then(
        (module) => module.default
      ),
    loading: () => null,
  });
  const ExperienceListItem = Loadable({
    loader: () =>
      import('../v1/experience/ExperienceListItem').then(
        (module) => module.default
      ),
    loading: () => null,
  });
  const ProjectItem = Loadable({
    loader: () =>
      import('../v1/portofolio/ProjectItem').then((module) => module.default),
    loading: () => null,
  });
  const ProjectListItem = Loadable({
    loader: () =>
      import('../v1/portofolio/ProjectListItem').then(
        (module) => module.default
      ),
    loading: () => null,
  });
  const SertifikasiItem = Loadable({
    loader: () =>
      import('../v1/certificate/SertifikasiItem').then(
        (module) => module.default
      ),
    loading: () => null,
  });
  const SertifikasiListItem = Loadable({
    loader: () =>
      import('../v1/certificate/SertifikasiListItem').then(
        (module) => module.default
      ),
    loading: () => null,
  });

  const ProjectSearchInput = Loadable({
    loader: () =>
      import('../v1/portofolio/ProjectSearchInput').then(
        (module) => module.default
      ),
    loading: () => null,
  });
  const ProjectSearchEmpty = Loadable({
    loader: () =>
      import('../v1/portofolio/ProjectSearchEmpty').then(
        (module) => module.default
      ),
    loading: () => null,
  });

  return {
    Heading,
    TopMenuNavigation,
    BottomNavigation,
    ButtonAction,
    ButtonActionDefault,
    ButtonActionDownload,
    ButtonActionRedirect,
    ProfileInfo,
    ProfileHeading,
    ProfileInfoAboutMe,
    ProfileSummary,
    EducationItem,
    EducationItemList,
    ExperienceItem,
    ExperienceListItem,
    ProjectItem,
    ProjectListItem,
    SertifikasiItem,
    SertifikasiListItem,
    ProjectSearchEmpty,
    ProjectSearchInput,
  };
}

export const MyComponentInstance = MyComponent();

export default MyComponent;
