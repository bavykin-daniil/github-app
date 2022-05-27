//general
import React from "react";
import { debounce } from "lodash";
//hooks
import useAppDispatch from "../../hooks/useAppDispatch";
import useTypedSelector from "../../hooks/useTypedSelector";
//types
import { ISearchComponent } from "./types";
//actions
//ui
import Input from "../../ui/Input/Input";
//styles
import styles from "./styles.module.scss";

const Search: React.FC<ISearchComponent> = ({ scope, searchFunction }) => {
  const dispatch = useAppDispatch();

  //@ts-ignore
  const { search } = useTypedSelector((state) => state[`${scope}`]);

  const [searchValue, setSearchValue] = React.useState<string>("");

  React.useEffect(() => {
    if (search) {
      setSearchValue(search);
    }
  }, [search]);

  // eslint-disable-next-line
  const handleSearchChange = React.useCallback(
    debounce((value: string) => {
      dispatch(searchFunction(value));
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
