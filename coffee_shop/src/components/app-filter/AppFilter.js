import "./AppFilter.scss";

const AppFilter = (props) => {
  const btnsData = [
    { name: "brazil", label: "Brazil" },
    { name: "kenya", label: "Kenya" },
    { name: "columbia", label: "Columbia" },
  ];

  const btns = btnsData.map(({ name, label }) => {
    const active = props.filter === name;
    const clazz = active ? "btn-light" : "btn-outline-light";
    return (
      <button
        type="button"
        key={name}
        className={`btn ${clazz}`}
        onClick={() => props.onFilterSelectItem(name)}
      >
        {label}
      </button>
    );
  });

  return (
    <div className="app-filter">
      <p className="app-filter__title fz_14">Or filter</p>
      <div className="btn-group">{btns}</div>
    </div>
  );
};

export default AppFilter;
