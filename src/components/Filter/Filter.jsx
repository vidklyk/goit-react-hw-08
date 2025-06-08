import { useDispatch, useSelector } from "react-redux";
import { setNameFilter } from "../../redux/filters/clice";
import { selectFilter } from "../../redux/filters/selectors";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = (e) => {
    dispatch(setNameFilter(e.target.value));
  };

  return (
    <label>
      Find contacts by name:
      <input type="text" value={filter} onChange={handleChange} />
    </label>
  );
};

export default Filter;
