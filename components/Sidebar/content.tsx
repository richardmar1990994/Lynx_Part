import catalog from '../../assets/sidebar/icons_default/catalog.png';
import health from '../../assets/sidebar/icons_default/health.png';
import beauty from '../../assets/sidebar/icons_default/beauty.png';
import enjoy from '../../assets/sidebar/icons_default/enjoy.png';
import car from '../../assets/sidebar/icons_default/car.png';
import catalogActive from '../../assets/sidebar/icons_active/catalog.png';
import healthActive from '../../assets/sidebar/icons_active/health.png';
import beautyActive from '../../assets/sidebar/icons_active/beauty.png';
import enjoyActive from '../../assets/sidebar/icons_active/enjoy.png';
import carActive from '../../assets/sidebar/icons_active/car.png';

interface IMenuTitles {
  id: number,
  title: string,
  img: string,
  imgActive: string,
}

const menuTitles: Array<IMenuTitles> = [
  {
    id: 0,
    title: 'Каталог',
    img: catalog,
    imgActive: catalogActive,
  },
  {
    id: 1,
    title: 'здоровье',
    img: health,
    imgActive: healthActive,
  },
  {
    id: 2,
    title: 'Красота',
    img: beauty,
    imgActive: beautyActive,
  },
  {
    id: 3,
    title: 'Развлечение',
    img: enjoy,
    imgActive: enjoyActive,
  },
  {
    id: 4,
    title: 'Авто',
    img: car,
    imgActive: carActive,
  },
];

export default menuTitles;
