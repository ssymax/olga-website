import React from 'react';
import PageWrapper from 'components/molecules/PageWrapper/PageWrapper';
import PageHeader from 'components/atoms/PageHeader/PageHeader';

const NotFoundPage = () => (
  <>
    <PageHeader>404</PageHeader>
    <PageWrapper>
      <h1>404 - nie ma takiej strony :(</h1>
    </PageWrapper>
  </>
);

export default NotFoundPage;
