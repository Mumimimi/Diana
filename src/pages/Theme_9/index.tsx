import { useState } from 'react'
import s from 'src/pages/Theme_9/styles.module.scss'

type ContactT = {
  name: string
  number: string
}

const arrayContacts = [
  { name: 'Іван Іванович', number: '+380971234567' },
  { name: 'Марія Петрівна', number: '+380991112233' },
  { name: 'John Smith', number: '+14155501234' },
  { name: 'Sara Johnson', number: '+442071234567' },
  { name: 'Luis Hernandez', number: '+5215512345678' },
  { name: 'Emily Taylor', number: '+12025550123' },
  { name: 'Mohammed Al-Mansoori', number: '+971501234567' },
  { name: 'Катерина Іваненко', number: '+380501234567' },
  { name: 'Carlos Martinez', number: '+523312345678' },
  { name: '王小明', number: '+8615012345678' },
  { name: 'Jennifer Brown', number: '+442031234567' },
  { name: 'Ahmed Khan', number: '+923001234567' },
  { name: 'Maria Garcia', number: '+5215512345678' },
  { name: 'Hiroshi Tanaka', number: '+81312345678' },
  { name: '이지현', number: '+82101112233' },
  { name: 'Maria Silva', number: '+5531991234567' },
  { name: 'Andrea Rossi', number: '+390612345678' },
  { name: 'Juan Pérez', number: '+5217712345678' },
  { name: 'Nadia Ivanova', number: '+380631234567' },
  { name: 'Rahul Patel', number: '+918851234567' },
]

const Theme_9 = () => {
  const [contacts, setContacts] = useState<ContactT[]>(arrayContacts)
  const [value, setValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const filteredContacts = contacts.filter(({ name, number }) => {
    if (
      name.toLowerCase().includes(value.toLowerCase()) ||
      number.toLowerCase().includes(value.toLowerCase())
    )
      return true
  })

  return (
    <>
      <h1>Табличні величини та алгоритми їх опрацювання</h1>
      <div className={s.container}>
        <input
          value={value}
          onChange={handleChange}
          placeholder="Ім'я / номер телефону"
        ></input>
        <ul>
          {filteredContacts.length ? (
            filteredContacts.map(item => (
              <li key={item.name}>
                <p>{item.name}</p>
                <p>{item.number}</p>
              </li>
            ))
          ) : (
            <p>Такого контакту нема</p>
          )}
        </ul>
      </div>
    </>
  )
}

export default Theme_9
