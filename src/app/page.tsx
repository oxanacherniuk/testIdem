import Header from '@/layouts/Header/Header'
import styles from './page.module.css'
import Search from '@/components/Search/Search'
import SectionTitle from '@/components/SectionTitle/SectionTitle'
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import CardGrid from '@/layouts/CardGrid/CardGrid';

export default function Home() {
  const breadcrumbsItems = [
    { label: 'Главная', href: '/' },
    { label: 'Поиск', href: '/' },
  ];

  return (
    <main className={styles.main}>
      <Header />
      <div className='container'>
        <Breadcrumbs items={breadcrumbsItems} />
        <SectionTitle>Поиск</SectionTitle>
        <Search />
        <CardGrid />
      </div>
    </main>
  )
}