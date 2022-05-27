//general
import React from "react";
import { debounce } from "lodash";
//hooks
import useAppDispatch from "../../hooks/useAppDispatch";
import useTypedSelector from "../../hooks/useTypedSelector";
//actions
import { setSearch } from "../../store/usersList/usersList.actions";
//ui
import Input from "../../ui/Input/Input";
//styles
import styles from "./styles.module.scss";

const Search = () => {
  const dispatch = useAppDispatch();

  const { search } = useTypedSelector((state) => state.users);

  const [searchValue, setSearchValue] = React.useState<string>("");

  React.useEffect(() => {
    if (search) {
      setSearchValue(search);
    }
  }, [search]);

  // eslint-disable-next-line
  const handleSearchChange = React.useCallback(
    debounce((value: string) => {
      dispatch(setSearch(value));
    }, 1000),
    []
  );

  const handleSearchInputChange = (value: string) => {
    handleSearchChange(value);
    setSearchValue(value);
  };

  return (
    <div className={styles.search}>
      <Input
        value={searchValue}
        onChange={handleSearchInputChange}
        placeholder={"Search for users"}
      />
    </div>
  );
};

export default Search;
