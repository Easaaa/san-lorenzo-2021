import { useState } from 'react';
import Header from '@/components/organism/Header';
import useLocale from 'hooks/useLocale';
import Seo from '@/components/Layout/Seo';
import ImgCentral from '@/components/molecules/ImgCentral';
import ColumnSection from '@/components/organism/ColumnSection';
import ActivitiesMenu from '@/components/molecules/ActivitiesMenu';
import Contact from '@/components/organism/Contact';
import Footer from '@/components/organism/Footer';

import Pizzoccolo3Img from 'assets/pizzoccolo.jpeg';

export default function Attività() {
  const { t } = useLocale();
  const [activity, setActivity] = useState('mountain');

  const { title, desc, img } = t.activities[activity];

  const columnSectionData = {
    data: {
      img: {
        url: img,
      },
      title,
      text: desc,
    },
  };

  const RenderSections = t.activities[activity].sections.map((el, index) => {
    const isSmoke = index % 2 === 0 ? false : true;
    const content = {
      title: el.title,
      bgSmoke: isSmoke,
      bgImage: el.img,
      text: el.desc,
    };
    return <ImgCentral {...content} bgSmoke />;
  });

  const seoAttributes = {
    title: t.seo.activities,
  };

  return (
    <>
      <Seo {...seoAttributes} />
      <Header background={Pizzoccolo3Img} page_type='activities' />
      <ActivitiesMenu state={{ activity, setActivity }} />
      <ColumnSection {...columnSectionData} inverted />
      {RenderSections}
      <Contact t={t} simplified />
      <Footer t={t} />
    </>
  );
}
