import s from 'src/pages/Theme_3/styles.module.scss'

const Theme_3 = () => {
  return (
    <>
      <h1>Комп'ютерна графіка</h1>
      <div className={s.container}>
        <div className={s.videoContainer}>
          <a href="https://www.youtube.com/watch?v=hUqoT9DjSa8">
            Посилання на відео
          </a>
          <img width="700" src="cat_gif.gif"></img>
        </div>
      </div>
    </>
  )
}

export default Theme_3
