import "./AboutProject.css";

const AboutProject = () => {
  return (
    <div className="about" id="project">
      <h2 className="about__title">О проекте</h2>
      <div className="about__description-blocks">
        <div className="about__description-block">
          <h3>Дипломный проект включал 5 этапов</h3>
          <span>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </span>
        </div>
        <div className="about__description-block">
          <h3>На выполнение диплома ушло 5 недель</h3>
          <span>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </span>
        </div>
      </div>
      <div>
        <div className="about__time-bar">
          <div className="about__backend">1 неделя</div>
          <div className="about__frontend">4 недели</div>
        </div>
        <div className="about__time-text">
          <div className="about__backend-text">Back-end</div>
          <div className="about__frontend-text">Front-end</div>
        </div>
      </div>
    </div>
  );
};

export default AboutProject;
