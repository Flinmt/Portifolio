import {useTranslations} from 'next-intl';
 
export default function HomePage() {
  const t = useTranslations('HomePage');
  return <h1>{t('hello')}</h1>;
}