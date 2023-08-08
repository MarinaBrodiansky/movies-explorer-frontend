import './Profile.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <section>
      <Header loggedIn={true} />
      <div className='profile__container'>
        <h1 className='profile__title'>Привет, !</h1>
        <form className='profile___form form'>
          <div className='profile__value'>
            <label className='profile__label'>Имя</label>
            <input
              type='text'
              name='name'
              className='profile__input'
              minLength="2"
              maxLength={40}
              placeholder='Имя'
              required
            />
          </div>
          <div className='profile__line'></div>
          <div className='profile__value'>
            <label className='profile__label'>E-mail</label>
            <input
              type='email'
              name='email'
              className='profile__input'
              placeholder='email'
              required
            />
          </div>
          <div className='profile__bottom'>
            <button className='profile__edit'>
              Редактировать
            </button>
            <Link className='profile__logout' to='/'>
              Выйти из аккаунта
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Profile;