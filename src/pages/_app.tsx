import '../styles/globals.css';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import styled from '@emotion/styled';
// import {LazyMotion, domAnimation} from 'framer-motion';

const ThemeProvider = dynamic(() => import('@app/utils/context/colorMode'), {
  ssr: false,
});

// import ThemeProvider from '@app/utils/context/colorMode';

import FeatureToggle from '@app/components/FeatureToggle/FeatureToggle';


// import {Provider} from 'react-redux';
import { DefaultSeo } from 'next-seo';
import seoConfig from '@app/utils/seo.config';

// import {store} from '@app/store/store';
import Navbar from '@app/components/Layout/Navbar';
import { ImageCacheProvider } from '@app/utils/hooks/useProgressiveImg';

const PageWrapper = styled.div`
  padding-top: 3.5rem;
  margin-top: 0rem;
  display: grid;
  grid-template-rows: 1fr 4rem;
`;

// const NavWrap = styled.div`
//   grid-row: 1 / 2;
// `;

const ContentWrap = styled.div`
  grid-row: 1 / 2;
`;

function MyApp({ Component, pageProps, router }: AppProps) {
  const enabledFeatures = ['home', 'blog', 'projects'];
  return (
    <>
      <DefaultSeo {...seoConfig} />
      <FeatureToggle enabledFeatures={enabledFeatures}>
        {/* <Provider store={store}> */}
        <ImageCacheProvider>
          <ThemeProvider>
            <Navbar className="h-14" />
          </ThemeProvider>

          {/* <LazyMotion features={domAnimation}> */}
          <PageWrapper>
            <ContentWrap>
              <main className="z-0 max-h-full mt-8 mb-16 overflow-hidden">
                <Component {...pageProps} key={router.route} />
              </main>
            </ContentWrap>
          </PageWrapper>
          {/* </LazyMotion> */}
        </ImageCacheProvider>
        {/* </Provider> */}
      </FeatureToggle>
    </>
  );
}
export default MyApp;
