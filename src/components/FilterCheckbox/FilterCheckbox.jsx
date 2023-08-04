import "./FilterCheckbox.css";

const FilterCheckbox = ({ onFilter }) => {
  return (
    <section className="filter">
      <input
        type="checkbox"
        id="checkbox"
        className="filter__checkbox"
        onChange={onFilter}
        checked={true}
      />
      <label htmlFor="checkbox" className="filter__label">
        Короткометражки
      </label>
    </section>
  );
};

export default FilterCheckbox;
