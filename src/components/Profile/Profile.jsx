import './Profile.css';
import { useFormValidate } from '../../hooks/useFormValidate';
import { validateName, validateEmail } from '../../utils/validate';
import { useContext, useEffect, useState } from 'react';
import { CurrentUserContext } from '../../state/user';

const Profile = ({
  onUpdateUser,
  onSignOut,
  requestErrors,
  isProfileSaved,
  setIsProfileSaved,
}) => {
  const { user } = useContext(CurrentUserContext);
  console.log({user})
  const [edit, setStateEdit] = useState(false);
  const { values, handleChange, errors, isValid, setValues, setIsValid } =
    useFormValidate();

  useEffect(() => {
    if (user) {
      setValues(user);
      setIsValid(true);
    }
  }, [user, setValues, setIsValid]);

  return (
    <>
      <section className="profile">
        <h1 className="profile__title">Привет, {values.name}!</h1>
        <form
          onSubmit={e => {
            e.preventDefault();
            onUpdateUser(values);
            setStateEdit(false);
          }}
          className="profile__form form"
        >
          <div className="profile__value">
            <label className="profile__label">Имя</label>
            <input
              type="text"
              name="name"
              className="profile__input"
              minLength={2}
              maxLength={40}
              disabled={!edit}
              value={values.name || ''}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form__error">
            {errors.name || validateName(values.name).message}
          </div>
          <div className="profile__line"></div>
          <div className="profile__value">
            <label className="profile__label">E-mail</label>
            <input
              type="email"
              name="email"
              className="profile__input"
              disabled={!edit}
              value={values.email || ''}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form__error">
            {errors.email || validateEmail(values.email).message}
          </div>
          <div className="form__error">
            {Object.keys(requestErrors.profile).length
              ? requestErrors.profile.message === 'Validation failed'
                ? requestErrors.profile.validation.body.message
                : requestErrors.profile.message
              : ''}
          </div>
          {isProfileSaved ? (
            <div className="profile__success">Профиль успешно обновлен!</div>
          ) : (
            ''
          )}
          <div className="profile__bottom">
            {edit ? (
              <button
                type="submit"
                className="profile__button-save"
                disabled={
                  !isValid ||
                  (user.name === values.name && user.email === values.email) ||
                  validateName(values.name).invalid ||
                  validateEmail(values.email).invalid
                }
              >
                Сохранить
              </button>
            ) : (
              <>
                <button
                  onClick={e => {
                    e.preventDefault();
                    setIsProfileSaved(false);
                    setStateEdit(true);
                  }}
                  className="profile__button-edit"
                >
                  Редактировать
                </button>
                <button onClick={onSignOut} className="profile__logout">
                  Выйти из аккаунта
                </button>
              </>
            )}
          </div>
        </form>
      </section>
    </>
  );
};

export default Profile;
