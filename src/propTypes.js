// propTypes.js
import PropTypes from "prop-types";

export const babyNamePropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  sex: PropTypes.oneOf(["m", "f"]).isRequired,
});

export const displayNamePropTypes = {
  people: PropTypes.arrayOf(babyNamePropType).isRequired,
  search: PropTypes.string.isRequired,
  addToFavorite: PropTypes.func.isRequired,
  favorite: PropTypes.arrayOf(babyNamePropType).isRequired,
  removeFromFavorite: PropTypes.func.isRequired,
  filter: PropTypes.oneOf(["all", "m", "f"]).isRequired,
};

export const searchBarPropTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  filter: PropTypes.oneOf(["all", "m", "f"]).isRequired,
  setFilter: PropTypes.func.isRequired,
};
