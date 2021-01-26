import useLocale from 'hooks/useLocale';
import Menu from 'components/Menu';

export default function Header() {
  const { t } = useLocale();
  return (
    <header class='h-2/3 md:h-5/6 w-full bg-home-header bg-cover p-6 relative'>
      <Menu />
      <div class='h-2/3 md:h-5/6 w-full absolute top-0 left-0 z-0 '>
        <div class='relative h-full flex justify-center blackCarpet z-10'></div>
      </div>
      <h1 class='absolute bottom-0 left-0 ml-2 text-white text-6xl font-serif lowercase z-50 lg:text-9xl'>
        {t.homepage?.welcome}
      </h1>
    </header>
  );
}