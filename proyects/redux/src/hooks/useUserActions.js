import { useAppDispatch } from "./store";
import { deleteUserById, addNewUser } from "../store/users/slice";

export const useUserActions = () => {
  const dispatch = useAppDispatch();

  const removeUser = (id) => {
    dispatch(deleteUserById(id));
  };

  const addUser = ({ name, email, github }) => {
    dispatch(addNewUser({ name, email, github }));
  };
  return { removeUser, addUser };
};
