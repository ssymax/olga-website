import React from 'react';
import styled from 'styled-components';
import PageWrapper from 'components/molecules/PageWrapper/PageWrapper';
import PageHeader from 'components/atoms/PageHeader/PageHeader';
import SpanText from 'components/atoms/SpanText/SpanText';

const StyledPageWrapper = styled.div`
  display: flex;
  margin: 10px;
`;

const AboutMePage = () => {
  return (
    <>
      <PageHeader>o mnie</PageHeader>
      <PageWrapper>
        <StyledPageWrapper>
          <SpanText>
            Od blisko 10 lat pracuję z młodzieżą i ich rodzinami – w kierunku wzmacniania więzi
            rodzinnych oraz nabywania przez młode osoby nowych umiejętności, które umożliwią im
            lepsze radzenie sobie z przeżywanymi trudnościami. Prowadzę również poradnictwo
            psychologiczne oraz terapię osób dorosłych. Zachęcam wszystkich klientów do przyjmowania
            postawy uważności na siebie, na własne potrzeby i emocje; do praktykowania troski wobec
            samego siebie, jako niezbędnego elementu równowagi psychicznej. Towarzyszę swoim
            klientom procesie zmiany i osiągania celów terapeutycznych i osobistych. Podejmuję
            działania na rzecz promocji zdrowia psychicznego i rozwoju osobistego. Prowadzę
            autorskie warsztaty budowania kobiecej mocy, warsztaty kompetencji społecznych dla
            różnych grup docelowych, zajęcia socjoterapeutyczne dla młodzieży oraz grupy wsparcia
            dla osób dorosłych.
          </SpanText>
        </StyledPageWrapper>
      </PageWrapper>
    </>
  );
};

export default AboutMePage;
