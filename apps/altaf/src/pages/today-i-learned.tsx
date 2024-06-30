import TILContents from '@/contents/TIL';
import HeaderImage from '@/contents/TIL/HeaderImage';
import Page from '@/contents-layouts/Page';

function TIL() {
  return (
    <Page
      frontMatter={{
        title: 'Today I Learned',
        description: `Explore quick insights and updates on cybersecurity, DevOps, web development, and front-end technologies.`,
      }}
      headerImage={<HeaderImage />}
    >
      <TILContents />
    </Page>
  );
}

export default TIL;
