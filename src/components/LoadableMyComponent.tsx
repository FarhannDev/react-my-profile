import Loadable from 'react-loadable';
import React from 'react';

// Komponen loading sementara
const Loading: React.FC = () => {
  return <div>Loading...</div>;
};

const Heading = Loadable({
  loader: () => import('./shared/Heading').then((module) => module.default),
  loading: () => null,
});

const ButtonAction = Loadable({
  loader: () =>
    import('./shared/ButtonAction').then((module) => module.default),
  loading: () => null,
});

const TopNavigation = Loadable({
  loader: () =>
    import('./ui/navbar/TopNavigation').then((module) => module.default),
  loading: () => null,
});
const AboutSummaryHeading = Loadable({
  loader: () =>
    import('./ui/aboutme/AboutSummaryHeading').then((module) => module.default),
  loading: () => null,
});
const AboutSummaryText = Loadable({
  loader: () =>
    import('./ui/aboutme/AboutSummaryText').then((module) => module.default),
  loading: () => null,
});

const ProjectItem = Loadable({
  loader: () =>
    import('./ui/portofolio/ProjectItem').then((module) => module.default),
  loading: Loading,
});

const ProjectListItem = Loadable({
  loader: () =>
    import('./ui/portofolio/ProjectListItem').then((module) => module.default),
  loading: Loading,
});

const ExperienceItem = Loadable({
  loader: () =>
    import('./ui/experience/ExperienceItem').then((module) => module.default),
  loading: Loading,
});

const ExperienceListItem = Loadable({
  loader: () =>
    import('./ui/experience/ExperienceListItem').then(
      (module) => module.default
    ),
  loading: Loading,
});
const SertifikasiItem = Loadable({
  loader: () =>
    import('./ui/aboutme/SertifikasiItem').then((module) => module.default),
  loading: Loading,
});
const SertifikasiListItem = Loadable({
  loader: () =>
    import('./ui/aboutme/SertifikasiListItem').then((module) => module.default),
  loading: Loading,
});
const EducationItem = Loadable({
  loader: () =>
    import('./ui/aboutme/EducationItem').then((module) => module.default),
  loading: Loading,
});
const EducationListItem = Loadable({
  loader: () =>
    import('./ui/aboutme/EducationListItem').then((module) => module.default),
  loading: Loading,
});

const AboutProfileInfo = Loadable({
  loader: () =>
    import('./ui/aboutme/AboutProfileInfo').then((module) => module.default),
  loading: Loading,
});

export {
  Heading,
  ButtonAction,
  TopNavigation,
  ProjectItem,
  ProjectListItem,
  ExperienceItem,
  ExperienceListItem,
  SertifikasiItem,
  SertifikasiListItem,
  EducationItem,
  EducationListItem,
  AboutSummaryHeading,
  AboutSummaryText,
  AboutProfileInfo,
};
