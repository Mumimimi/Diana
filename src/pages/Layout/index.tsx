import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import s from 'src/pages/Layout/styles.module.scss'
import { RoutesPath } from 'src/routes/routes'

const Layout = (): JSX.Element => {
  const navigate = useNavigate()

  return (
    <div className={s.container}>
      <div className={s.header}>
        <h1 className={s.mainTitle}>Якимчук Діана 9-г</h1>
        <ul>
          <li>
            <button onClick={() => navigate(RoutesPath.THEME_1)}>Тема 1</button>
          </li>
          <li>
            <button onClick={() => navigate(RoutesPath.THEME_3)}>Тема 3</button>
          </li>
          <li>
            <button onClick={() => navigate(RoutesPath.THEME_6)}>Тема 6</button>
          </li>
          <li>
            <button onClick={() => navigate(RoutesPath.THEME_9)}>Тема 9</button>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  )
}

export default Layout
